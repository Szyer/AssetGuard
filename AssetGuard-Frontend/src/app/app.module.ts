import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../app/auth/jwt.interceptor';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './map/map.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { AreamapComponent } from './areamap/areamap.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatacentersComponent } from './datacenters/datacenters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapComponent,
    ChartComponent,
    AreamapComponent,
    NavbarComponent,
    DashboardComponent,
    DatacentersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    AppRoutingModule,
    HighchartsChartModule,
    FontAwesomeModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
