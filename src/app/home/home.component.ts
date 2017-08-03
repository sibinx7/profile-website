import {AfterViewInit, Component, OnInit} from '@angular/core';

import Typed from 'typed.js';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  public profileInfo: Object    = null;
  public skills: Object[]       = [];
  public services: Object[]     = []
  constructor() { }

  ngOnInit() {

    this.profileInfo = {
      bio: 'Hi, Friends. My name is Sibin Xavier, I am Frontend developer from India. ' +
      'After pursueing BTech degree from College, I attended Java course @ NIIT, ' +
      'Then started working on Software field.' +
      'I have worked in different companies in different domain, I worked in PHP, Drupal and WordPress' +
      '2014, I joined @ Codeysus, before that i have attend internship and training in small companies' +
      'as a Django + Frontend developer, I got many knowledge. 1 Year later i moved to RedPanthers software' +
      'where i got chance to work with big people. 2 Year i learned Ruby on Rails, and many Frontend frameworks' +
      'like Angular, Meteor, Polymer, VueJS, KnowckoutJS, React JS, Ember JS, Ionic and MEAN stack' +
      'RedPanther really a turining point in my carreer i got chance to work very closely with clients and ' +
      'many open source projects. 2017 i left RedPanther and now I\'m full time Freelancer' +
      ' I can work in various domain like Laravel, Ruby On Rails, WordPress, MEAN Stack and as Frontend engineer' +
      'with Angular, React and so...',
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
      {label: 'WordPress', progress: 78}
    ];

    this.services = [
      {
        title: 'PSD to HTML',
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
      strings: ['Web Designer', 'Frontend Developer', 'Fullstack Developer', 'Youtuber', 'Blogger'],
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
