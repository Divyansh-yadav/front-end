import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service'
import { ProductCategory } from './product-category';
import { Product} from './product';
import {CustomerService} from '../customer.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  size:number;
  constructor(private productServiceService : ProductServiceService,private customerService:CustomerService,private route:Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
    this.getProductCategory();
    }
    else{
      this.route.navigate(['/'])
    }
  }

  
//category:Object[];
pc :ProductCategory;
product:Product;

  getProductCategory(){
    this.productServiceService.getProductCategory()
    .subscribe(
     data=>{console.log(data)
      this.pc = data.json();      
     }
     
    )
    console.log("HH");
    
  }  
  getProductByCategory(event){

let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    console.log(idAttr);
    console.log(value);
    this.productServiceService.getProductByCategory(value)
    .subscribe(
      data=>{
        console.log(data);  
        this.product = data.json();
      }
      
     )
     
     
   }  
   addtocart(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    console.log(idAttr);
    console.log(value);
    this.productServiceService.addtocart(value)
    

   }
   
  }
  

