import { Component, OnInit } from '@angular/core';
import { AllUsersService } from '../../shared/all-users.service';
import { DashboardService } from '../../shared/dashboard.service';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  allCustomerUser: any = [];
  totalCustomer;
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
    this.service2.totalCustomers().subscribe(
      (res: any) => {
        this.totalCustomer = res.TotalNum;
      }
    );

    this.service.getCustomerUsers().subscribe(
      (res: any) => {
        this.allCustomerUser = res.fUser as [];
        this.showOrHide = false;
      }
    );
  }

  getSingleCustomer(id){
    this.router.navigate(['/singleUser/customer/' + id]);
  }

  sendNotification(userType){
    this.router.navigate(['/singleUser/send-notification-all/' + userType ]);
  }

  searchUser(){
    this.router.navigate(['/Users/search-user']);
  }


}
