import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

import {Blog} from './blog';

import 'rxjs/add/operator/toPromise';

import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class BlogService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private api = environment.BLOG_API_URL;

  constructor(private http: HttpClient) {

  }

  private handleError<T> (operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string = 'Error') {
    console.log(message);
  }


  /**
   * @description Return latest 6 posts
   * @returns {Observable<any>}
   */
  getPosts(): Observable<any> {
    return this.http.get(this.api)
      .pipe(
        catchError(this.handleError('getPosts',[ ]))
      );

  }

  /**
   * @description Return posts by id
   * @param {number} id
   * @returns {Observable<any>}
   */
  getPostById(id: number): Observable<any> {
    const url = `${this.api}/${id}`;
    return this.http.get(url);
  }



}
