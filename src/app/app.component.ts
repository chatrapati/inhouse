import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menutoggle: boolean=false;
  toggle: boolean=false;
  title = 'app';
  activateSideMenu: boolean = true;

  constructor(private router: Router) {
    this.checkUser();
  }

  checkUser() {
    let user = JSON.parse(localStorage.getItem('Currentuser'));
    // console.log("user===>",user);
    if (!user) {
      this.router.navigateByUrl('/login');
    }
  }

  isLoggedIN() {
    let user = JSON.parse(localStorage.getItem('Currentuser'));
    if (!user) {
      return false
    }
    return true
  }

  toggleChange() {
    this.toggle = !this.toggle;
    this.menutoggle = false;
  }

}
