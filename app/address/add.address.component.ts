import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetail,SecurityChallenge} from '../_models/index';
import { AlertService, UserService, SharedService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add.address.component.html',
    styleUrls: ['add.address.component.css']
}
)
export class AddAddressComponent {

    private errorMsg: string;
    private addressStatus: string;
    

    private submitted: boolean = false; // keep track on whether form is submitted
    private active = true;
    private popUpMessage: string;
    private popUpShow: boolean;
    private statusPopUp: boolean;

}