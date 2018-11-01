import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:Http,private route:Router) { }
  getcartbyuser(){
    console.log(localStorage.getItem('currentUser'))
    let cid = JSON.parse(localStorage.getItem('currentUser')).principal["userId"];
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers=headers;    
    return this.http.get("http://localhost:8080/cart/getcartbyuser/"+cid,options);
    }
    getcartvalue(){
      let cid = JSON.parse(localStorage.getItem('currentUser')).principal["userId"];
      let headers = new Headers();
      headers.append('Accept', 'application/json')
      // creating base64 encoded String from user name and password    
      headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
      let options = new RequestOptions();
      options.headers=headers;    
      return this.http.get("http://localhost:8080/cart/getcartbyvalue/"+cid,options);
      }

      removefromcart(cid:String){
        
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        // creating base64 encoded String from user name and password    
        headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
        let options = new RequestOptions();
        options.headers=headers;    
        console.log("http://localhost:8080/cart/removeitem/"+cid,options);
        return this.http.get("http://localhost:8080/cart/removeitem/"+cid,options).subscribe(
          res =>{
            alert("Cart Updated")
              console.log(res);
               
          },
          err => {
              console.log(err.message);
          }
      )

      }
}
