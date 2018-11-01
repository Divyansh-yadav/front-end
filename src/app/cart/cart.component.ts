import { Component, OnInit, NgZone } from '@angular/core';
import {CartService} from './cart.service';
import {Cart} from './cart';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
import  { CustomerDetailsComponent } from '../customer-details/customer-details.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private customerService:CustomerService,private route:Router,private dialog: MatDialog) { }
cart:Cart;
carts:Cart;

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.getcartbyuser();
      this.getcartvalue();
      
    }
    else{
      this.route.navigate(['/'])
    }
   
  }
getcartbyuser(){this.cartService.getcartbyuser().subscribe(
  data=>{
    console.log(data);  
    this.cart = data.json();
  }
  
 )}

 getcartvalue(){
   this.cartService.getcartvalue().subscribe(
  data=>{
    this.carts = data.json();
    console.log(data);  
    
  }
  
 )}

 removefromcart(cartid){
  
this.cartService.removefromcart(cartid);
this.ngOnInit();
 }
 logout(){
  this.customerService.logout();
}
openDialog() {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(CustomerDetailsComponent, dialogConfig);
}

}
