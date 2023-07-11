import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly baseUrl = 'http://localhost:8081/api/v1/';
  userEmail: string = '';

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  getUserEmail() {
    return this.userEmail;
  }

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('auth_token');



}
