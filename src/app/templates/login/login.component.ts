import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials:any={};

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log("credentails areeeee",this.credentials);
    localStorage.setItem('Currentuser', JSON.stringify(this.credentials));
    this.router.navigateByUrl('/userDashboard')
  }

}
