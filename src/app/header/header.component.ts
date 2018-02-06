import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public currentUrl;
  public headerClass;
  constructor(private router: Router) {
    this.currentUrl = '';
    router.events.subscribe(event => {
      if ( event instanceof NavigationEnd) {
        try {
          const nextUrl = event.url.split('#')[0];
          this.currentUrl = nextUrl === '/' ? 'home' : 'away-home';
          this.headerClass = (nextUrl === '/') ? 'c-header-wrapper' : 'away-header';
        } catch (e) {}
      }
    });
  }
  ngOnInit() {
    if (this.router.url === '/') {
      this.currentUrl = 'home';
      this.headerClass = 'c-header-wrapper';
      /* Window scroll */
      $(window).scroll((e) => {
        const scrollTop = $(window).scrollTop();
        const headerHeight = $('header').height();
        if (scrollTop > (headerHeight * 2)) {
          this.headerClass = 'away-header';
        } else {
          this.headerClass = 'c-header-wrapper';
        }
      });
      /* end window scroll */
    }
  }
  ngAfterViewInit() {
    // after template load
  }
}
