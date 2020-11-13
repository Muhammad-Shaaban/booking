import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-create-promo',
  templateUrl: './create-promo.component.html',
  styleUrls: ['./create-promo.component.css']
})
export class CreatePromoComponent implements OnInit {

  formData = {
    name: '',
    descPercent: ''
  };

  constructor(private service: ShopService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  createPromo(){
    this.service.createPromo(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/shop/promos/all-promos']);
      }
    );
  }

}
