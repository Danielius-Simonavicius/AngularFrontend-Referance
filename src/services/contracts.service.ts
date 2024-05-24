import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviorment';
import { LandLord } from 'src/models/landLord.model';
import { Contract } from 'src/models/contracts.model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) { }
  createContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${environment.apiUrl}/api/create-contract`, contract);
  }
  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${environment.apiUrl}/api/contracts`);
  }

  getContract(contractId: string): Observable<Contract> {
    return this.http.get<Contract>(`${environment.apiUrl}/api/contracts/${contractId}`);
  }
  
  updateContracts(updatedContract: Contract): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/update-landlords/${updatedContract._id}`, updatedContract);
  }

  deleteContract(contractId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/delete-contracts/${contractId}`);
  }

}