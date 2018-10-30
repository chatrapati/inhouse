import { Component, OnInit } from '@angular/core';
import { PROJECTMANAGERLIST, EMPLOYEELIST, PROJECT_LIST, TASK_LIST } from '../../../../assets/dropdowns/selectoptions';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../../../../assets/others/confirm.component';

@Component({
  selector: 'app-task-allocation',
  templateUrl: './task-allocation.component.html',
  styleUrls: ['./task-allocation.component.css']
})
export class TaskAllocationComponent implements OnInit {

  isViewTask: boolean=false;
  selectedTask: any={};
  isAssignTask: boolean=false;
  isAddTask: boolean=false;
  taskList: any;
  projectList: any;
  employeeList: any;
  managerList: any;

  constructor(private dialogService:DialogService) { }

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

  showConfirm(task) {
    // this.id=event['_id'];
    console.log("innnn", task);
    
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Delete Confirmation', 
      message:'Are you sure you want to delete this record ?'})
      .subscribe((isConfirmed)=>{
          if(isConfirmed) {
            // Method call for deleting schedule
            this.deleteTask(task);
          }
          else {
          }
      });
    }

  deleteTask(task){
    console.log("task == >",task);
  }

}
