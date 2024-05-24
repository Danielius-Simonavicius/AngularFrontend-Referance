import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAddress } from 'src/models/homeAddress.model';
import { LandLord } from 'src/models/landLord.model';
import { LandLordService } from 'src/services/landLord.service';


@Component({
  selector: 'app-new-land-lord-page',
  templateUrl: './new-land-lord-page.component.html',
  styleUrls: ['./new-land-lord-page.component.css']
})
export class NewLandLordPageComponent implements OnInit {


  record = new LandLord();

  constructor(private landLordService: LandLordService,
    private router: Router
  ) {


    this.record = new LandLord();
    this.record.title = '';
    this.record.firstName = '';
    this.record.lastName = '';
    this.record.phoneNumber = '';
    this.record.emailAddress = '';
    this.record.homeAddress = new HomeAddress();
    this.record.dateOfBirth = '';  
    this.record.permissionToRent = false;
    this.record.contactByEmail = false;
    this.record.tenantIds = [];  

  }


  ngOnInit(): void {
  }


  onSubmit() {
    this.landLordService.addNewLandLord(this.record).subscribe(x => {
      if (x) {
        this.router.navigate(['/land-lords']);
      }
    })
  }

}
