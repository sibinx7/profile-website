import {Component, Input, OnInit} from '@angular/core';

interface Skills {
  label: string;
  progress: number;
}

@Component({
  selector: 'app-progress-bar',
  template: `<div class="progress-wrapper mb-2"><label>{{skill.label}}</label> <div class="progress">` +
    `<div class="progress-bar bg-success" role="progressbar"` +
         `[style.width.%]="skill.progress" [attr.aria-valuenow]="skill.progress" [attr.aria-valuemin]="0"` +
         `[attr.aria-valuemax]="100"> </div></div></div>`,

})
export class ProgressBarComponent implements OnInit {

  @Input() skill: Skills;

  constructor() {

  }
  ngOnInit() {
    // after init
  }
}
