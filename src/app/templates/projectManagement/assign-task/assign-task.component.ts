import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PROJECT_LIST, EMPLOYEELIST } from '../../../../assets/dropdowns/selectoptions';


@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  employeeList: any;
  projectList: any={};
  task:any={};

  @Input() isselect:boolean;
  @Input() selectedTask:any={};
  @Output() isselectChange= new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("selectedTask", this.selectedTask);
    this.employeeList=EMPLOYEELIST;
    this.projectList=PROJECT_LIST;
    this.task=this.selectedTask;
  }

  closeModalDialog(){
    this.isselect=false;
    this.isselectChange.emit(this.isselect);
   }


}
