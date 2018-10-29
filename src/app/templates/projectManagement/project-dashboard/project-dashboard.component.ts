import { Component, OnInit } from '@angular/core';
import { PROJECT_LIST } from '../../../../assets/others/projectDetails';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {

  projectList:any=[];

  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales: {
      yAxes: [{
        ticks: {
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
    // this.projectList=PROJECT_LIST;
    this.getData();
  }

  getData(){
    let dataList=PROJECT_LIST
    for(let list of dataList){
      if(list['project_status']=='Development'){
        this.projectList.push(list);
      }
    }
  }

}
