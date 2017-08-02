import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../home/blog/blog.service'
import { Blog } from '../../home/blog/blog';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	public post: Blog;
	private id: number;
  constructor(private blogService: BlogService, private route:ActivatedRoute) { }

  ngOnInit() {
		this.route.params.subscribe((params: Params)=> {
			this.id = params['id']
		})
		this.blogService.getPostById(this.id)
		.then(response => {
			this.post = response
		})

  }

}
