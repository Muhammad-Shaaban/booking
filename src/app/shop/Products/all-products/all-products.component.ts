import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  showOrHide = true;
  allProducts;
  showNextandPrev = false;
  totalRecords: number;
  totalPages;

  constructor(public service: ShopService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.getNumberOfPages();
    this.loadinfData();
  }

  loadinfData(){
    this.service.getAllProductsPagination().subscribe(
      (res: any) => {
        this.allProducts = res.products as [];
        this.showOrHide = false;
      }
    );
  }

  moreDetails(id){
    this.router.navigate(['/shop/products/single-product/' + id]);
  }

  createProduct(){
    this.router.navigate(['/shop/products/create-product']);
  }

  editProd(id){
    this.router.navigate(['/shop/products/edit-product/' + id]);
  }

  deleteProd(id){
    let data = {
      produtId: id
    };

    this.showOrHide = true;

    this.service.deleteProduct(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.loadinfData();
      }
    );
  }


  // Get Number of Page
 getNumberOfPages() {
  // get all products in curent category
  this.service.getAllProducts().subscribe(
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
  this.service.pageNumber = pageNumber;
  this.showOrHide = true;

  this.service.getAllProductsPagination().subscribe(
    (res: any) => {this.allProducts = res.allAds as []; this.showOrHide = false; }
  );
}

goNext() {
  this.service.pageNumber += 1;
  this.showOrHide = true;

  this.service.getAllProductsPagination().subscribe(
    (res: any) => {this.allProducts = res.allAds as []; this.showOrHide = false; }
  );
}

goPrev() {
  this.service.pageNumber -= 1;
  this.showOrHide = true;

  this.service.getAllProductsPagination().subscribe(
    (res: any) => {this.allProducts = res.allAds as []; this.showOrHide = false; }
  );
}

}
