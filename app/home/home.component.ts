import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { Customer } from '../_models/index';
import {LoginComponent} from '../login/index';
import { UserService,AuthenticationService,SharedService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: Customer;
    users: Customer[] = [];

    constructor(private userService: UserService ,private sharedService:SharedService, private athenticationService: AuthenticationService,
    
    private responseCustomer:Customer) {

    }

    ngOnInit() {
        this.currentUser = this.sharedService.customer;
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(Customer => { this.users = users; });
    // }
}