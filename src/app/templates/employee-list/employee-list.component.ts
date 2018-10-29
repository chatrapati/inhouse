import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import {Router} from "@angular/router";
import { ROLES_List, DEPARTMENT_List } from '../../../assets/dropdowns/selectoptions';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  departmentList: any;
  rolesList: any;
  empList:any;
    
  constructor(private employee: Employee, private router: Router) { }

  ngOnInit() {
    this.rolesList=ROLES_List;
    this.departmentList=DEPARTMENT_List;
    this.empList=JSON.parse(localStorage.getItem('data'))
  }

  editEvent(emp){
    this.employee.setEmployee(emp);
    this.router.navigateByUrl('/editEmployee')
  }

}
