import { Customer,PersonalDetail ,Address,Card,SecurityChallenge,ShippingDestination} from '../_models/index';
export class SharedService{

customer:Customer;
personalDetail:PersonalDetail;
address:Address;


 public oAuthMerchant: string;
  public flow: string;
  public merchantCheckoutId : string;
  public OauthToken: string;
  public ExpressCheckout: boolean;
  public acceptRewardProgram: string;
  public allowedLoyaltyPrograms: string;
  public currentAddress: Address;
  public currentCard: Card;
  public deviceType: string;
  //public bankConfigData: BankConfig;
  public isLoggedIn: boolean;
  public visited: boolean; //track the user already visited on checkout fop pop up box
  public addressVerified: boolean;
  public menuClass: string;
  public loyaltyResults: boolean;
  public rewardprogram: any;
}
