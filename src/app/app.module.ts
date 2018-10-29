import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AdmindashboardComponent } from './templates/admindashboard/admindashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { AdminsidebarComponent } from './templates/adminsidebar/adminsidebar.component';

import { ChartsModule } from 'ng2-charts'
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { UsercreationComponent } from './templates/usercreation/usercreation.component';
import { DepartmentsComponent } from './templates/departments/departments.component';
import { RolesComponent } from './templates/roles/roles.component';
import { HrmanagementComponent } from './templates/hrmanagement/hrmanagement.component';
import { EmployeeListComponent } from './templates/employee-list/employee-list.component';
import { EditUserComponent } from './templates/edit-user/edit-user.component';
import { Iemployee,Employee } from './templates/employee-list/employee';
import { ProjectDashboardComponent } from './templates/projectManagement/project-dashboard/project-dashboard.component';
import { ProjectcreationComponent } from './templates/projectManagement/projectcreation/projectcreation.component';
import { ProjectAllocationComponent } from './templates/projectManagement/project-allocation/project-allocation.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SelectTeamComponent } from './templates/projectManagement/select-team/select-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmindashboardComponent,
    LoginComponent,
    AdminsidebarComponent,
    UsercreationComponent,
    DepartmentsComponent,
    RolesComponent,
    HrmanagementComponent,
    EmployeeListComponent,
    EditUserComponent,
    ProjectDashboardComponent,
    ProjectcreationComponent,
    ProjectAllocationComponent,
    SelectTeamComponent
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BootstrapModalModule.forRoot({container:document.body}),
  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
