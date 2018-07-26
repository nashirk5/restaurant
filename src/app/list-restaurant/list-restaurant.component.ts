import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from '../_services/restaurant.service';
import { Restaurant } from '../_models/restaurant';
import Swal from 'sweetalert2';

const toast = (Swal as any).mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3500
});

@Component({
	selector: 'app-list-restaurant',
	templateUrl: './list-restaurant.component.html',
	styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

	constructor(private _restSrv: RestaurantService, private _fb: FormBuilder) { }

	addRestaurantsForm: FormGroup;

	private restaurants: any;

	private editRestaurants: any;

	private editRestaurantStatus: Boolean = false;

	private display = "none";

	ngOnInit() {
		this.getRestaurant();

		this.addRestaurantsForm = this._fb.group({
			'name': ['', Validators.required],
			'email': ['', Validators.required],
			'mobile': ['', Validators.required]
		});
	}

	// Open bootstrap model
	openModelDailog(){
		this.display = 'block';
	}

	// Close bootstrap model
	closeModelDailog(){
		this.display = 'none';
	}

	// On click edit showing the restaurant details
	onClickEdit(data){
		this.editRestaurantStatus = true;
		this.editRestaurants = data;
	}

	// On click back show the list restaurant
	onClickBack(){
		this.editRestaurantStatus = false;
	}

	// Get all restaurant data
	getRestaurant() {
		this._restSrv.getRestaurant()
		.subscribe(
			res => {
				this.restaurants = res;
			},
			err => {
				console.log(err);
			}
		)
	}

	// Add new Restaurant
	onSubmitAddRestaurant(){
		if(this.addRestaurantsForm.valid){
			this._restSrv.addRestaurant(this.addRestaurantsForm.value)
			.subscribe(
				res => {
					this.closeModelDailog();
					toast({
						type: 'success',
						text: 'New restaurant has been added succesfully'
					});
					this.restaurants = res;
				},
				err => {
					toast({
						type: 'error',
						text: 'Oops something went wrong!'
					});
				}
			)
		}else{
			toast({
				type: 'error',
				text: 'Please enter the correct information'
			});
		}
	}

}
