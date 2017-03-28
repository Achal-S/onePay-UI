import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService,SharedService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    isTermsConditionAccepted:boolean ;
    isAccepted:boolean ;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
       ) {
           this.isTermsConditionAccepted= false;
           this.isAccepted= false;
        }


enableNext(){
   this.isTermsConditionAccepted= true;
}
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
