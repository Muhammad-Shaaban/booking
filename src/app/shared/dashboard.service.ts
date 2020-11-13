import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/admin/TotalNum/';

  constructor(private http: HttpClient) { }

  totalUsers(){
    return this.http.get(this.baseUrl + 'users', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalCustomers(){
    return this.http.get(this.baseUrl + 'customer', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalTraders(){
    return this.http.get(this.baseUrl + 'treder', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalShopCategory(){
    return this.http.get(this.baseUrl + 'shopCatigory', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalProducts(){
    return this.http.get(this.baseUrl + 'products', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalAds(){
    return this.http.get(this.baseUrl + 'ads', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalRented(){
    return this.http.get(this.baseUrl + 'rented', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalRentedToday(){
    return this.http.get(this.baseUrl + 'rentedToDay', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  totalSoldProds(){
    return this.http.get(this.baseUrl + 'SoldProducts', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getIncomes(){
    return this.http.get('https://bookingbackendv1.herokuapp.com/admin/getShopIncome', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
