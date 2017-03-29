import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetail} from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls:['register.component.css']
})

export class RegisterComponent {
    model: PersonalDetail= new PersonalDetail();
    loading = false;
    enableRegistrationForm : boolean;
    isTermsConditionAccepted:boolean;
    isAgreedOffers:boolean;
    private submitted: boolean = false; // keep track on whether form is submitted
    private questions: Array<string> = [];

    private active = true;
    private popUpMessage: string;
    private popUpShow: boolean;
    private statusPopUp: boolean;
    private success: boolean;
    private personalDetailsFilled: boolean;
    private errorMsg: string;
    private userStatus: string;
    private confirmPassword:string;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {
            this.enableRegistrationForm= false;
            this.isTermsConditionAccepted= false;
            this.isAgreedOffers=false;

            this.errorMsg = ''
            this.statusPopUp = false;
            this.setSecurityQuestion();
            this.success = false;
            this.personalDetailsFilled= false;
            console.log("Question "+this.questions);
         }

         submitPersonalDetails(){
            //if (this.model.password != '' && this.model.password != this.model.confirmPassword) {
            // if (this.model.password != '' ) {
            //         this.model.password = '';
            //         //this.model.confirmPassword = '';
            //         this.popUpMessage = 'Password and Confirm Password does not match.';
            //         this.popUpShow = true;
            //     }else{
                    this.personalDetailsFilled= true;
               // }
            }
        backToPersonalDetails(){
            this.personalDetailsFilled = false;
            }
        disableNext(){
            if(this.model.firstName=="" || this.model.lastName=="" || this.model.emailAddress=="" || this.model.phoneNumber=="" || this.model.password == '' || this.model.confirmPassword == ''){
                return true;
            }else{
                return false;
                 }
            }
        onNextClick(){
            this.enableRegistrationForm= true;
        }
        setSecurityQuestion() {
           // if (this.model.securityChallenge.question === null || this.model.securityChallenge.question === '') {
            this.questions.push('Pick your security question');
           
            this.questions.push('What is your first car?');               
            this.questions.push('Brand name of first watch?');           
            this.questions.push('What is the first movie you watched in cinema?');
        }
    
        popUpStatus(status: boolean) {
            this.popUpShow = status;
        }
    
    
    
    onSubmit() {
        if (this.model.securityChallenge.question === 'Pick your security question') {
        this.model.securityChallenge.answer = '';
        this.popUpMessage = 'Please choose security question.';
        this.popUpShow = true;
        }else{
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
}
