import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/admin';
  pageNumber = 1;

  constructor(private http: HttpClient) { }

  getSuggests(){
    return this.http.get(this.baseUrl + '/suggests', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSupportMesssageFromUssr(){
    return this.http.get(this.baseUrl + '/getSupportMessagesFromUsers', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSupportMesssageFromUssrPagi(){
    return this.http.get(this.baseUrl + '/getSupportMessagesFromUsers?page=' + this.pageNumber + '&status=0', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  answerSupport(formData){
    return this.http.post(this.baseUrl + '/AnswerSupport', formData , {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
