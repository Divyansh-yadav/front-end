import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private _url="http://localhost:8080/user/addUser";
  constructor(private http : HttpClient,private route:Router) { }

  registerUser(user:User){
    console.log(user)
    return this.http.post<User>(this._url, user).subscribe(res =>{
      console.log(res);
      this.route.navigate(['/'])
  },
  err => {
      console.log(err.message);
  });
   }

}
