import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, Observable, retry } from 'rxjs';
import { Product } from '../models/producto';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private angularFirestore: AngularFirestore
  ) {}

  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(
        this.commonService.apiURL + '/productos',
        JSON.stringify(product),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  getProductById(id: string): Observable<Product> {
    return this.http
      .get<Product>(this.commonService.apiURL + '/productos/' + id)
      .pipe(retry(1), catchError(this.commonService.handleError));
  }

  getAllProducts(): Observable<any[]> {
    return this.angularFirestore.collection('productos').valueChanges();

    return this.http
      .get<[Product]>(this.commonService.apiURL + '/productos')
      .pipe(retry(1), catchError(this.commonService.handleError));
  }

  updateProduct(product: Product) {
    return this.http
      .put<Product>(
        this.commonService.apiURL + '/productos/' + product.id,
        JSON.stringify(product),
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
  deleteProductById(id: string) {
    return this.http
      .delete<Product>(
        this.commonService.apiURL + '/productos/' + id,
        this.commonService.httpOptions
      )
      .pipe(retry(1), catchError(this.commonService.handleError));
  }
}
