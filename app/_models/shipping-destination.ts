import { Address} from '../_models/index';
export class ShippingDestination{
   id : String;
    ref: String;
    alias: String;
    recipientName: String;
   phoneNumber: String;
    preferred: Boolean;
    address:Address;
}