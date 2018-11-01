import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-fetch-user-details',
  templateUrl: './fetch-user-details.component.html',
  styleUrls: ['./fetch-user-details.component.css']
})
export class FetchUserDetailsComponent implements OnInit {
userDetails:User;
  constructor( private userService:UserService ) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe(data => {
      console.log("User Details Fetched",data);
      this.userDetails=data.json();
    });
  }

}
