import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/services/tenant.service';

@Component({
  selector: 'app-tenants-page',
  templateUrl: './tenants-page.component.html',
  styleUrls: ['./tenants-page.component.css']
})
export class TenantsPageComponent implements OnInit {
  records: Array<any> = [];
  constructor(private tenantService: TenantService) { }


  ngOnInit(): void {
    this.loadList();
  }


  loadList() {
    this.tenantService.getTenants()
    .subscribe(x => {
      this.records = x;
    });
  }

}
