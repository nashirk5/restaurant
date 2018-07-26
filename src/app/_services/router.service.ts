import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RouterService {

	constructor(private _http: HttpClient) { }

	private baseUrl = 'http://demo1980184.mockable.io/nashir.k';

	// Get method
	_get(url) {
		return this._http.get(this.baseUrl + url);
	}

	// Put method
	_post(url, data){
		return this._http.post(this.baseUrl + url, data);
	}

}
