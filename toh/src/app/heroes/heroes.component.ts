import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	//public imie : string = "bohater Wiesiek";
	/*  myHero : Hero = {
		id : 1,
		name : "iMiE BoH. z KlAsy"
	};
	*/
	heroes : Hero[] = HEROES;
	
	constructor() { }

	ngOnInit() {
    }

}
