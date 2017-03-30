import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetail,SecurityChallenge,ShippingDestination,Address} from '../_models/index';
import { AlertService, UserService, SharedService,AddressService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add.address.component.html',
    styleUrls: ['add.address.component.css']
}
)
export class AddAddressComponent {

    private errorMsg: string;
    private addressStatus: string;
  private model: ShippingDestination;

    private submitted: boolean = false; // keep track on whether form is submitted
    private active = true;
    private popUpMessage: string;
    private popUpShow: boolean;
    private statusPopUp: boolean;
    private success:boolean;

      constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private sharedServices:SharedService,
        private addressService:AddressService) {
           
            this.model = new ShippingDestination();
            this.model.address= new Address();
            this.errorMsg = ''
            this.statusPopUp = false;
            this.success = false;
           
         }
        onSubmit() {
            console.log(this.model);
            this.addressService.updateAddress(this.model).subscribe(
                data =>{
                    console.log('UpdateAddress Call success '+data);
                    this.sharedServices.customer = data;
                    this.success = true;
                    this.router.navigate(['/add-card']);
                     
                                
                },
                err =>{
                    this.success = false;
                    // Log errors if any
                    this.popUpMessage = err;
                    this.popUpShow = true;
                    this.active = false;
                    console.log(err);

                }
            );
        }
        defaultAddressChanged(e){
            console.log(e.target.checked);
            if(e.target.checked){
                 this.model.preferred=true;
            }else{
                 this.model.preferred=false;
            }
        }

        popUpStatus(status: boolean) {
            this.popUpShow = status;
            if(this.sharedServices.isLoggedIn && this.sharedServices.isLoggedIn === true){
            this.router.navigate(['/home']);
            }
            else{
            this.router.navigate(['/add-card']);
            }
        }
}