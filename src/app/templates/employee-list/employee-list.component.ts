import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import {Router} from "@angular/router";
import { ROLES_List, DEPARTMENT_List } from '../../../assets/dropdowns/selectoptions';
import { ConfirmComponent } from '../../../assets/others/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  departmentList: any;
  rolesList: any;
  empList:any;
    
  constructor(private employee: Employee, private router: Router, private dialogService:DialogService) { }

  ngOnInit() {
    this.rolesList=ROLES_List;
    this.departmentList=DEPARTMENT_List;
    this.empList=JSON.parse(localStorage.getItem('data'))
  }

  editEvent(emp){
    this.employee.setEmployee(emp);
    this.router.navigateByUrl('/editEmployee')
  }

  showConfirm(emp){
    
    
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Delete Confirmation', 
      message:'Are you sure you want to delete this record ?'})
      .subscribe((isConfirmed)=>{
          if(isConfirmed) {
            // Method call for deleting schedule
            this.deleteEmployee(emp);
          }
          else {
          }
      });
  }

  deleteEmployee(emp){
    console.log("innnn", emp);
  }

}
