import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  DocumentReference,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { catchError, map, Observable, retry } from 'rxjs';
import { Categoria } from '../models/categoria';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesCollection: CollectionReference<DocumentData>;

  constructor(private http: HttpClient, private commonService: CommonService, private readonly firestore: Firestore ,  public angularFirestore: AngularFirestore) {
    this.categoriesCollection = collection(this.firestore, 'categorias');
  }

  createCategory(categoria: Categoria): Promise<DocumentReference<DocumentData>> {

    return addDoc(this.categoriesCollection, categoria); // #TODO: Investigar la mejor forma;

    // return this.http
    //   .post<Categoria>(
    //     this.commonService.apiURL + '/categorias',
    //     JSON.stringify(categoria),
    //     this.commonService.httpOptions
    //   )
    //   .pipe(retry(1), catchError(this.commonService.handleError));
  }

  getCategoryById(id: string): Observable<Categoria> {
    const docRef = doc(this.firestore, `categorias/${id}`);
    return docData(docRef, {idField: 'id'}) as Observable<Categoria>;

    // return this.http
    //   .get<Categoria>(this.commonService.apiURL + '/categorias/' + id)
    //   .pipe(retry(1), catchError(this.commonService.handleError));
  }

  getAllCategories(): Observable<Categoria[]> {

    return collectionData(this.categoriesCollection, {
      idField: 'id'
    }) as Observable<Categoria[]>

    // return this.angularFirestore
    // .collection<Categoria>('categorias')
    // .snapshotChanges()
    // .pipe(
    //   map((actions) => {
    //     return actions.map((a) => {
    //       let data = a.payload.doc.data();
    //       const id: string = a.payload.doc.id;
    //       return { ...data, id };
    //     });
    //   }),
    //   catchError(this.commonService.handleError)
    // );


    // return this.http
    //   .get<[Categoria]>(this.commonService.apiURL + '/categorias')
    //   .pipe(retry(1), catchError(this.commonService.handleError));
  }

  updateCategory(categoria: Categoria, categoryId: string): Promise<void> {

    const docRef = doc(this.firestore, `categorias/${categoryId}`)
    return updateDoc(docRef, {...categoria});

    // return this.http
    //   .put<Categoria>(
    //     this.commonService.apiURL + '/categorias/' + categoria.id,
    //     JSON.stringify(categoria),
    //     this.commonService.httpOptions
    //   )
    //   .pipe(retry(1), catchError(this.commonService.handleError));
  }

  deleteCategoryById(id: string) {
    const docRef = doc(this.firestore, `categorias/${id}` );
    return deleteDoc(docRef);

    // return this.http
    //   .delete<Categoria>(
    //     this.commonService.apiURL + '/categorias/' + id,
    //     this.commonService.httpOptions
    //   )
    //   .pipe(retry(1), catchError(this.commonService.handleError));
  }

}
