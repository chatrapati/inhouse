

export interface IProject { 
    projectID ?: string,
    projectName ?: string,
    projectFullName ?: string,
    projectManager ?: string,
    project_status ?: string,
    projectVersion ?: string,
    projectStartingDate ?: Date,
    projectEndDate ?: Date,
    workCompleted ?: Number,
    projectTeam ?: any[]
 } 
 

 export class Project  {
   project:IProject={};
   
 
   setEmployee(obj){
     this.project.projectID=obj.projectID;
     this.project.projectName=obj.projectName;
     this.project.projectFullName=obj.projectFullName;
     this.project.projectManager=obj.projectManager;
     this.project.project_status=obj.project_status;
     this.project.projectVersion=obj.projectVersion;
     this.project.projectTeam=obj.projectTeam;
     this.project.projectStartingDate=obj.projectStartingDate;
     this.project.projectEndDate=obj.projectEndDate;
     this.project.workCompleted=obj.workCompleted;
   }
 
   getEmployee(){
     return this.project
   }
 }
 
 