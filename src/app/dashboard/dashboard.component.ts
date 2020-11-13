import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../shared/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  totalUsers;
  totalCustomer;
  totalTraders;
  totalAds;
  totalProducts;
  totalShop;
  totlaRented;
  totalRentedToday;
  totalSoldProds;
  incomes;
  showOrHide = true;

  constructor(private service: DashboardService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }

    this.service.totalUsers().subscribe(
      (res: any) => {
        this.totalUsers = res.TotalNum;
      }
    );

    this.service.totalCustomers().subscribe(
      (res: any) => {
        this.totalCustomer = res.TotalNum;
      }
    );

    this.service.totalTraders().subscribe(
      (res: any) => {
        this.totalTraders = res.TotalNum;
      }
    );

    this.service.totalShopCategory().subscribe(
      (res: any) => {
        this.totalShop = res.Data.length;
        console.log(this.totalShop);
      }
    );

    this.service.totalProducts().subscribe(
      (res: any) => {
        this.totalProducts = res.TotalNum;
      }
    );

    this.service.totalRented().subscribe(
      (res: any) => {
        this.totlaRented = res.TotalNum;
      }
    );

    this.service.totalRentedToday().subscribe(
      (res: any) => {
        this.totalRentedToday = res.TotalNum;
      }
    );

    this.service.totalSoldProds().subscribe(
      (res: any) => {
        this.totalSoldProds = res.TotalNum;
      }
    );

    this.service.totalAds().subscribe(
      (res: any) => {
        this.totalAds = res.TotalNum;
        this.showOrHide = false;
      }
    );

    this.service.getIncomes().subscribe(
      (res: any) => {
        this.incomes = res.income;
      }
    );
  }

}
