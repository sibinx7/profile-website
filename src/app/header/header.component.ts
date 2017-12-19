import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUrl;
  constructor(private router: Router) {
    this.currentUrl = '';
    router.events.subscribe(event => {
      if ( event instanceof NavigationEnd) {
        this.currentUrl = event.url === '/' ? 'home' : '';
      }
    });
  }
  ngOnInit() {
    if (this.router.url === '/') {
      this.currentUrl = 'home';
    }
  }
}
