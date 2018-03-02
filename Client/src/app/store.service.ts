import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import {Product} from  './Product';
@Injectable()
export class StoreService {

  getProductsUrl = 'http://localhost:3000/api/product/getProducts';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<any>{
    return  this.http.get<Product[]>(this.getProductsUrl)
  }

}
