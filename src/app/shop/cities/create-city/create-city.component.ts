import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {

  formData = {
    name: '',
    arb_name: ''
  };

  constructor(private service: ShopService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  createCity(){
    this.service.createCity(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/shop/cities/all-citites']);
      }
    );
  }

}
