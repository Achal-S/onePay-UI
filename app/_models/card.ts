import {Address} from '../_models/index'
export class Card{
   id :String;
    brandID:String;
    accountNumber:String;
  billingAddress:Address;
    cardHolderName:String;
    alias:String;
    expiryMonth:String;
    expiryYear:String;
   preferred:Boolean;
    brandName:String;
    lastFourDigit:String;
}