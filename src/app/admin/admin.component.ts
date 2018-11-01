import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../customer/product-service.service'
 import { Product } from '../customer/product';
import { Router } from '@angular/router';
import { ProductCategory } from '../customer/product-category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
product:Product;
individualProduct:Product;
productCategory:ProductCategory;
  constructor(private productServiceService : ProductServiceService, private router:Router) { }
  ngOnInit() {
    this.productServiceService.getProductCategory()
    .subscribe(
      
      data=>{console.log(data)
       this.productCategory = data.json();      
       console.log("Category data fetched")
      }
      
     );
        this.productServiceService.getAllProducts()
        .subscribe (
         data=>{ 
           console.log(data)
           this.product = data.json();  

    console.log("Fetched all products ")
          }
         );
  }

  getProductDetails(event){
    console.log("Fetching Individual Product Details")
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    console.log(idAttr);
    console.log(value);
    localStorage.setItem('productId',value);
    console.log("Individual Product Details Fetched")
    this.router.navigate(["/edit"]);
    // this.productServiceService.getProductDetails(value)
    // .subscribe (
    //   data=>{
    //     console.log("Individual Product Details By Product Id")
    //     console.log(data)
    //     this.individualProduct=data.json();
    //     localStorage.setItem('productId', JSON.stringify(value));
    //   }
    // )
  }

}
    
