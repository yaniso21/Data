import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public userList = [];

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getuser();
  }

   getuser()  {

  this.userService.getUserfromweb().subscribe(
    result => {
      this.userList = result ;
     console.log(result);
    }
  )
}
}
