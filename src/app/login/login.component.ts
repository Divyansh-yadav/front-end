import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new Login();
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}")]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  hide1 = true;
  hide2 = true;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : 
        this.email.hasError('pattern') ?  '' : 'Not a valid email';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : 
            this.password.hasError('minLength') ? '' : 'Minimum length is 6';
  }
validateUser(){
  this.login.email = this.email.value;
  this.login.password =  this.password.value;
  
  this.loginService.validateUser(this.login)
  .subscribe(
    data=>{
      console.log(JSON.parse(localStorage.getItem('currentUser')).principal["userId"]);
      let role = JSON.parse(localStorage.getItem('currentUser')).authorities["0"].authority;
      if (role === "ROLE_ADMIN") {
        this.router.navigate(["/admin"]);
      }
      if (role === "ROLE_CUSTOMER") {
        this.router.navigate(["/customer"]);
      }
      if(role == "ROLE_SERVICEPROVIDER"){
        this.router.navigate(["/setstatus"]);
      }
    },
    err => {
        alert("Invalid Credantials")
    }
  
  )
}
  
}
