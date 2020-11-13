import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../shared/shop.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

}
