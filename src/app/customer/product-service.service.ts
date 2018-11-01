import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import {CartService} from '../cart/cart.service';
import { observable } from 'rxjs';
import {Cart} from  './cart';
import { parseTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  get_url="http://localhost:8080/productCategory/getProductCategory";
  getAllProducts_url="http://localhost:8080/products/getAllProducts"; 
  getProductById_url="http://localhost:8080/products/";
  constructor(private http:Http, private cart:CartService) { }

  getProductCategory(){let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and passwor    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    
    let options = new RequestOptions();
    options.headers=headers;
    
    
    return this.http.get(this.get_url,options);
  }

  getProductByCategory(cid){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password   
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers=headers;
  cart:CartService;
   
    console.log("http://localhost:8080/products/getByCategory/"+cid);
    return this.http.get("http://localhost:8080/products/getByCategory/"+cid,options);
  }
  addtocart(pid){
    let cart={"user_id":JSON.parse(localStorage.getItem('currentUser')).principal["userId"],
    "product_id":pid,
    "quantity":1    
  }
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    
    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers=headers;
    const params = new URLSearchParams();
  params.append("","");
    
    console.log("http://localhost:8080/cart/addToCart",cart,options);
    return this.http.post("http://localhost:8080/cart/addToCart",cart,{ headers: headers}).subscribe(
      res =>{
          console.log(res);
      },
      err => {
          console.log(err.message);
      }
  )
  }
  getAllProducts() {
    console.log("Fetching all products ")
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and passwor    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers=headers;
    return this.http.get(this.getAllProducts_url,options); 
    
  }
  // Product Details by product id
  getProductDetails() {
    console.log("Fetching the details by Product id")
   var pid= localStorage.getItem("productId").trim();
   var pid = pid.replace(/['"]+/g, '');
  let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers=headers;
    return this.http.get(this.getProductById_url+pid,options); 

}
}
