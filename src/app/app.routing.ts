import { RouterModule, Routes } from '@angular/router';
import { UsercreationComponent } from './templates/usercreation/usercreation.component';
import { DepartmentsComponent } from './templates/departments/departments.component';
import { RolesComponent } from './templates/roles/roles.component';
import { HrmanagementComponent } from './templates/hrmanagement/hrmanagement.component';
import { AdmindashboardComponent } from './templates/admindashboard/admindashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { EmployeeListComponent } from './templates/employee-list/employee-list.component';
import { EditUserComponent } from './templates/edit-user/edit-user.component';
import { ProjectDashboardComponent } from './templates/projectManagement/project-dashboard/project-dashboard.component';
import { ProjectcreationComponent } from './templates/projectManagement/projectcreation/projectcreation.component';
import { ProjectAllocationComponent } from './templates/projectManagement/project-allocation/project-allocation.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: AdmindashboardComponent},
    { path:'userDashboard', component: AdmindashboardComponent },
    { path:'userCreation', component: UsercreationComponent },
    { path:'departments', component: DepartmentsComponent },
    { path:'roles', component: RolesComponent },
    { path:'hrManagement', component: HrmanagementComponent },
    { path:'employeeList', component: EmployeeListComponent },
    { path:'editEmployee', component:EditUserComponent },
    { path:'projectDashboard', component:ProjectDashboardComponent},
    { path:'projectCreation', component:ProjectcreationComponent},
    { path:'projectAllocation', component:ProjectAllocationComponent},
    { path: '**', redirectTo: 'userDashboard', pathMatch: 'full' }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});