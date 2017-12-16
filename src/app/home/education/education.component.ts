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
        note: 'Studied Bachelor of Technology in Electronics and Communication Engineering. Graduated with 70.8% Mark.'
      },
      {
        college: {
          name: 'ST Thomas Higher Secondary School',
          location: 'Malayattoor'
        },
        start: 2006,
        end: 2008,
        note: 'Studied Higher Secondary Course. Completed with 89% Mark'
      },
      {
        college: {
          name: 'G.V.H.S Koovappady',
          location: 'Koovappady'
        },
        start: 2003,
        end: 2006,
        note: 'Studied SSLC from there, Completed course with  87.5% Marks'
      },
      {
        college: {
          name: 'Church UP School, Cheranalloor',
          location: 'Cheranalloor'
        },
        start: 1996,
        end: 2003,
        note: 'Lower Primary and Upper Primary education'
      }
    ];
  }

}
