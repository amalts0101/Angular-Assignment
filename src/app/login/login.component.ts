import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  arr = [10,20,30,40,50];

  constructor() { 
  }

  ngOnInit() {
    this.userName="Amal";
  }

}
