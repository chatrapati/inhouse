import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, PROJECTSTATUS } from '../../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-projectcreation',
  templateUrl: './projectcreation.component.html',
  styleUrls: ['./projectcreation.component.css']
})
export class ProjectcreationComponent implements OnInit {

  deadlineDetails: boolean;
  taskDetails: boolean;
  projectDetails: boolean;
  statusList: any;
  isselect: boolean;
  project:any={};
  task:any={};
  managerList:any={};
  selectedList:any={};

  constructor() { }

  ngOnInit() {
    this.managerList=PROJECTMANAGERLIST;
    this.statusList=PROJECTSTATUS;
    this.projectDetails=true;
  }

  setTeam(){
    this.isselect=true;
  }

  isselectChange(event){
    this.isselect=event;
  }

  selectedTeam(obj){
    console.log(obj);
    this.selectedList=obj;
  }

  setSelectTab(tab){
    this.projectDetails = false;
    this.taskDetails = false;
    this.deadlineDetails = false;
    console.log("inn", tab);
    console.log();
    if (tab == 'projectDetails') {
      this.projectDetails = true;
    }
    if (tab == 'taskDetails') {
      this.taskDetails = true;
    }
    if (tab == 'deadlineDetails') {
      this.deadlineDetails = true;
    }
  }

}
