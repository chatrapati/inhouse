import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import { GENDER_List as genderList, MARTIAL_List as martialList } from '../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {

  user: any = {};
  officeDetails: boolean = false;
  personalDetails: boolean = false;
  documentDetails: boolean = false;
  constructor() { }

  ngOnInit() {
    // console.log("genderList===>", genderList);
    // console.log("martialList===>", martialList);
    // this.officeDetails = true;
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
