import { Component, OnInit } from '@angular/core';
import { LandLord } from 'src/models/landLord.model';
import { LandLordService } from 'src/services/landLord.service';

@Component({
  selector: 'app-land-lords-page',
  templateUrl: './land-lords-page.component.html',
  styleUrls: ['./land-lords-page.component.css']
})
export class LandLordsPageComponent implements OnInit {

  records: Array<LandLord> = [];

  constructor(private landLordService: LandLordService){}

  
  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.landLordService.getLandLords()
    .subscribe(x => {
      this.records = x;
    });
  }
}
