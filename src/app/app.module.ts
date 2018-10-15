import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AdmindashboardComponent } from './templates/admindashboard/admindashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { AdminsidebarComponent } from './templates/adminsidebar/adminsidebar.component';
import { UsercreationComponent } from './templates/usercreation/usercreation.component';
import { ChartsModule } from 'ng2-charts'
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DepartmentsComponent } from './templates/departments/departments.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmindashboardComponent,
    LoginComponent,
    AdminsidebarComponent,
    UsercreationComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
