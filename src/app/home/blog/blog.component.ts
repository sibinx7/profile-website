import {Component, OnInit} from '@angular/core';

import {Blog} from './blog';
import {BlogService} from './blog.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    public posts: Blog[] = [];

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        this.blogService.getPosts()
          .subscribe(posts => this.posts = posts );
    }

}