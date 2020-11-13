import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../shared/shop.service';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.component.html',
  styleUrls: ['./shop-search.component.css']
})
export class ShopSearchComponent implements OnInit {

  allSaerchResult;
  showOrHide =  true;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  constructor(public service: ShopService, private router: Router) { }

  ngOnInit(): void {
    this.getNumberOfPages();

    this.service.searchInShop().subscribe(
      (res: any) => {
        this.allSaerchResult = res.searchResult as [];
        this.showOrHide = false;
      }
    );
  }

  searchShop(){
    this.service.searchInShop().subscribe(
      (res: any) => {
        this.allSaerchResult = res.searchResult as [];
        this.showOrHide = false;
      }
    );

    this.getNumberOfPages();
  }

  moreDetails(id){
    this.router.navigate(['/shop/products/single-product/' + id]);
  }


  // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.searchInShop().subscribe(
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
  this.service.searchPageNumber = pageNumber;
  this.showOrHide = true;

  this.service.searchInShop().subscribe(
    (res: any) => {this.allSaerchResult = res.searchResult as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.searchPageNumber += 1;
  this.showOrHide = true;

  this.service.searchInShop().subscribe(
    (res: any) => {this.allSaerchResult = res.searchResult as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.searchPageNumber -= 1;
  this.showOrHide = true;

  this.service.searchInShop().subscribe(
    (res: any) => {this.allSaerchResult = res.searchResult as []; this.showOrHide = false; }
  );
}
}
