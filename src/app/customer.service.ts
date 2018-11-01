import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import  {CustomeDetals} from './customer-details/customerdetils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:Http,private route:Router) { }
  adddetail(customeDetals:CustomeDetals){

    let headers = new Headers();
    headers.append('Accept', 'application/json')   
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));    
    
    return this.http.post("http://localhost:8080/customer/addCustomerDetails",customeDetals,{ headers: headers}).subscribe(
      res =>{
          console.log(res);
          this.route.navigate(['/payment'])
      },
      err => {
          console.log(err.message);
      }
  )
  }
  buynow(){
  let headers = new Headers();
  headers.append('Accept', 'application/json')   
  headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));    
  
  return this.http.get("http://localhost:8080/order/addorder/"+JSON.parse(localStorage.getItem('currentUser')).principal["userId"],{ headers: headers}).subscribe(
    res =>{
        console.log(res);
        this.route.navigate(['/customer'])
    },
    err => {
        console.log(err.message);
    }) }
    logout(){
        localStorage.removeItem('currentUser');
        this.route.navigate(['/'])
    }





  }


