import { Component, OnInit } from '@angular/core';
import { GENDER_List, MARTIAL_List, ROLES_List, DEPARTMENT_List, QUALIFICATION_LIST } from '../../../assets/dropdowns/selectoptions';
import {Router} from '@angular/router';1

import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  departmentList: any;
  rolesList: any;
  genderList: any;
  martialStatusList: any;
  qualificationsList:any;
  user: any = {};
  officeDetails: boolean = false;
  personalDetails: boolean = false;
  documentDetails: boolean = false;
  isChecked: boolean = false;
  isCheckedBirth: boolean = false;

  constructor(private employee:Employee, private router:Router) { }

  ngOnInit() {
    let selectedEmployee=this.employee.getEmployee();
    this.user=this.employee.getEmployee();
    this.qualificationsList=QUALIFICATION_LIST;
    this.martialStatusList=MARTIAL_List;
    this.genderList=GENDER_List;
    this.rolesList=ROLES_List;
    this.departmentList=DEPARTMENT_List;
    // console.log("genderList===>", genderList);
    // console.log("martialList===>", martialList);
    this.officeDetails = true;
    if(!this.user['empId']){
      this.router.navigateByUrl('/')
    }
    
    console.log("=====================");
    console.log(selectedEmployee);
    console.log("=====================");
  }

  setSelectTab(tab) {
    this.officeDetails = false;
    this.personalDetails = false;
    this.documentDetails = false;
    console.log("inn", tab);
    console.log();
    if (tab == 'officeDetails') {
      this.officeDetails = true;
    }
    if (tab == 'personalDetails') {
      this.personalDetails = true;
    }
    if (tab == 'documentDetails') {
      this.documentDetails = true;
    }

  }

  fieldValidate(event,type){
    if(type=="contact"){
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();

      }
    }
    if(type=="aadhar"){
      const pattern2=/^[0-9][0-9]{0,11}$/;
      let inputChar2 = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern2.test(inputChar2)) {
        event.preventDefault();
      }
    }
    if(type="ctc"){
      const pattern3 = /[0-9]/;

      let inputChar3 = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern3.test(inputChar3)) {
        event.preventDefault();
      }
    }
  }

  finalresult(){
    console.log("user===>", this.user);
    // let data=JSON.parse(localStorage.getItem('data'))
    // if(data[0].empID!=''){
    //   console.log("in iff");
      
    //   console.log("data",data);
      
    //   data.push(this.user);
    //   localStorage.setItem('data', JSON.stringify(data));
    // }else{
    //   console.log("in else");
    //   console.log("data",data);
    //   localStorage.setItem('data', JSON.stringify([this.user]));
    // }
    
    this.user={};
    this.officeDetails = true;
    this.personalDetails = false;
    this.documentDetails = false;
    this.isCheckedBirth=false;
    this.isChecked=false;
  }

  setPermanantAddress(event){
    console.log(event);
    this.user['permanentAddress']='';
    if(event=='true'){
      this.user['permanentAddress']=this.user['presentAddress']
    }
    
  }

  setActualDOB(event){
    this.user['birthDate']='';
    if(event=='true'){
      this.user['birthDate']=this.user['dob'];
    }
    
  }

}
