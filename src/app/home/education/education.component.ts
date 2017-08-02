import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public educations: object[] = [];
  constructor() { }

  ngOnInit() {
    this.educations = [
      {
        college: {
          name: 'Fisat',
          location: 'Mookkannoor'
        },
        start: 2008,
        end: 2012,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        college: {
          name: 'Fisat',
          location: 'Mookkannoor'
        },
        start: 2008,
        end: 2012,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        college: {
          name: 'Fisat',
          location: 'Mookkannoor'
        },
        start: 2008,
        end: 2012,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        college: {
          name: 'Fisat',
          location: 'Mookkannoor'
        },
        start: 2008,
        end: 2012,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      },
      {
        college: {
          name: 'Fisat',
          location: 'Mookkannoor'
        },
        start: 2008,
        end: 2012,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus condimentum velit vel scelerisque. ' +
        'Proin efficitur velit at leo sollicitudin, eu interdum dolor lacinia.'
      }
    ];
  }

}
