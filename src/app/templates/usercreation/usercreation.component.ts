import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import { GENDER_List, MARTIAL_List, ROLES_List, DEPARTMENT_List, QUALIFICATION_LIST } from '../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
    this.qualificationsList=QUALIFICATION_LIST;
    this.martialStatusList=MARTIAL_List;
    this.genderList=GENDER_List;
    this.rolesList=ROLES_List;
    this.departmentList=DEPARTMENT_List;
    // console.log("genderList===>", genderList);
    // console.log("martialList===>", martialList);
    this.officeDetails = true;
    // let data=[
    //   { "empId": "GST/HYD/102",
    // "empName": "ShivaKrishna ",
    // "surname": "Kurra",
    // "gender": "Male",
    // "dob": "1996-02-23",
    // "birthDate": "1996-02-23",
    // "martialStatus": "Single",
    // "qualification": "B.Sc",
    // "presentAddress": "A:201, GST, The Platina, Gacchibowle, Hyderabad",
    // "permanentAddress": "A:201, GST, The Platina, Gacchibowle, Hyderabad",
    // "contact": "7396310580",
    // "econtact": "9879878855",
    // "mail": "shivakrishna@goldensuntechnology.com",
    // "dojGST": "2018-07-21",
    // "docGST": "2018-07-01",
    // "department": "Development Department",
    // "emailOfficial": "shivakrishna@goldensuntechnology.com",
    // "ctc": "245000",
    // "reportingManager": "Sanjay",
    // "designation": "UI Developer",
    // "prevEmployement": "vestrics"},
    //   {empId:'GST/HYD/09',empName:'Radhika', surName:'Katanguri', designation:'Python Developer', department:'Development Department', mail:'radhika@goldensuntechnology.com', contact:'7893244612'},
    //   {empId:'GST/HYD/078',empName:'Shanthi', surName:'vishwa', designation:'Front office executive',department :'Admin Department', mail:'shanti@goldensuntechnology.com',contact:'7702367724'},
    //   {empId:'GST/HYD/98',empName:'Srinivas', surName:'Chinnam', designation:'UI Developer', mail:'srinivas@goldensuntechnology.com', department:'Development Department', contact:'8944457795'},
    //   {empId:'GST/HYD/100',empName:'Praveen', surName:'Madishetty', designation:'Angular/UI Developer',department:'Development Department', mail:'praveen@goldensuntechnology.com', contact:'7207675960'},
    //   ]
    //   localStorage.setItem('data', JSON.stringify(data));
    // for (let list of genderList) {
    //   console.log(list);

    // }
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
    let data=JSON.parse(localStorage.getItem('data'))
    if(data[0].empID!=''){
      console.log("in iff");
      
      console.log("data",data);
      
      data.push(this.user);
      localStorage.setItem('data', JSON.stringify(data));
    }else{
      console.log("in else");
      console.log("data",data);
      localStorage.setItem('data', JSON.stringify([this.user]));
    }
    
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
