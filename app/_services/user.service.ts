import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map'
import { Customer } from '../_models/index';
import { PersonalDetail ,Address} from '../_models/index';
import { SharedService } from '../_services/index';

@Injectable()
export class UserService {
     private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
   //  sharedService= new SharedService();
    public customer:Customer;
    
    login(userName: string, password: string) : Observable<Customer> {
        return this.http.post('http://localhost:8080/customer/login', JSON.stringify({ userName: userName, password: password }),{ headers: this.headers })
        .map((response: Response) => this.updateSharedService(response.json()));
    }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(personalDetail: PersonalDetail) {
        return this.http.post('http://localhost:8080/customer/register', personalDetail,{ headers: this.headers }).map((response: Response) => response.json());
    }

    update(user: Customer) {
        return this.http.put('/api/users/' + user.customerId, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
 updateSharedService(response:Customer){
    this.customer=response;
    //this.sharedService.customer=response;
    return this.customer;


}
    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}