import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer} from '../_models/index';
import { AlertService, AuthenticationService,UserService } from '../_services/index';
import { Injectable } from '@angular/core';
import {SharedService} from  '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
      private responseCustomer:Customer,
      private userService:UserService,
        private alertService: AlertService,
       private sharedService:SharedService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
//http://localhost:3000/login?returnUrl=%2F&flow=connect
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
        this.sharedService.flow=this.route.snapshot.queryParams['flow'];
    }

    login() {
        this.loading = true;
        this.userService.login(this.model.userName, this.model.password)
            .subscribe(
                data => {
                    this.sharedService.customer=data;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
