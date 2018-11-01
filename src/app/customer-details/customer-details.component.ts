import { Component, OnInit } from '@angular/core';
import  {CustomeDetals} from './customerdetils';
import {CustomerService} from '../customer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService:CustomerService,private route:Router ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
    
    }
    else{
      this.route.navigate(['/'])
    }
  }
  c = new CustomeDetals();
  adddetais(){    
    this.c.userid=JSON.parse(localStorage.getItem('currentUser')).principal["userId"]
    this.customerService.adddetail(this.c);
  }
  logout(){
    this.customerService.logout();
  }
}
