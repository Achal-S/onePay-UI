import { SecurityChallenge} from '../_models/index';
export class PersonalDetail {
    mobileNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    emailAddress: string;
    password: string;
    securityChallenge:SecurityChallenge;
}
