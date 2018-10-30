import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  task:any={};

  @Input() isselect:boolean;
  @Input() selectedTask:any={};
  @Output() isselectChange= new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.task=this.selectedTask;
  }

  closeModalDialog(){
    this.isselect=false;
    this.isselectChange.emit(this.isselect);
   }

}
