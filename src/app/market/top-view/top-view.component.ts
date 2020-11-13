import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.css']
})
export class TopViewComponent implements OnInit {

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
