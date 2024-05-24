import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TenantsPageComponent } from './pages/tenants-page/tenants-page.component';
import { LandLordsPageComponent } from './pages/land-lords-page/land-lords-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditLandLordPageComponent } from './pages/land-lords-page/edit-land-lord-page/edit-land-lord-page.component';
import { AddTenantModalComponent } from './components/add-tenant-modal/add-tenant-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EditTenantComponent } from './pages/tenants-page/tenant-page/edit-tenant/edit-tenant.component';
import { ContractsPageComponent } from './pages/contracts-page/contracts-page.component';
import { DraftContractPageComponent } from './pages/draft-contract-page/draft-contract-page.component';
import { NewLandLordPageComponent } from './pages/land-lords-page/new-landLord-page/new-land-lord-page/new-land-lord-page.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
@NgModule({
  declarations: [
    AppComponent,
    TenantsPageComponent,
    LandLordsPageComponent,
    NavBarComponent,
    HomePageComponent,
    EditLandLordPageComponent,
    AddTenantModalComponent,
    EditTenantComponent,
    ContractsPageComponent,
    DraftContractPageComponent,
    NewLandLordPageComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
