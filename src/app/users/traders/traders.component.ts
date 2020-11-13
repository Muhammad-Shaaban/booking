import { Component, OnInit } from '@angular/core';
import { AllUsersService } from '../../shared/all-users.service';
import { DashboardService } from '../../shared/dashboard.service';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.css']
})
export class TradersComponent implements OnInit {

  allTradersUser: any = [];
  totalTrader;
  showOrHide = true;

  constructor(private service: AllUsersService,
              private service2: DashboardService,
              private router: Router,
              public userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    // Get Info For Trader Users
    this.service2.totalTraders().subscribe(
      (res: any) => {
        this.totalTrader = res.TotalNum;
      }
    );

    this.service.getTradersUsers().subscribe(
      (res: any) => {
        this.allTradersUser = res.fUser as [];
        this.showOrHide = false;
      }
    );
  }

  getSingleTrader(id){
    this.router.navigate(['/singleUser/trader/' + id]);
  }

  sendNotification(userType){
    this.router.navigate(['/singleUser/send-notification-all/' + userType ]);
  }

  searchUser(){
    this.router.navigate(['/Users/search-user']);
  }

}
