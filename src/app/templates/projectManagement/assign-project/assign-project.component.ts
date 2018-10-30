import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, PROJECTSTATUS } from '../../../../assets/dropdowns/selectoptions';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {

  statusList: any={};
  managerList: any={};
  isselect: boolean=false;
  project:any={};
  
  selectedList:any={};

  constructor(private myProject:Project, private router:Router) { }

  ngOnInit() {
    this.project=this.myProject.getEmployee();
    console.log('this.project',this.project);
    
    this.managerList=PROJECTMANAGERLIST;
    this.statusList=PROJECTSTATUS;
    if(!this.project['projectID']){
      this.router.navigateByUrl('/projectAllocation')
    }
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

}
