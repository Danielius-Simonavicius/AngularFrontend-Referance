import { HomeAddress } from "./homeAddress.model";
import { Tenant } from "./tenant.model";

export class LandLord {
    _id!: string; 
    title!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    emailAddress!: string;
    homeAddress!: HomeAddress;
    dateOfBirth!: string;  
    permissionToRent!: boolean;  
    contactByEmail!: boolean; 
    tenantIds!: Tenant[];  
}
