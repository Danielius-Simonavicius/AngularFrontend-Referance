import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tenant } from 'src/models/tenant.model';  // Adjust the import path according to your project structure

@Component({
  selector: 'app-add-tenant-modal',
  templateUrl: './add-tenant-modal.component.html'  // Ensure you have the correct path
})
export class AddTenantModalComponent {
  selectedTenantId: string | undefined;
  tenants: Tenant[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTenantModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.tenants) {
      this.tenants = data.tenants;
    }
  }

  addTenant() {
    if (this.selectedTenantId) {
      const selectedTenant = this.tenants.find(tenant => tenant._id === this.selectedTenantId);
      this.dialogRef.close(selectedTenant);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
