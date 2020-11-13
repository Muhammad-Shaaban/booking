import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleUserService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/admin/getuserProfile/';
  baseUrl2 = 'https://bookingbackendv1.herokuapp.com/admin/blockUser';

  constructor(private http: HttpClient) { }

  getSingleUser(id){
    return this.http.get(this.baseUrl + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  blockUser(data){
    return this.http.post(this.baseUrl2, data, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  sendNotificationToUsers(formData){
    return this.http.post('https://bookingbackendv1.herokuapp.com/admin/sendNotifcationToMobile', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
