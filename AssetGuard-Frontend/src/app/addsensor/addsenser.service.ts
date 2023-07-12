import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddsenserService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://localhost:8081/api/v2/addvirtualSensor';

  token = localStorage.getItem('auth_token');
  addSensor(formdata:any) {
    // const data={
    //   ...formdata,
    //   "status":status
    // }
    // const httpOptions = {
    //   headers: new HttpHeaders({
        
    //     'Authorization': `Bearer ${this.token}`
    //   })
    // };
    // return this.http.post<any>(this.baseUrl, formdata, httpOptions );

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    return this.http.post(this.baseUrl, formdata, { headers });
  }



  shutdown(): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<string>(`http://localhost:8081/api/v2/shutdown`, {}, { headers });
  }

  getAllVirtualSensors() : Observable<any[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any[]>(`http://localhost:8081/api/v2/getAllSensors`, { headers });
  }

}


