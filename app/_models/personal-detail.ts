import { SecurityChallenge} from '../_models/index';
export class PersonalDetail {
    idmobileNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    emailAddress: string;
    password: string;
    securityChallenge:SecurityChallenge;
}
