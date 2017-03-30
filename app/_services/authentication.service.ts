import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Customer} from '../_models/index';

@Injectable()
export class AuthenticationService  {
     
    private headers = new Headers({ 'Content-Type': 'application/json' });
  customer:Customer;
    constructor(private http: Http) { 
        this.customer= new Customer();
    }

    login(userName: string, password: string) : Observable<Customer> {
        return this.http.post('http://localhost:8080/customer/login', JSON.stringify({ userName: userName, password: password }),{ headers: this.headers })
            .map((response: Response) =>response.json() as Customer );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
updateCustomer(String){
    this.customer=String;
}
    
}