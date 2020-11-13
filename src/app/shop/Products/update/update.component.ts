import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formData = {
    productID: '',
    title: '',
    CatigoryID: '',
    price: '',
    details: '',
    avilableNumber: '',
    image: ''
  };

  showOrHide = true;
  allShopCategory;

  imgUrl;
  prodID;

  constructor(private shopService: ShopService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UsersService) { }

  ngOnInit(): void {

    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.prodID = this.route.snapshot.paramMap.get('id');

    this.shopService.getShopategory().subscribe(
      (res: any) => {
        this.allShopCategory = res.catigories as [];
      }
    );

    this.shopService.getSingleProduct(this.prodID).subscribe(
      (res: any) => {
        this.formData.productID = res.product._id;
        this.formData.title = res.product.title;
        this.formData.price = res.product.price;
        this.formData.CatigoryID = res.product.catigory;
        this.formData.details = res.product.desc;
        this.formData.avilableNumber = res.product.avilableNumber;

        this.showOrHide = false;
      }
    );
  }

  uploadFile(event){
    this.imgUrl = event.target.files;

  }

  updateProduct(){
    const form = new FormData();
    form.append('productID', this.formData.productID);
    form.append('title', this.formData.title);
    form.append('details', this.formData.details);
    form.append('CatigoryID', this.formData.CatigoryID);
    form.append('price', this.formData.price);
    form.append('avilableNum', this.formData.avilableNumber);

    if (this.imgUrl) {
      for (let i =0; i < this.imgUrl.length; i++) {
        form.append('image', this.imgUrl[i]);
      }
    } else {
      console.log('no img');
    }

    this.shopService.updateProduct(form).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/shop/products/all-products']);

      }, err => {
        console.log(err);
      }
    );

  }

}
