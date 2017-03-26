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
var index_3 = require("../_services/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, responseCustomer, userService, alertService, sharedService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.responseCustomer = responseCustomer;
        this.userService = userService;
        this.alertService = alertService;
        this.sharedService = sharedService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        //http://localhost:3000/login?returnUrl=%2F&flow=connect
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
        this.sharedService.flow = this.route.snapshot.queryParams['flow'];
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.model.userName, this.model.password)
            .subscribe(function (data) {
            _this.sharedService.customer = data;
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_2.AuthenticationService,
        index_1.Customer,
        index_2.UserService,
        index_2.AlertService,
        index_3.SharedService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map