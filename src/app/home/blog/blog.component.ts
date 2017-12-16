import { Component, OnInit } from '@angular/core';

import { Blog } from './blog';
import { BlogService 	} from './blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts: Blog[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
		this.blogService.getPosts()
			.then(result => {
                console.log(result)
				this.posts = result
			})
		
  }

}

// [
//       {
//         title: 'Lorem lipsum blog post',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//         'Morbi sed congue nulla. Donec lacinia nisl vitae est scelerisque posuere. Suspendisse fermentum',
//         published_at: '2016-38-19 10:AM',
//         author: 'Sibin Xavier',
//         link: 'http://blog.7chip.com/',
//         image: 'http://lorempixel.com/640/420'
//       },
//       {
//         title: 'Lorem lipsum blog post',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//         'Morbi sed congue nulla. Donec lacinia nisl vitae est scelerisque posuere. Suspendisse fermentum',
//         published_at: '2016-38-19 10:AM',
//         author: 'Sibin Xavier',
//         link: 'http://blog.7chip.com/',
//         image: 'http://lorempixel.com/640/420'
//       },
//       {
//         title: 'Lorem lipsum blog post',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//         'Morbi sed congue nulla. Donec lacinia nisl vitae est scelerisque posuere. Suspendisse fermentum',
//         published_at: '2016-38-19 10:AM',
//         author: 'Sibin Xavier',
//         link: 'http://blog.7chip.com/',
//         image: 'http://lorempixel.com/640/420'
//       }
//     ];
