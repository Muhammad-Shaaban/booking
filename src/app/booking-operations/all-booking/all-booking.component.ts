import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {

  showOrHide = true;
  allBookingInfo;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  bookingStatus;

  constructor(public service: MarketService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.getNumberOfPages();

    this.service.getAllBookingOperationsPagin(-1).subscribe(
      (res: any) => {
        this.allBookingInfo = res.request as [];
        this.showOrHide = false;
      }
    );
  }

  getSingleBooking(id){
    this.router.navigate(['/bookingOperations/singleBooking/' + id]);
  }

   // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.getAllBookingOperations().subscribe(
   (count: any) => {
     this.totalRecords = count.TotalNum;

     // Build Pagination
     this.totalPages = this.totalRecords / 10;

     // Check Number of buttons that will be show to user
     if (this.totalPages < 1) {
       this.totalPages = 1;
     } else {
       this.totalPages = Math.ceil(this.totalPages);
     }


     // show or hide Next & Previous Button
     this.showNextandPrev = this.totalPages > 5 ? true : false;

   }
 );
}

// Pagination ==>
// Generate Page numbers
paginationGenerate(page: number) {
  var items: number[] = [];
  for(var i = 1; i <= page; i++){
    items.push(i);
  }
  return items;
}

getNextPage(pageNumber: number) {
  this.service.bookingOperationNumber = pageNumber;
  this.showOrHide = true;

  this.service.getAllBookingOperationsPagin(this.bookingStatus).subscribe(
    (res: any) => {this.allBookingInfo = res.request as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.bookingOperationNumber += 1;
  this.showOrHide = true;

  this.service.getAllBookingOperationsPagin(this.bookingStatus).subscribe(
    (res: any) => {this.allBookingInfo = res.request as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.bookingOperationNumber -= 1;
  this.showOrHide = true;

  this.service.getAllBookingOperationsPagin(this.bookingStatus).subscribe(
    (res: any) => {this.allBookingInfo = res.request as []; this.showOrHide = false; }
  );
}

getBookingFiltered(e){
 this.bookingStatus = e.target.value;

 this.showOrHide = true;

 this.service.getAllBookingOperationsPagin(this.bookingStatus).subscribe(
  (res: any) => {
    this.allBookingInfo = res.request as [];
    this.showOrHide = false;
  }
);
}

}
