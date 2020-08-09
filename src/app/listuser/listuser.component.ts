import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users = [];
  filteredUsers = [];
  userrepos = [];

  constructor(private userservice: UsersService) { }

  ngOnInit() {
    this.onLoadData();
  }

  onLoadData() {
    this.userservice.onServiceCall()
      .subscribe((responsedata: any) => {
        console.log(responsedata);
        this.users = responsedata;
        this.filteredUsers = this.users;
      })
  }

  onReposLoad(i) {
    if (this.users) {
      return this.userservice.getRepository(this.users[i].repos_url)
        .subscribe((response: any) => {
          this.userrepos = response;
        })
    }
  }

  onSearchChange(value) {
    this.userrepos = [];
    this.filteredUsers = this.users.filter((user) => {
      return user.login.toLowerCase().includes(value.toLowerCase());
    });
  }
}
