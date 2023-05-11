import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reading } from './Reading';
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  token = localStorage.getItem('auth_token');
  constructor(private http : HttpClient) {}
  private readonly BASE_URL = 'http://localhost:8081/api/v1/readings';
  private readonly baseUrl = 'http://localhost:8081/api/v1/';

  


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
  


 
  startTemperatureSensor(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/TEMPERATURE`, {}, { headers });
  }

  startCoolingSensor(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/COOLING`, {}, { headers });
  }

  startVoltageSensor(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/VOLTAGE`, {}, { headers });
  }
  startBandwidthSensor(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/BANDWIDTH`, {}, { headers });
  }
  startTrafficSensor(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}Sensor/TRAFFIC`, {}, { headers });
  }

  stopReading(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`${this.baseUrl}shutdown`, {}, { headers });
  }

  getTemperatureData(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/temperature`, { headers });
  }

  getCoolingData(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/cooling`, { headers });
  }

  getVoltageData(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/voltage`, { headers });
  }
  
  getBandwidthData(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/bandwidth`, { headers });
  }
  
  getTrafficData(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`http://localhost:8081/api/v1/readings/traffic`, { headers });
  }

}
