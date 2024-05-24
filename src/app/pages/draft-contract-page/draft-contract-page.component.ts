import { Component, OnInit } from '@angular/core';
import { Contract, PropertyAddress } from 'src/models/contracts.model';
import { LandLord } from 'src/models/landLord.model';
import { Tenant } from 'src/models/tenant.model';
import { ContractsService } from 'src/services/contracts.service';
import { LandLordService } from 'src/services/landLord.service';
import { TenantService } from 'src/services/tenant.service';

@Component({
  selector: 'app-draft-contract-page',
  templateUrl: './draft-contract-page.component.html',
  styleUrls: ['./draft-contract-page.component.css']
})
export class DraftContractPageComponent implements OnInit {
  contract: Contract = new Contract(
    new Date(),
    new PropertyAddress('', '', '', '', ''),
    [],
    new LandLord(),
    0,
    '',
    'Year', 
    'Apartment' 
  );
  tenants: Tenant[] = [];
  landlords: LandLord[] = [];
  constructor(
    private contractsService: ContractsService,
    private tenantsService: TenantService,
    private landlordsService: LandLordService
  ) {}
  ngOnInit(): void {
    this.loadLandlords();
    this.loadTenants();
  }

  loadLandlords() {
    this.landlordsService.getLandLords().subscribe(data => {
      this.landlords = data;
    });
  }

  loadTenants() {
    this.tenantsService.getTenants().subscribe(data => {
      this.tenants = data;
    });
  }

  submitContract() {
    this.contractsService.createContract(this.contract).subscribe(() => {
      alert('Contract created successfully!');
    }, error => {
      alert('Failed to create contract. ' + error.message);
    });
  }
}
