import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { DEPARTMENT_List } from '../../../assets/dropdowns/selectoptions';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departmentList: any;
  user: any = {};
  dept: any = {};

  pageData: any =
    {
      "HRDepartment": 25,
      "DevelopmentDepartment": 35,
      "MarketingDepartment": 60,
      "AdminDepartment": 18,
      "AccountDepartment": 25,
      "TechnicalDepartment": 85,
      "Non-TechnicalDepartment": 70,
      "SupportDepartment": 50

    };

  public date = moment();

  public daysArr;

  public dateForm: FormGroup;

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

  labels: any[] = [];
  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData: any = [];

  // CHART COLOR.
  colors = [
    {
      backgroundColor: '#f58736'
    }
  ]

  constructor(private fb: FormBuilder) {
    this.initDateForm()
  }

  ngOnInit() {
    let keys = this.setLabel();
    this.departmentList = DEPARTMENT_List;
    this.daysArr = this.createCalendar(this.date);

  }

  setLabel() {
    console.log("innnnn");
    let data: any = [];
    // let keys:any=[];
    for (let [key, value] of Object.entries(this.pageData)) {

      this.labels.push(key.substring(0, key.lastIndexOf('Department')))

      data.push(value)

    }
    console.log(this.labels);
    console.log("data", data);
    this.chartData = [
      {
        label: 'Departments',
        data: data
      }
    ];
  }

  setGraph(key) {
    let data: any = [];
    let finalkey = key + "Department";
    for (let i = 0; i < this.labels.length; i++) {
      if (i == this.labels.indexOf(key)) {
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

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
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
    console.log(days);

    return days
  }
  setSelected() {
    this.dept['deptName'] = this.dept['department'];
  }

  checkForId() {
    for (let department of this.departmentList) {
      if (department['value'] == this.dept['department']) {
        department['key'] = this.dept['deptName'];
        department['value'] = this.dept['deptName'];
        return department
      }
    }
  }

  setDropdown() {
    for (let department of this.departmentList) {
      if (department['value'] == this.dept['deptName']) {
        return department['value']
      }
    }
  }

  updateDepartment() {
    this.checkForId();
    this.departmentList = DEPARTMENT_List;
    this.dept['department'] = this.setDropdown();
  }

}
