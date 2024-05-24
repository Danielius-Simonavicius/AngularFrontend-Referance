import { HomeAddress } from "./homeAddress.model";

export class Tenant {
    _id!: string;  
    title!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    emailAddress!: string;
    homeAddress!: HomeAddress;
}
