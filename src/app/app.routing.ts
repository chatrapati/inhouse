import { RouterModule, Routes } from '@angular/router';
import { UsercreationComponent } from './templates/usercreation/usercreation.component';
import { DepartmentsComponent } from './templates/departments/departments.component';
import { RolesComponent } from './templates/roles/roles.component';
import { HrmanagementComponent } from './templates/hrmanagement/hrmanagement.component';
import { AdmindashboardComponent } from './templates/admindashboard/admindashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: LoginComponent},
    { path:'userDashboard', component: AdmindashboardComponent },
    { path:'userCreation', component: UsercreationComponent },
    { path:'departments', component: DepartmentsComponent },
    { path:'roles', component: RolesComponent },
    { path:'hrManagement', component: HrmanagementComponent }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});