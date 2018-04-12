import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

	public experiences: object[] = [];

	constructor() {
	}

	ngOnInit() {
		this.experiences = [
			{
				company: {
					image: '',
					name: 'Tecort Innovation',
					url: 'http://www.tecort.com/'
				},
				start: 2017,
				end: 2018,
				note: 'Freelance AngularJS Developer. Good opportunity to work with Canvas related features. Great team and very good atmosphere'
			},
			{
				company: {
					image: '',
					name: 'Radon5',
					url: 'https://radon5.in/'
				},
				start: 2017,
				end:  2018,
				note: 'Worked as WordPress and Ruby On Rails Developer. Good and Funny culture'
			},
			{
				company: {
					image: '',
					name: 'RedPanthers',
					url: 'http://redpanthers.com'
				},
				start: 2014,
				end: 2017,
				note: 'Worked as Frontend developer for 2 Year. Learned Ruby on Rails, Angular JS, ' +
				'React and Other related Technologies. Good knowledge in Javascript, ES6. Knowledge in Heroku, Git.'
			},
			{
				company: {
					image: '',
					name: 'Codeysus',
					url: 'https://www.facebook.com/teamCodeyssus/'
				},
				start: 2014,
				end: 2014,
				note: 'Learned Frontend Development technologies. Basic Django knowledge. Worked for 1 Year. ' +
				'Worked on Medical field and Trading Websites.'
			},
			{
				company: {
					image: '',
					name: 'Excellon',
					url: 'http://www.excellone.com/'
				},
				start: 2013,
				end: 2014,
				note: '3 Month Training on Drupal and WordPress development. Learned PHP, Created Drupal module for online examination. ' +
				'Complete many WordPress websites'
			},
			{
				company: {
					image: '',
					name: 'Armia',
					url: 'https://www.armia.com/'
				},
				start: 2013,
				end: 2013,
				note: '1 Month Internship on Core PHP. Learned Social media integration. Worked on Simple Human ' +
				'Resource management application with custom  PHP Framework'
			}
		];
	}

}
