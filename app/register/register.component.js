"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_models/index");
var index_2 = require("../_services/index");
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false; // keep track on whether form is submitted
        this.questions = [];
        this.active = true;
        this.enableRegistrationForm = false;
        this.isTermsConditionAccepted = false;
        this.isAgreedOffers = false;
        this.model = new index_1.PersonalDetail();
        this.model.securityChallenge = new index_1.SecurityChallenge();
        this.errorMsg = '';
        this.statusPopUp = false;
        this.setSecurityQuestion();
        this.success = false;
        this.personalDetailsFilled = false;
        console.log("Question " + this.questions);
    }
    RegisterComponent.prototype.submitPersonalDetails = function () {
        //if (this.model.password != '' && this.model.password != this.model.confirmPassword) {
        // if (this.model.password != '' ) {
        //         this.model.password = '';
        //         //this.model.confirmPassword = '';
        //         this.popUpMessage = 'Password and Confirm Password does not match.';
        //         this.popUpShow = true;
        //     }else{
        this.personalDetailsFilled = true;
        // }
    };
    RegisterComponent.prototype.backToPersonalDetails = function () {
        this.personalDetailsFilled = false;
    };
    RegisterComponent.prototype.disableNext = function () {
        if (this.model.firstName == "" || this.model.lastName == "" || this.model.emailAddress == "" || this.model.phoneNumber == "" || this.model.password == '' || this.model.confirmPassword == '') {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterComponent.prototype.onNextClick = function () {
        this.enableRegistrationForm = true;
    };
    RegisterComponent.prototype.setSecurityQuestion = function () {
        // if (this.model.securityChallenge.question === null || this.model.securityChallenge.question === '') {
        this.questions.push('Pick your security question');
        this.questions.push('What is your first car?');
        this.questions.push('Brand name of first watch?');
        this.questions.push('What is the first movie you watched in cinema?');
    };
    RegisterComponent.prototype.popUpStatus = function (status) {
        this.popUpShow = status;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.securityChallenge.question === 'Pick your security question') {
            this.model.securityChallenge.answer = '';
            this.popUpMessage = 'Please choose security question.';
            this.popUpShow = true;
        }
        else {
            this.loading = true;
            this.userService.create(this.model)
                .subscribe(function (data) {
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html',
        styleUrls: ['register.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_2.UserService,
        index_2.AlertService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map