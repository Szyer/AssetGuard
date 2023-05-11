import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';


export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private readonly TOKEN_KEY = 'auth_token';
  constructor(
    private http : HttpClient,
   ) { }

 
  register(firstName: string, lastName: string, email: string, password: string) : Observable<any> {
    const body = { firstName, lastName, email, password };
    return this.http.post(`http://localhost:8081/api/v1/auth/register`, body)
  }


    
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<AuthResponse>(`http://localhost:8081/api/v1/auth/authenticate`, body)
      .pipe(
        tap(response => {
          localStorage.setItem('auth_token', response.token);
          localStorage.getItem('auth_token')
          console.log('auth_token');
        })
      );
  }
  

  isLoggedIn(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}
