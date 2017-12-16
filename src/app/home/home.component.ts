import {AfterViewInit, Component, OnInit} from '@angular/core';

import Typed from 'typed.js';


interface Skills {
    label: string;
    progress: number;
}

interface  Services {
  title: string;
  image: string;
  children: Array<string>;
  price: string;
}


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  public profileInfo: Object    = null;
  public skills: Array<Skills>  = [];
  public services: Object[]     = [];
  constructor() { }

  ngOnInit() {

    this.profileInfo = {
      bio: `<p>Hello, I'm Sibin Xavier, I am a Full-Stack Web Developer, WordPress Developer, Frontend Developer from India. Currently working as a full time Freelancer. On Freelancer website i mainly work on PSD to HTML
      , WordPress Development, Angular JS Frontend Development. I have completed more than 50+ Projects on Freelancer and Worked in Medium, High Enterprise applications.</p>
        <p>I develope website with with a strong focus on responsive design, performance, and accessibility, using the latest front-end design techniques.I use most of the latest technologies, like PostCSS, ES7, MEAN Stack etc</p>
        <p>If you’re looking for a front-end developer who will also care about , to user experience, and clean, maintaiable, future-proof code—then you’re in the right place. Learn more about my services or hire me now.</p>`,
      data: [
        {label: 'Name', value: 'Sibin Xavier'},
        {label: 'Age', value: '27 Years (27-02-1991)'},
        {label: 'Experience', value: '4+ Years'},
        {label: 'Email', value: 'sibinx7@outlook.com, sibinx7@gmail.com'},
        {label: 'Phone', value: '+91-8943648198, +91-8281604078'},
        {label: 'Skype', value: 'sibin.xavier.1'},
        {label: 'Website', value: 'www.7chip.com', link: true , href: 'http://7chip.com'},
        {label: 'Address', value: 'Thottankara (House), Cheranalloo P.O, Koovappady, Ernakulam<br/> PIN : 683544', html: true}
      ]
    };

    this.skills = [
      {label: 'HTML', progress: 69},
      {label: 'Javascript', progress: 45},
      {label: 'Ruby', progress: 32},
      {label: 'PHP', progress: 89},
      {label: 'WordPress', progress: 78},
      {label: 'Angular', progress: 68},
      {label: 'React', progress: 40},
      {label: 'Ember JS', progress: 30},
      {label: 'TypeScript', progress: 40}
    ];

    this.services = [
      {
        title: 'PSD to HTML',
        image: '../assets/images/psd-to-html-development.jpg',
        children: [
          'Middleman/ Phenomic/ Jekyll Static Website builder',
          'WordPress Template',
          'Drupal Template',
          'SASS/ SCSS/ PostCSS',
          'Javascript/ Typescript/ ES6',
          'HAML/ SLIM/ Markdown/ Jade'
        ],
        price: 'Starting from $20'
      },
      {
        title: 'Frontend Development',
        image: '../assets/images/frontend-development.jpg',
        children: [
          'React / Redux Development',
          'Angular 1/4 Websites',
          'Ember JS Website',
          'Highchart/ D3JS Plugins/ Canvas chart',
          'Google Map and APIs',
          'Polymer JS',
          'Ionic Framework/ Hybrid Application'
        ],
        price: ' Starting from $100'
      },
      {
        title: 'Web Development',
        image: '../assets/images/backend-development.jpg',
        children: [
          'WordPress Development',
          'Drupal Development',
          'Ruby on Rails + Frontend Development',
          'Laravel + Frontend Development',
          'Jekyll/ Ghost',
          'MEAN Stack Development',
          'Meteor JS'
        ],
        price: 'Starting from $200'
      }
    ];
  }

  ngAfterViewInit() {
    const types = new Typed('#typed-skill', {
      strings: ['Web Designer', 'Frontend Developer', 'Fullstack Developer', 'Youtuber', 'Blogger', 'WordPress Developer'],
      typeSpeed: 80,
      loop: true,
      loopCount: 10000,
      backDelay: 100,
      backSpeed: 60,
      showCursor: true
    });
  }
  public contactSubmit(e) {
    console.log(e);
  }

}
