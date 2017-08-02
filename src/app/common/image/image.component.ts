import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  public style: object = {};
  @Input('src') src: string;
  @Input('title') title: string;
  @Input('alt') alt: string;
  @Input('dimension') dimension: string;
  constructor() { }

  ngOnInit() {
    if (this.dimension) {
      const size =  (this.dimension).split(',');
      if ( Array.isArray(size) && size.length === 2) {
        this.style['width.px'] = size[0];
        this.style['height.px'] = size[1];
      }
    }
    if (this.alt) {
      this.alt = (this.alt.split(' ').map((item) => item.charAt(0))).join('');
    }
  }

}
