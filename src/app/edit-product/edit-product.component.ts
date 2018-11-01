import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../customer/product-service.service';
import { Product } from '../customer/product';
import { Router } from '@angular/router';
import { EditProductService } from './edit-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  individualProduct:Product;
 updateProduct=new Product();
  constructor(private productServiceService:ProductServiceService,private router:Router, private editProductService:EditProductService) { }

  ngOnInit() {
    this.productServiceService.getProductDetails()
    .subscribe (
        data=>{
          
          console.log(data)
          this.individualProduct=data.json()
          console.log("Individual Product Details By Product Id Fetched")
        }
      )
  }

  updateProductDetails() {
    console.log("Editing Product Component",this.individualProduct);
    console.log();
    this.editProductService.updateProductDetails(this.individualProduct);  
  }
}
