// Import necessary classes or interfaces
import { LandLord } from './landLord.model';
import { Tenant } from './tenant.model';  // Assuming Tenant model is correctly imported

// Define a class for PropertyAddress used in Contract
export class PropertyAddress {
    line1: string;
    line2?: string;  // Optional as not all addresses may have a second line
    town: string;
    countyCity: string;
    eircode: string;

    constructor(line1: string, line2: string, town: string, countyCity: string, eircode: string) {
        this.line1 = line1;
        this.line2 = line2;
        this.town = town;
        this.countyCity = countyCity;
        this.eircode = eircode;
    }
}

// Define a class for Contract
export class Contract {
    _id!: string;
    contractDate: Date;
    propertyAddress: PropertyAddress;
    tenantIds: Tenant[];  // Array of tenant IDs. If Tenant details are required, use Tenant[]
    landlordId: LandLord;  // Landlord ID. If Landlord details are required, use LandLord type
    feeMonthly: number;
    propertyDoorNumber: string;
    contractLength: 'Month' | 'Year' | 'Permanent';
    propertyType: 'Apartment' | 'Semi-Detached' | 'Detached' | 'Other';

    constructor(
        contractDate: Date,
        propertyAddress: PropertyAddress,
        tenantIds: Tenant[],
        landlordId: LandLord,
        feeMonthly: number,
        propertyDoorNumber: string,
        contractLength: 'Month' | 'Year' | 'Permanent',
        propertyType: 'Apartment' | 'Semi-Detached' | 'Detached' | 'Other'
    ) {
        this.contractDate = contractDate;
        this.propertyAddress = propertyAddress;
        this.tenantIds = tenantIds;
        this.landlordId = landlordId;
        this.feeMonthly = feeMonthly;
        this.propertyDoorNumber = propertyDoorNumber;
        this.contractLength = contractLength;
        this.propertyType = propertyType;
    }
}