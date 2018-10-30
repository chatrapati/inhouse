import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, EMPLOYEELIST, PROJECT_LIST, TASK_LIST } from '../../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-project-allocation',
  templateUrl: './project-allocation.component.html',
  styleUrls: ['./project-allocation.component.css']
})
export class ProjectAllocationComponent implements OnInit {

  isViewTask: boolean=false;
  selectedTask: any={};
  isAssignTask: boolean=false;
  isAddTask: boolean=false;
  taskList: any;
  projectList: any;
  employeeList: any;
  managerList: any;
  constructor() { }

  ngOnInit() {
    this.managerList=PROJECTMANAGERLIST;
    this.employeeList=EMPLOYEELIST;
    this.projectList=PROJECT_LIST;
    this.taskList=TASK_LIST;
  }

  assignTask(task){
    console.log("task == >",task);
    this.isAssignTask=true;
    this.selectedTask=task;
  }

  addTask(){
    this.isAddTask=true;
  }

  viewTask(task){
    console.log("task == >", task);
    this.isViewTask=true;
    this.selectedTask=task;
  }

  search(){
    console.log("in search");
    
  }

  isselectChange(event){
    this.isAddTask=event;
  }

  isselectAssignChange(event){
    this.isAssignTask=event;
  }

  isselectViewChange(event){
    this.isViewTask=event;
  }

}
