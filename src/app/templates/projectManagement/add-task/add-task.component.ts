import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PROJECT_LIST } from '../../../../assets/dropdowns/selectoptions';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  projectList: any;
  task:any={};

  @Input() isselect:boolean;
  @Output() isselectChange= new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.projectList=PROJECT_LIST;
  }

  closeModalDialog(){
    this.isselect=false;
    this.isselectChange.emit(this.isselect);
   }

}
