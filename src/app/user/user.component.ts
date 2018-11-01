import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import {User} from './user'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}")]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  cpassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  hide1 = true;
  hide2 = true;
  user = new User();
 
registerForm: FormGroup;
submitted = false;
  constructor(private signupService:SignupService,private route:Router,private formBuilder: FormBuilder) { }
  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
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

  getCPasswordErrorMessage() {
    return this.cpassword.hasError('required') ? 'You must enter a value' : 
          this.cpassword.hasError('minLength') ? '' : 'Minimum length is 6';
  }

 
  registerUser(){
    if(this.cpassword.value === this.password.value){
    this.user.userName = this.name.value;
    this.user.email = this.email.value;
    this.user.password = this.cpassword.value;
    
    
    alert('SUCCESS!! :-)')
    this.signupService.registerUser(this.user)
    }
  else{

   alert("confirm password do not match with password");
  }
  
  }

  ngOnInit() {
    
    
  }
 
}
