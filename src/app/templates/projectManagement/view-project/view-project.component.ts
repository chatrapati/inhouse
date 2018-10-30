import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  project:any={};

  @Input() isselect:boolean;
  @Input() selectedTask:any={};
  @Output() isselectChange= new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.project=this.selectedTask;
  }

  closeModalDialog(){
    this.isselect=false;
    this.isselectChange.emit(this.isselect);
   }

}
