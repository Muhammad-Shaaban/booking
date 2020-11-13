import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../../shared/market.service';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formData = {
    title: '',
    avilableNum: '',
    CatigoryID: '',
    price: '',
    details: '',
    image: ''
  };

  showOrHide = true;
  allMarketCategory;
  allShopCategory;

  imgUrl;

  constructor(private shopService: ShopService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.shopService.getShopategory().subscribe(
      (res: any) => {
        this.allShopCategory = res.catigories as [];
        this.showOrHide = false;
      }
    );
  }

  uploadFile(event){
    this.imgUrl = event.target.files;
  }

  createProdcut(){
    const form = new FormData();
    form.append('title', this.formData.title);
    form.append('avilableNum', this.formData.avilableNum);
    form.append('CatigoryID', this.formData.CatigoryID);
    form.append('price', this.formData.price);
    form.append('details', this.formData.details);

    for (let i =0; i < this.imgUrl.length; i++) {
      form.append('image', this.imgUrl[i]);
    }

    this.shopService.createProduct(form).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });
      }, err => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }

}
