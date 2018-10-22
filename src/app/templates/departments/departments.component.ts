import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  pageData:any=
    {
      hrDepartment:25,
      developmentDepartment:35,
      marketingDepartment:60,
      adminDepartment:18,
      accountDepartment:25,
      technicalDepartment:85,
      nonTechnicalDepartment:70,
      supportDepartment:50
      
    };

  public date = moment();

  public daysArr;

  public dateForm: FormGroup;

  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales : {
      yAxes: [{
         ticks: {
            steps : 10,
            stepValue : 10,
            max : 100,
          }
      }] 
    }
  }

  labels = ['HR','Development','Marketing','Admin','Account','Technical','Non-Technical','Support'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData:any=[];

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
    this.daysArr = this.createCalendar(this.date);
    this.chartData = [
      {
        label: 'Departments',
        data: [this.pageData['hrDepartment'], this.pageData['developmentDepartment'], this.pageData['marketingDepartment'], this.pageData['adminDepartment'], this.pageData['accountDepartment'], this.pageData['technicalDepartment'], this.pageData['nonTechnicalDepartment'], this.pageData['supportDepartment']]
      }
    ];
  }

  setGraph(key){
    if(key=='HR'){
      this.chartData = [
        {
          label: 'HR',
          data: [this.pageData['hrDepartment'], 0, 0, 0, 0, 0, 0, 0]
        }
    
      ];
     
    }
    if(key=='Development'){
      this.chartData = [
        {
          label: 'Development',
          data: [0, this.pageData['developmentDepartment'], 0, 0, 0, 0, 0, 0]
        }
    
      ];
     
    }
    if(key=='Marketing'){
      this.chartData = [
        {
          label: 'Marketing',
          data: [0, 0,this.pageData['marketingDepartment'],  0, 0, 0, 0, 0]
        }
    
      ];
     
    }
    if(key=='Admin'){
      this.chartData = [
        {
          label: 'Admin',
          data: [0, 0, 0, this.pageData['adminDepartment'], 0, 0, 0, 0]
        }
    
      ];
     
    }
    if(key=='Account'){
      this.chartData = [
        {
          label: 'Account',
          data: [0, 0, 0, 0, this.pageData['accountDepartment'], 0, 0, 0]
        }
    
      ];
     
    }
    if(key=='Technical'){
      this.chartData = [
        {
          label: 'Technical',
          data: [0, 0, 0, 0, 0, this.pageData['technicalDepartment'], 0, 0]
        }
    
      ];
     
    }
    if(key=='Non-Technical'){
      this.chartData = [
        {
          label: 'Non-Technical',
          data: [0, 0, 0, 0, 0, 0,this.pageData['nonTechnicalDepartment'],  0]
        }
    
      ];
     
    }
    if(key=='Support'){
      this.chartData = [
        {
          label: 'Support',
          data: [0, 0, 0, 0, 0, 0, 0, this.pageData['supportDepartment']]
        }
    
      ];
     
    }
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



}
