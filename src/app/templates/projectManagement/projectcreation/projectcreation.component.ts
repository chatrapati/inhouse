import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, PROJECTSTATUS } from '../../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-projectcreation',
  templateUrl: './projectcreation.component.html',
  styleUrls: ['./projectcreation.component.css']
})
export class ProjectcreationComponent implements OnInit {

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

  saveProject(){
    console.log("project",this.project);
    
  }
}
