import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Product } from '../customer/product';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  updateProductDetails_url = "http://localhost:8080/products/updateProductDetails";

  constructor(private http: Http, private router:Router) { }


  // updates the quantity, price and the status of the product. Only the has the right to access this method.
  updateProductDetails(updateProduct: Product) {
    console.log("Updating the Product Details");
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and passwor    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers = headers;
    console.log(updateProduct.quantity);
    
    updateProduct.productId=localStorage.getItem("productId");
    console.log("UPDATE PRODUCT DETAILS ",updateProduct);
    
    console.log("URL",this.updateProductDetails_url);
    return this.http.post(this.updateProductDetails_url, updateProduct, { headers: headers })
      .subscribe(data => {
      alert("Details Updated")
      
        console.log(data);
        console.log("Details Updated")
        this.router.navigate(["/admin"]);
      },
        err => {
          console.log(err.message);
        }
      );

  }
}
