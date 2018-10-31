import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrmanagement',
  templateUrl: './hrmanagement.component.html',
  styleUrls: ['./hrmanagement.component.css']
})
export class HrmanagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales : {
      xAxes: [{
        barPercentage: 0.7
      }],
      yAxes: [{
         ticks: {
            min:0,
            steps : 10,
            stepValue : 10,
            max : 100,
          }
      }] 
    }
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

}
