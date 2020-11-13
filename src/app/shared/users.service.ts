import { Injectable } from '@angular/core';
import { UserInfo } from '../classes/user.models';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: UserInfo;
  helper = new JwtHelperService();

  userSearch = ' ';
  pageNumberUser = 1;

  constructor(private http: HttpClient) { }

  baseUrl = 'https://bookingbackendv1.herokuapp.com/';

  login() {
    return this.http.post(this.baseUrl + 'admin/login', this.user);
  }

  signup() {
    return this.http.post(this.baseUrl + 'admin/register', this.user);
  }

  getFilterdUser(){
    return this.http.get('https://bookingbackendv1.herokuapp.com/search/?search='+ this.userSearch +'&type=user&page=' + this.pageNumberUser, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  checkAuthIsExpires() {
    const token = localStorage.getItem('token');
    if (this.helper.isTokenExpired(token)) {
      localStorage.removeItem('token');
      return true;
    } else {
      return false;
    }
  }

}
