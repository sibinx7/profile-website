import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuildren, FormGroup, Validator } from '@angular/form'

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
  constructor(
    private formGroup: FormGroup 
  ) {
  }

  ngOnInit() {
    const currentYear:number = ((new Date()).getFullYear());
    this.yearOfExperience = (currentYear - this.workStartOn)
    this.frontEndCarrerExperience = (currentYear - this.frontEndCarrerStart);

    this.technologyStacks = [{
        category: "Frontend",
        technologies:[
          {
            name: "Vue JS"
          },
          {
            name: "Angular JS 2"
          },
          {
            name: "React JS"
          },
          {
            name: "jQuery"
          },
          {
            name: "Mateor JS"
          }
        ]
    }, 
    {
      category: "Backend",
      technologies:[
        {
          name: "Laravel"
        },
        {
          name: "WordPress"
        },
        {
          name: "Node JS"
        },
        {
          name: "Hapi JS"
        },
        {
          name: "Django"
        },
        {
          name: "Ruby on Rails"
        }
      ]
    },
  {
    category: "Devop",
    technologies:[
      {
        name: "Docker"
      },
      {
        name: "Circle CI"
      },
      {
        name: "Git"
      },
      {
        name: "Microsoft Azure"
      },
      {
        name: "AWS"
      },
      {
        name: "Heroku"
      }
    ]
  },
{
  category: "Database",
  technologies:[
    {
      name: "MonogoDB"
    },
    {
      name: "PostgreSQL"
    },
    {
      name: "MySQL"
    }
  ]
}]
  }

  hireMeFormSubmit(hireMeForm: any){
    console.log(hireMeForm.value)
    console.log("This is from form...")
    console.log(this.hireMe)
    console.log("Direct values...")
  }

}
