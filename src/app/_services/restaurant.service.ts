import { Injectable } from '@angular/core';
import { Restaurant } from '../_models/restaurant';
import { RouterService } from './router.service';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {

	constructor(private _routerSrv: RouterService) { }

	private getUrl = '/getRestaurant';
	private getSearchUrl = '/searchRestaurent';
	private addUrl = '/postRestaurant';

	// Get all restaurant
	getRestaurant(){
		return this._routerSrv._get(this.getUrl);
	}

	// Get searched restaurantby name
	getSearchRestaurant(){
		return this._routerSrv._get(this.getSearchUrl)
	}

	// Add all data
	addRestaurant(data){
		return this._routerSrv._post(this.addUrl, data);
	}

}
