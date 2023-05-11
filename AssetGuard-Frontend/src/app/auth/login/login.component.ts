import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor( 
    private authService : AuthserviceService,
    private router: Router) {}


    signIn() {
      this.authService.login(this.email, this.password).subscribe(
        (response: AuthResponse) => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.log(error);
          window.alert("Invalid email or password");
        }
      );
    }
    
}