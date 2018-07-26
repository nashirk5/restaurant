import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from '../_services/restaurant.service';
import Swal from 'sweetalert2';

const toast = (Swal as any).mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3500
});

@Component({
	selector: 'app-search-restaurant',
	templateUrl: './search-restaurant.component.html',
	styleUrls: ['./search-restaurant.component.css']
})
export class SearchRestaurantComponent implements OnInit {

	SearchForm: FormGroup;

	private searchedRestaurants: any;

	searchRestaurantStatus: boolean = false;

	constructor(private _fb: FormBuilder, private _restaurantSrv: RestaurantService) { }

	ngOnInit() {
		this.SearchForm = this._fb.group({
			'search': ['', Validators.required]
		});
	}

	onSearchSubmit(){
		if(this.SearchForm.valid){
			this._restaurantSrv.getSearchRestaurant()
			.subscribe(
				res => {
					this.searchedRestaurants = res;
					this.searchRestaurantStatus = true;
				},
				err => {
					console.log(err);
					this.searchRestaurantStatus = false;
				}
			)
		}else{
			this.searchRestaurantStatus = false;
			toast({
				type: 'error',
				text: 'Please enter search field'
			})
		}
	}

}
