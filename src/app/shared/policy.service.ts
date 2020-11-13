import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/market/general';

  constructor(private http: HttpClient) { }

  getPlicy(){
    return this.http.get(this.baseUrl + '/getPolicy', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  postPolicy(data){
    return this.http.post('https://bookingbackendv1.herokuapp.com/admin/editPolicy', data, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
