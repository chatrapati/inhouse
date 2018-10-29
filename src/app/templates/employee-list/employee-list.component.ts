import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList:any;
    
  constructor(private employee: Employee, private router: Router) { }

  ngOnInit() {
    this.empList=JSON.parse(localStorage.getItem('data'))
  }

  editEvent(emp){
    this.employee.setEmployee(emp);
    this.router.navigateByUrl('/editEmployee')
  }

}
