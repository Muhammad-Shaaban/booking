import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.css']
})
export class MarketSearchComponent implements OnInit {

  allSaerchResultM;
  showOrHide = true;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  constructor(public service: MarketService, private router: Router) { }

  ngOnInit(): void {
    this.getNumberOfPages();

    this.service.searchInMarket().subscribe(
      (res: any) => {
        this.allSaerchResultM = res.searchResult as [];
        this.showOrHide = false;
      }
    );
  }

  searchMarket(){
    this.service.searchInMarket().subscribe(
      (res: any) => {
        this.allSaerchResultM = res.searchResult as [];
        this.showOrHide = false;
      }
    );

    this.getNumberOfPages();
  }

  moreDetails(id){
    this.router.navigate(['/market/ads/ads-details/' + id]);
  }


  // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.searchInMarket().subscribe(
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
  this.service.marketPageNumber = pageNumber;
  this.showOrHide = true;

  this.service.searchInMarket().subscribe(
    (res: any) => {this.allSaerchResultM = res.searchResult as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.marketPageNumber += 1;
  this.showOrHide = true;

  this.service.searchInMarket().subscribe(
    (res: any) => {this.allSaerchResultM = res.searchResult as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.marketPageNumber -= 1;
  this.showOrHide = true;

  this.service.searchInMarket().subscribe(
    (res: any) => {this.allSaerchResultM = res.searchResult as []; this.showOrHide = false; }
  );
}

}
