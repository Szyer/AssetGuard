import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable, Subscription, forkJoin, interval } from 'rxjs';
import { Reading } from './Reading';
import { ChartComponent } from '../chart/chart.component';
@Injectable({
  providedIn: 'root'
})
export class SensorService {

  token = localStorage.getItem('auth_token');
  constructor(private http : HttpClient) {}
  private readonly BASE_URL = 'http://localhost:8081/api/v1/readings';
  private readonly baseUrl = 'http://localhost:8081/api/v1/';

  sensorT !: string;
  sensorG !: string;
  


  getSensorData(): Observable<any[]> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.get<any[]>(this.BASE_URL, httpOptions );
  }

  getSensorDataByType(sensorType: string): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
    const url = `${this.BASE_URL}?sensorType=${sensorType}`;
    return this.http.get<any[]>(url, httpOptions);
  }

  urlStart(sensorT : string): Observable<string>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/${this.sensorT}`, {}, { headers });

  }

  urlGet(sensorG : string) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/${this.sensorG}`, { headers });

  }
  


 
  startTemperatureSensor(): Observable<string> {
    this.sensorT = 'TEMPERATURE'

    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    // return this.http.post<string>(`${this.baseUrl}Sensor/TEMPERATURE`, {}, { headers });
    return this.urlStart(this.sensorT);
  }

  startCoolingSensor(): Observable<string> {
    this.sensorT = 'COOLING'
    return this.urlStart(this.sensorT);
  }

  startVoltageSensor(): Observable<string> {
    this.sensorT='VOLTAGE';
    return this.urlStart(this.sensorT);
  }
  startBandwidthSensor(): Observable<string> {
    this.sensorT='BANDWIDTH'
    return this.urlStart(this.sensorT);
  }
  startTrafficSensor(): Observable<string> {
    this.sensorT='TRAFFIC'
    return this.urlStart(this.sensorT);
  }

  stopReading(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}shutdown`, {}, { headers });
  }



  

  getTemperatureData(): Observable<any>{
    this.sensorG = 'temperature'
    return this.urlGet(this.sensorG);
  }

  getCoolingData(): Observable<any>{
    this.sensorG='cooling';
    return this.urlGet(this.sensorG);
  }

  getVoltageData(): Observable<any>{
    this.sensorG='voltage'
    return this.urlGet(this.sensorG);
  }
  
  getBandwidthData(): Observable<any>{
    this.sensorG='bandwidth'
    return this.urlGet(this.sensorG);
  }
  
  getTrafficData(): Observable<any>{
    this.sensorG='traffic'
    return this.urlGet(this.sensorG);
  }


  
}
