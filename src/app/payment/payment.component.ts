import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private customerService:CustomerService,private route:Router  ) { 
    if (localStorage.getItem('currentUser')) {
    
    }
    else{
      this.route.navigate(['/'])
    }

  }

  ngOnInit() {
  }
buynow(){
  this.customerService.buynow();
}
logout(){
  this.customerService.logout();
}

}
