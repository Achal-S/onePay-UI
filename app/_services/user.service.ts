﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Customer } from '../_models/index';
import { PersonalDetail } from '../_models/index';

@Injectable()
export class UserService {
     private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(personalDetail: PersonalDetail) {
        return this.http.post('http://localhost:8090/customer/register', personalDetail,{ headers: this.headers }).map((response: Response) => response.json());
    }

    update(user: Customer) {
        return this.http.put('/api/users/' + user.customerId, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
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