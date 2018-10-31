import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ROLES_List } from '../../../assets/dropdowns/selectoptions';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  test: any;
  user:any={};
  roles:any={};
  roleList: any;
  public date = moment();

  public daysArr;

  public dateForm: FormGroup;

  pageData: any =
    {
      "ProjectManager": 25,
      "TeamLead": 35,
      "UIDeveloper": 60,
      "UIXDesigner": 18,
      "PythonDeveloper": 25,
      "AndroidDeveloper": 85,
      "IOSDeveloper": 70,
      ".NetDeveloper": 50

    };

  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales: {
      xAxes: [{
        barPercentage: 0.7
      }],
      yAxes: [{
        ticks: {
          min:0,
          steps: 10,
          stepValue: 10,
          max: 100,
        }
      }]
    }
  }

  verification = ['Manager', 'Lead', 'Analyst', 'Developer', 'Designer', 'Executive', 'Specialist', 'Writer', 'Administrator', 'Admin', 'Bureaucrat', 'Officer', 'Mentor', 'Support', 'Leader', 'Consultant', 'Representative', 'Apprentice', 'Director', 'Head', 'Engineer', 'Accountant', 'Controller', 'Auditor', 'Clerk', 'President']
  headings: any = [];
  labels:any =[];
  
  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData: any = [];
  // chartData = [
  //   {
  //     label: 'Roles',
  //     data: [25, 35, 60, 18, 25, 85, 70, 50]
  //   }
  // ];

  // CHART COLOR.
  colors = [
    {
      backgroundColor: '#f58736'
    }
  ]

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }


  constructor(private fb: FormBuilder) {
    this.initDateForm()
  }

  ngOnInit() {
    this.roleList = ROLES_List;
    this.daysArr = this.createCalendar(this.date);
    this.setLabel();
  }

  setLabel() {
    let list: any = [];
    let data: any = [];
    for (let [key, value] of Object.entries(this.pageData)) {
      let obj = {};
      obj = this.setHeader(key);
      this.headings.push(obj);
      this.labels.push(key);
      data.push(value)

    }
    // var role= "ProjectManager";
    this.chartData = [
      {
        label: 'Roles',
        data: data
      }
    ];

  }

  setHeader(key) {
    let obj = {};
    for (let elem of this.verification) {
      let x = key.lastIndexOf(elem);
      //  console.log("=========>", x);
      if (x > 0) {
        obj = { start: key.substring(0, x), end: elem }
      }
    }
    return obj
  }

  isSelected(day) {
    if (!day) {
      return false;
    }
    let dateFrom = moment(this.dateForm.value.dateFrom, 'MM/DD/YYYY');
    let dateTo = moment(this.dateForm.value.dateTo, 'MM/DD/YYYY');
    if (this.dateForm.valid) {
      return this.dateForm
    }
  }

  selectedDate(day) {
    let dayFormatted = day.format('MM/DD/YYYY');
    if (this.dateForm.valid) {
      this.dateForm.setValue({ dateFrom: null, dateTo: null });
      return
    }
    if (!this.dateForm.get('dateFrom').value) {
      this.dateForm.get('dateFrom').patchValue(dayFormatted);
    }
    else {
      this.dateForm.get('dateTo').patchValue(dayFormatted);
    }
  }

  initDateForm() {
    return this.dateForm = this.fb.group({
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required]
    })
  }

  nextMonth() {
    this.date.add(1, "M");
    this.daysArr = this.createCalendar(this.date);
  }

  prevMonth() {
    this.date.subtract(1, "M");
    this.daysArr = this.createCalendar(this.date);
  }

  todayCheck(day) {
    if (!day) {
      return false
    }
    return moment().format('L') === day.format('L');
  }

  createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() + 1 }).map(Number.call, Number).map((n) => {
      return moment(firstDay).add(n, 'd')
    });
    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }

    return days
  }

  setGraph(key) {
    let data: any = [];
    let finalkey = key['start']+key['end'];
    for (let i = 0; i < this.labels.length; i++) {
      if (i == this.labels.indexOf(finalkey)) {
        data.push(this.pageData[finalkey])
      }
      else {
        data.push(0)
      }
    }
    this.chartData = [
      {
        label: key,
        data: data
      }
    ];
  }

  setSelected() {
    this.roles['roleName'] = this.roles['selected'];
  }

  checkForId() {
    for (let department of this.roleList) {
      if (department['value'] == this.roles['selected']) {
        department['key'] = this.roles['roleName'];
        department['value'] = this.roles['roleName'];
        return department
      }
    }
  }

  setDropdown() {
    for (let department of this.roleList) {
      if (department['value'] == this.roles['roleName']) {
        return department['value']
      }
    }
  }

  updateRole() {
    this.checkForId();
    this.roleList = ROLES_List;
    this.roles['selected'] = this.setDropdown();
  }

  saveRole(){
    console.log("save", this.user['roleName']);
    
  }

}
