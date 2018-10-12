import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public date = moment();

  public daysArr;

  public dateForm: FormGroup;

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels = ['HR','Development','Marketing','Admin','Account','Technical','Non-Technical','Support'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Departments',
      data: [25, 35, 60, 18, 25, 85, 70, 50]
    }
  ];

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
    this.daysArr = this.createCalendar(this.date);
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
