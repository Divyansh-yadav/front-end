import { Component, OnInit } from '@angular/core';
import {ProviderService} from "./provider.service"
import {ProviderS} from '../service-provider/provider';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  sp:ProviderS;
  constructor(private providerService:ProviderService) { }

  ngOnInit() {
    this.displayOrders();
  }
  displayOrders(){
    this.providerService.showOrders()
    .subscribe(
      data=>{console.log('success',data);
      this.sp=data.json()
    this.rowData = data.json();
    }
    )  
  }
  
  updateStatus(status, id){
  
  console.log(status,id);
  this.providerService.updatestatus(status, id)
  .subscribe(
    data=>{console.log('success',data)
  
    console.log(this.sp.providerId);
  })
  }
  columnDefs = [
    {headerName: 'providerid', field: 'providerid' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    
];
}
