import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences: object[] = [];
  constructor() { }

  ngOnInit() {
    this.experiences = [
      {
        company: {
          image: '',
          name: 'RedPanthers',
          url: 'http://redpanthers.com'
        },
        start: 2017,
        end: 2014,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        company: {
          image: '',
          name: 'Codeysus',
          url: 'https://www.facebook.com/teamCodeyssus/'
        },
        start: 2014,
        end: 2014,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        company: {
          image: '',
          name: 'Excellon',
          url: 'http://www.excellone.com/'
        },
        start: 2013,
        end: 2014,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        company: {
          image: '',
          name: 'Armia',
          url: 'https://www.armia.com/'
        },
        start: 2013,
        end: 2013,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      }
    ];
  }

}
