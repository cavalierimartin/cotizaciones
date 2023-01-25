import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fire } from '../models/fire';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiURL = 'http://localhost:3002';

  constructor(public angularFirestore: AngularFirestore) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /**
   *
   * @param path string to the expected collection, ie: 'users'
   * @returns The updated value of the collection
   */
  getAllTStream<T>(path: string) {
    return this.angularFirestore
      .collection<T>(path)
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            let data = a.payload.doc.data();
            const id: string = a.payload.doc.id;
            return { id, data };
          });
        }),
        catchError(this.handleError)
      );
  }

  getAllTOnce<T>() {
    // #TODO: Add the method to get data from firebase once;
  }

  getTByIdStream<T>(){
    // #TODO: add method to get document by id stream
  }

  getTByIdOnce<T>(){
    // #TODO: add method to get document by id once
  }
}
