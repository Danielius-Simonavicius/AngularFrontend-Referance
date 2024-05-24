import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviorment';
import { map } from 'rxjs/operators'; // Import the map operator
import { Tenant } from 'src/models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) { }


  getTenant(tenantId: string): Observable<Tenant> {
    return this.http.get<Tenant>(`${environment.apiUrl}/api/tenants/${tenantId}`);
  }
  
  updateTenant(updatedTenant: Tenant): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/update-tenant/${updatedTenant._id}`, updatedTenant);
  }

  getTenants(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(`${environment.apiUrl}/api/tenants`);
  }

  deleteTenant(tenantId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/delete-tenant/${tenantId}`);
  }

  addNewTenant(newTenant: Tenant):Observable<Tenant>{
    return this.http.post<Tenant>(`${environment.apiUrl}/api/new-tenants`, newTenant);
  }
}
