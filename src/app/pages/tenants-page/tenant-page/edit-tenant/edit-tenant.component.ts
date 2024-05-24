import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tenant } from 'src/models/tenant.model';
import { TenantService } from 'src/services/tenant.service';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnInit {
  record = new Tenant();

  private sub?: Subscription;


  constructor(private tenantService: TenantService,
     private router: Router,
     private route: ActivatedRoute){}


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadData(id);
      }
    })
  }

  loadData(id: string) {
    this.tenantService.getTenant(id)
      .subscribe(x => {
        this.record = x;
      });
  }


  onSubmit() {
    this.tenantService.updateTenant(this.record)
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/tenants']);
        }
      })
  }

  deleteTenant(){
    if (confirm('Are you sure you want to delete this tenant?')) {
      this.tenantService.deleteTenant(this.record._id).subscribe({
        next: (response) => {
          console.log('Tenant deleted successfully', response);
          // Redirect or handle UI response
          this.router.navigate(['/tenants']);
        },
        error: (error) => {
          console.error('Failed to delete tenant', error);
        }
      });
    }
  }
}
