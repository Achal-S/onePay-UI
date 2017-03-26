import { PersonalDetail ,Address} from '../_models/index';

 export class Customer {
    public customerId: string;
    public dateCreated: string;
    public lastUpdated: string;
    public password: string;
   public personalDetail: PersonalDetail;
   public paymentCards: any[];
    public shippingDestination: Address[];
    
}
