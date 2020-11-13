import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.css']
})
export class AllCitiesComponent implements OnInit {

  allCities;
  showOrHide = true;

  constructor(private service: ShopService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.loadingData();
  }

  loadingData(){
    this.service.getAllCities().subscribe(
      (res: any) => {
        this.allCities = res.cities as [];
        this.showOrHide = false;
      }
    );
  }

  createCity(){
    this.router.navigate(['/shop/cities/create-city']);
  }

  deleteCity(id){
    const data = {
      cityId: id
    };

    this.service.deleteCity(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.loadingData();
      }
    );
  }

}
