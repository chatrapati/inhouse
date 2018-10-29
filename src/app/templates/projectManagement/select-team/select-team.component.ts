import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPLOYEELIST } from '../../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent implements OnInit {

  obj:any=[];
  employeeList:any={};
  @Input() isselect:boolean;
  @Output() isselectChange= new EventEmitter();
  @Output() selectTeam=new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.employeeList=EMPLOYEELIST;
  }

  selectEmployee(ev, emp){
    if(ev.target.value){
      this.obj.push(emp);
    }
  }
 
 save(){
   this.selectTeam.emit(this.obj);
   this.closeModalDialog();
 }

 closeModalDialog(){
  this.isselect=false;
  this.isselectChange.emit(this.isselect);
 }

}
