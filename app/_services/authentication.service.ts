﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    login(userName: string, password: string) {
        return this.http.post('http://localhost:8080/customer/login', JSON.stringify({ userName: userName, password: password }),{ headers: this.headers })
            .map((response: Response) => response.json())
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}