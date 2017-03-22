export class PersonalDetail {
    idmobileNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    emailAddress: string;
    password: string;
    securityChallenge:SecurityChallenge;
}
export class SecurityChallenge{
    code: string;
    question: string;
    answer: string;   
}