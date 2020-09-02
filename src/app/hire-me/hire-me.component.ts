import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

const TechonologyStackJSON = require('../database/technologies.json');

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent implements OnInit {

  public workStartOn:number = 2013;
  public yearOfExperience: number;
  public frontEndCarrerStart: number = 2014;
  public frontEndCarrerExperience:number;
  public technologyStacks:Array<TechnologyStack> = []
  public hireMe:object = {
    project:{}
  };

  public hireMeForm;
  constructor(
    private hireMeBuilder: FormBuilder 
  ) {
  }

  ngOnInit() {
    const currentYear:number = ((new Date()).getFullYear());
    this.yearOfExperience = (currentYear - this.workStartOn)
    this.frontEndCarrerExperience = (currentYear - this.frontEndCarrerStart);
    this.technologyStacks = TechonologyStackJSON;
    this.hireMeForm = this.hireMeBuilder.group({
      full_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      work_type: ['', Validators.required],
      project: this.hireMeBuilder.group({
        frontend_technologies: [ '', Validators.required ],
        backend_technologies: [ '', Validators.required],
        project_brief: [ '', Validators.required]
      }),
      other_informations: [ '', Validators.required ],

    })
  }

  hireMeFormSubmit(event){
    event.preventDefault();
    console.log(this.hireMeForm.value)
    console.log("This is from form...")    
    return false;
  }

}
