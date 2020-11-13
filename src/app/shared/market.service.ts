import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/market/general';
  baseUrl2 = 'https://bookingbackendv1.herokuapp.com/admin';

  allAdsPageNum = 1;

  marketSearch = ' ';
  marketPageNumber = 1;

  bookingOperationNumber = 1;

  constructor(private http: HttpClient) { }

  // Category Routes
  getAvilableCategory(){
    return this.http.get(this.baseUrl + '/getAvilableCatigories', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSingleCategory(id){
    return this.http.get(this.baseUrl + '/getAvilableCatigories/' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  createNewCategory(data){
    return this.http.post(this.baseUrl2 + '/createApprtmentCatigory', data, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  updateCategpory(fromData){
    return this.http.post(this.baseUrl2 + '/EditApprtmentCatigory', fromData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }


  // Services Routes
  getServices(){
    return this.http.get(this.baseUrl + '/getAvilableServices', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSingleService(id){
    return this.http.get(this.baseUrl + '/getAvilableServices/' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  createService(formData){
    return this.http.post(this.baseUrl2 + '/createService', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  editService(formData){
    return this.http.post(this.baseUrl2 + '/EditService', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }


  // Ads Routes
  getAllAds(){
    return this.http.get(this.baseUrl + '/getAllads', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getRequestedAds(){
    return this.http.get(this.baseUrl2 + '/getAdRequest', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  acceptedAds(id){
    return this.http.post(this.baseUrl2 + '/AcceptAdRequest?id=' + id, null, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  refuseAds(formData){
    return this.http.post(this.baseUrl2 + '/refuseADbyID', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getAllAdsPagination(){
    return this.http.get(this.baseUrl + '/getAllads?page=' + this.allAdsPageNum, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getAdsDetails(id){
    return this.http.get(this.baseUrl + '/getAdDetailsById/' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  deleteAds(formData){
    return this.http.post(this.baseUrl2 + '/deleteAppartmetbyID', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }


  // Top Views Routes
  getAllTopViews(){
    return this.http.get(this.baseUrl + '/getMostView', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  setTopView(formData){
    return this.http.post(this.baseUrl2 + '/setTopView', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  // booking Operations
  getAllBookingOperations(){
    return this.http.get(this.baseUrl2 + '/getBookingOpertaions', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getAllBookingOperationsPagin(status){
    return this.http.get(this.baseUrl2 + '/getBookingOpertaions/?page='+this.bookingOperationNumber + '&status=' + status, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSingleBookingOperation(bookingID){
    return this.http.get(this.baseUrl2 + '/getBookingOpertaions/?id=' + bookingID, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  searchInMarket(){
    return this.http.get('https://bookingbackendv1.herokuapp.com/search/?search='+this.marketSearch+'&type=market&page=' + this.marketPageNumber, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

}
