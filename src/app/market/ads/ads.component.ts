import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';
import { ShopService } from '../../shared/shop.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor(public service: MarketService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  searchMarket(){
    this.router.navigate(['/market/search']);
  }

}
