import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LandLord } from 'src/models/landLord.model';
import { LandLordService } from 'src/services/landLord.service';
import { TenantService } from 'src/services/tenant.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTenantModalComponent } from 'src/app/components/add-tenant-modal/add-tenant-modal.component';
import { Tenant } from 'src/models/tenant.model';

@Component({
  selector: 'app-edit-land-lord-page',
  templateUrl: './edit-land-lord-page.component.html',
  styleUrls: ['./edit-land-lord-page.component.css']
})
export class EditLandLordPageComponent implements OnInit {
  record = new LandLord();
  private sub?: Subscription;
  constructor(private landLordService: LandLordService, 
    private router: Router, private route: ActivatedRoute, 
    private tenantService: TenantService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadData(id);
      }
    })
  }

  loadData(id: string) {
    this.landLordService.getLandLord(id)
      .subscribe(x => {
        this.record = x;
      });
  }

  onSubmit() {
    this.landLordService.updateLandLord(this.record)
      .subscribe(x => {
        if (x) {
          this.router.navigate(['/land-lords']);
        }
      })
  }

  removeTenant(tenantId: string, landLordId: string) {
    this.landLordService
      .removeTenantFromLandLord(tenantId, landLordId)
      .subscribe((x) => {
        if (x) {
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/land-lord', landLordId]);
            });
        }
      });
  }


  openAddTenantModal(): void {
    this.tenantService.getTenants().subscribe({
      next: (tenants) => {
        const dialogRef = this.dialog.open(AddTenantModalComponent, {
          width: '250px',
          data: { tenants } 
        });
  
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.addTenantToLandlord(result);
          }
        });
      },
      error: (error) => console.error('Error fetching tenants', error)
    });
  }
  

  addTenantToLandlord(tenant: Tenant): void {
    this.landLordService.addTenantToLandlord(tenant._id, this.record._id).subscribe(x=>{
      if(x){
        this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/land-lord', this.record._id]);
        });
      }
    })
  }
}
