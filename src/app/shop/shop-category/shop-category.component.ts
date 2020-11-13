import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../shared/shop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {

  formData = {
    name: '',
    arb_name: ''
  };

  constructor(private servcie: ShopService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(){
    this.servcie.creatShopCategory(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/shop/products/all-products']);

      }
    );
  }

}
