import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map'
import { Customer } from '../_models/index';
import { PersonalDetail ,Address,ShippingDestination} from '../_models/index';
import { SharedService } from '../_services/index';

@Injectable()
export class AddressService {
     private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http,private sharedService:SharedService) { }


   updateAddress(shippingDestination: ShippingDestination) {
        return this.http.post('http://localhost:8080/customer/update-shipping-address', shippingDestination,{ headers: this.headers }).map((response: Response) => response.json());
    } 

}