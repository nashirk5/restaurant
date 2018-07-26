import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-edit-restaurant',
	templateUrl: './edit-restaurant.component.html',
	styleUrls: ['./edit-restaurant.component.css'],
	inputs: ['editRestaurants']
})
export class EditRestaurantComponent implements OnInit {

	private editRestaurants: any;

	constructor() { }

	ngOnInit() {
		console.log(this.editRestaurants);
	}

}
