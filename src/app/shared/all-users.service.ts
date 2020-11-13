import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/admin/getAllUsers/';

  constructor(private http: HttpClient) { }

  getCustomerUsers(){
    return this.http.get(this.baseUrl + 'customer', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getTradersUsers(){
    return this.http.get(this.baseUrl + 'treder', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
