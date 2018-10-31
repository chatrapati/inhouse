import { Component, OnInit } from '@angular/core';
import { PROJECT_LIST } from '../../../../assets/dropdowns/selectoptions';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {

  projectList: any = [];

  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales: {
      xAxes: [{
        barPercentage: 0.4
      }],
      yAxes: [{
        ticks: {
          min: 0,
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

  constructor() { }

  // projectList:any=['Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6', 'Project7', 'Project8']


  ngOnInit() {
    this.projectList = PROJECT_LIST;
    this.getData();
  }

  getData() {
    let data: any = [];
    for (let project of this.projectList) {
      this.labels.push(project['projectName']);
      data.push(project['workCompleted']);
    }
    this.chartData = [
      {
        label: 'Projects',
        data: data
      }
    ];
    console.log("chartData==>", this.chartData);

  }

  setGraph(project) {
    this.chartData = [];
    let data: any = [];
    console.log(project);
    for (let list of this.projectList) {
      if (project['projectID'] == list['projectID']) {
        console.log("in ifffff", project['projectID']);
        console.log("in ifffff", list['projectID']);
        data.push(list['workCompleted']);
      }
      else {
        data.push(0);
      }
    }
    this.chartData = [
      {
        label: 'Projects',
        data: data
      }
    ];
  }

}
