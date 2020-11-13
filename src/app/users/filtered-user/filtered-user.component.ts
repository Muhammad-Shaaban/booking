import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-filtered-user',
  templateUrl: './filtered-user.component.html',
  styleUrls: ['./filtered-user.component.css']
})
export class FilteredUserComponent implements OnInit {

  filteredUser;
  showOrHide = true;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  constructor(public service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getNumberOfPages();

    this.service.getFilterdUser().subscribe(
      (res: any) => {
        this.filteredUser = res.searchResult as [];
        this.showOrHide = false;
      }
    );
  }

  searchUser(){
    this.service.getFilterdUser().subscribe(
      (res: any) => {
        this.filteredUser = res.searchResult as [];
        this.showOrHide = false;
      }
    );
  }

  getMoreDetails(id, status){
    if (status === 'treder') {
      this.router.navigate(['/singleUser/trader/' + id]);
    } else {
      this.router.navigate(['/singleUser/customer/' + id]);
    }
  }

   // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.getFilterdUser().subscribe(
   (count: any) => {
     this.totalRecords = count.totalItems;

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
  this.service.pageNumberUser = pageNumber;
  this.showOrHide = true;

  this.service.getFilterdUser().subscribe(
    (res: any) => {this.filteredUser = res.searchResult as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.pageNumberUser += 1;
  this.showOrHide = true;

  this.service.getFilterdUser().subscribe(
    (res: any) => {this.filteredUser = res.searchResult as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.pageNumberUser -= 1;
  this.showOrHide = true;

  this.service.getFilterdUser().subscribe(
    (res: any) => {this.filteredUser = res.searchResult as []; this.showOrHide = false; }
  );
}

}
