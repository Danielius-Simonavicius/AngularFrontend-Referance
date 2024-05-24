import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from 'src/models/contracts.model';
import { ContractsService } from 'src/services/contracts.service';

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.css']
})
export class ContractsPageComponent implements OnInit {

  records: Array<Contract> = [];


  constructor(private contractsService: ContractsService, 
    private router: Router) { }
  ngOnInit(): void {
    this.loadList();
  }


  loadList() {
    this.contractsService.getContracts().subscribe(x => {
      if (x) {
        this.records = x;
        console.log(this.records);
      }
    })
  }

  deleteContract(contractId: string) {
    this.contractsService.deleteContract(contractId).subscribe(x=>{
      if(x){
        this.router.navigate(['/contracts']);
      }
    })
  }
}
