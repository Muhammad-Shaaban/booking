import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../shared/shop.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private router: Router, public service: ShopService, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  searchShop(){
    this.router.navigate(['/shop/search']);
  }

}
