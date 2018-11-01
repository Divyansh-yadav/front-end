import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  
  get_url="http://localhost:8080/service/showOrders";
  update_url:any;
  constructor(private http:Http) { }

  showOrders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and passwor    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.get(this.get_url, { headers: headers });
  }

  updatestatus(status, id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and passwor    
    headers.append("Authorization", "Basic " + localStorage.getItem("hederdata"));
    let options = new RequestOptions();
    options.headers = headers;
  this.update_url="http://localhost:8080/service/updateStatus/"+id+"/"+status;
    return this.http.get(this.update_url,{ headers: headers });
  }
}
