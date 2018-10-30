import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, EMPLOYEELIST, PROJECT_LIST, TASK_LIST, PROJECTSTATUS } from '../../../../assets/dropdowns/selectoptions';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../../../../assets/others/confirm.component';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-allocation',
  templateUrl: './project-allocation.component.html',
  styleUrls: ['./project-allocation.component.css']
})
export class ProjectAllocationComponent implements OnInit {

  projectStatusList: any={};
  isViewProject: boolean=false;
  selectedTask: any={};
  isAssignTask: boolean=false;
  isAddTask: boolean=false;
  taskList: any;
  projectList: any;
  employeeList: any;
  managerList: any;
  constructor(private dialogService:DialogService, private router:Router, private project:Project) { }

  ngOnInit() {
    this.managerList=PROJECTMANAGERLIST;
    this.employeeList=EMPLOYEELIST;
    this.projectList=PROJECT_LIST;
    this.taskList=TASK_LIST;
    this.projectStatusList=PROJECTSTATUS;
  }

  assignProject(project){
    console.log("project == >",project);
    this.project.setEmployee(project);
    this.router.navigateByUrl('/projectAllotment');
  }
 
  fieldValidate(event){
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
}

  viewProject(task){
    console.log("task == >", task);
    this.isViewProject=true;
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
    this.isViewProject=event;
  }

  showConfirm(project) {
    // this.id=event['_id'];
    console.log("innnn", project);
    
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Delete Confirmation', 
      message:'Are you sure you want to delete this record ?'})
      .subscribe((isConfirmed)=>{
          if(isConfirmed) {
            // Method call for deleting schedule
            this.deleteProject(project);
          }
          else {
          }
      });
    }

    deleteProject(project){
    console.log("project == >",project);
  }

}
