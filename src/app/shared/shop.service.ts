import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://bookingbackendv1.herokuapp.com/admin';
  baseUrl2 = 'https://bookingbackendv1.herokuapp.com/shop';

  pageNumber = 1;

  searchPageNumber = 1;
  shopSearch = ' ';

  constructor(private http: HttpClient) { }

  // Routes for Products
  getAllProductsPagination(){
    return this.http.get(this.baseUrl + '/getAllProducts?page=' + this.pageNumber, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getAllProducts(){
    return this.http.get(this.baseUrl + '/getAllProducts', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSingleProduct(id){
    return this.http.get(this.baseUrl2 + '/getProductByID/' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  deleteProduct(formData){
    return this.http.post(this.baseUrl + '/deleteProduct', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  createProduct(formData){
    return this.http.post(this.baseUrl + '/CreateProduct', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  updateProduct(formData){
    return this.http.post(this.baseUrl + '/editProduct', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  // Routes for category
  getShopategory(){
    return this.http.get(this.baseUrl2 + '/getShopAvilablCatigory', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }


  // Routes for city
  getAllCities(){
    return this.http.get('https://bookingbackendv1.herokuapp.com/market/general/getAvilabecites', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  createCity(formData){
    return this.http.post(this.baseUrl + '/AddCity', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  deleteCity(formData){
    return this.http.post(this.baseUrl + '/deleteCity', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  // Routes for Orders
  getAllOrders(){
    return this.http.get(this.baseUrl + '/getOrders/?status=false', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  getSingleOrder(id){
    return this.http.get(this.baseUrl + '/getOrders/?orderId=' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  setOrderToDeliver(id){
    return this.http.post(this.baseUrl + '/SetDeleverToTrue?id=' + id, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }


  // Routes for promo
  getAllPromos(){
    return this.http.get(this.baseUrl + '/getAllPromo', {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  createPromo(formData){
    return this.http.post(this.baseUrl + '/createPromo', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  updatePromo(formData){
    return this.http.post(this.baseUrl + '/editPromo', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  deletePromo(formData){
    return this.http.post(this.baseUrl + '/deletePromo', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  searchInShop(){
    return this.http.get('https://bookingbackendv1.herokuapp.com/search/?search=' + this.shopSearch + '&type=shop&page=' + this.searchPageNumber, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }

  creatShopCategory(formData){
    return this.http.post(this.baseUrl + '/createProductCatigory', formData, {headers: {Authorization: 'hello ' + localStorage.getItem('token')}});
  }
}
