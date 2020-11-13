import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../../shared/market.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {

  allAds;
  showOrHide = true;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  constructor(public service: MarketService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.getNumberOfPages();

    this.service.getAllAdsPagination().subscribe(
      (res: any) => {
        this.allAds = res.allAds as [];
        this.showOrHide = false;
      }
    );
  }

 // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.getAllAds().subscribe(
   (count: any) => {
     this.totalRecords = count.TotaNum;

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
  this.service.allAdsPageNum = pageNumber;
  this.showOrHide = true;

  this.service.getAllAdsPagination().subscribe(
    (res: any) => {this.allAds = res.allAds as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.allAdsPageNum += 1;
  this.showOrHide = true;

  this.service.getAllAdsPagination().subscribe(
    (res: any) => {this.allAds = res.allAds as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.allAdsPageNum -= 1;
  this.showOrHide = true;

  this.service.getAllAdsPagination().subscribe(
    (res: any) => {this.allAds = res.allAds as []; this.showOrHide = false; }
  );
}

setTopView(id){
  let msm = prompt('What is the position you want to set as most top View ?');

  let data = {
    adId: id,
    position: msm.valueOf()
  };

  this.showOrHide = true;

  this.service.setTopView(data).subscribe(
    (res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 2000
      });

      this.service.getAllAdsPagination().subscribe(
        (res2: any) => {
          this.allAds = res2.allAds as [];
          this.showOrHide = false;
        }
      );


    }
  );
}


deleteADS(id){
  let data = {
    ADId: id
  };

  this.showOrHide = true;

  this.service.deleteAds(data).subscribe(
    (res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 2000
      });

      this.service.getAllAdsPagination().subscribe(
        (res2: any) => {
          this.allAds = res2.allAds as [];
          this.showOrHide = false;
        }
      );
    }, (errr: any) => console.log(errr)
  );
}

goToRequestedAds(){
  this.router.navigate(['/market/ads/requested-ads']);
}

}
