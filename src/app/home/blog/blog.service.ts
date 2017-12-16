import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Blog } from './blog'

import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';

@Injectable()
export class BlogService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private api = environment.BLOG_API_URL;
  constructor(private http: Http) {

	}

	getPosts(): Promise<Blog[]> {
		return this.http.get(this.api)
			.toPromise()
			.then(response => response.json()  )
			.catch(error => console.log(error))
	}

	getPostById( id: number ): Promise<Blog>{
		const url = `${this.api}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() )
			.catch(error => console.log(error))
	}

}
