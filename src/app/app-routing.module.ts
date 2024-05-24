import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsPageComponent } from './pages/tenants-page/tenants-page.component';
import { LandLordsPageComponent } from './pages/land-lords-page/land-lords-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditLandLordPageComponent } from './pages/land-lords-page/edit-land-lord-page/edit-land-lord-page.component';
import { EditTenantComponent } from './pages/tenants-page/tenant-page/edit-tenant/edit-tenant.component';
import { ContractsPageComponent } from './pages/contracts-page/contracts-page.component';
import { DraftContractPageComponent } from './pages/draft-contract-page/draft-contract-page.component';
import { NewLandLordPageComponent } from './pages/land-lords-page/new-landLord-page/new-land-lord-page/new-land-lord-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'tenants', component: TenantsPageComponent },
  { path: 'contracts', component: ContractsPageComponent },
  { path: 'land-lords', component: LandLordsPageComponent },
  { path: 'land-lord/:id', component: EditLandLordPageComponent },
  { path: 'tenant/:id', component: EditTenantComponent },
  { path: 'draft-contract', component: DraftContractPageComponent },   
  { path: 'draft-land-lord', component: NewLandLordPageComponent },
  
  
  { path: '**', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }