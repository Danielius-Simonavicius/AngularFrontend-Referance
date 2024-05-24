import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviorment';
import { LandLord } from 'src/models/landLord.model';

@Injectable({
  providedIn: 'root'
})
export class LandLordService {

  constructor(private http: HttpClient) { }

  addTenantToLandlord(tenantId: string, landlordId: string): Observable<LandLord> {
    return this.http.put<LandLord>(`${environment.apiUrl}/api/landlords/add-tenant/${landlordId}`, {
      tenantId: tenantId
    });
  }

  getLandLords(): Observable<LandLord[]> {
    return this.http.get<LandLord[]>(`${environment.apiUrl}/api/landlords`);
  }

  getLandLord(landLordId: string): Observable<LandLord> {
    return this.http.get<LandLord>(`${environment.apiUrl}/api/landlords/${landLordId}`);
  }

  updateLandLord(updatedLandlord: LandLord): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/update-landlords/${updatedLandlord._id}`, updatedLandlord);
  }

  removeTenantFromLandLord(tenantId: string, landLordId: string): Observable<LandLord> {
    return this.http.put<LandLord>(`${environment.apiUrl}/api/landlords/delete-tenant/${landLordId}`,
      { tenantId: tenantId }
    );
  }

  addNewLandLord(newLandLord: LandLord): Observable<any> {
    return this.http.post<LandLord>(`${environment.apiUrl}/api/new-landlord/`, newLandLord);
  }

}
