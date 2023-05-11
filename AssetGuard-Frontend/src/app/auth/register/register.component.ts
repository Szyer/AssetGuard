import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthserviceService
  ) {}

  register() {
    this.authService.register(this.firstName, this.lastName, this.email, this.password).subscribe(
      {
        next: (res: any) => {
       
          console.log(res);
          this.router.navigate(['/login']);
        },
        error:(error : any)  => {
          console.log(error);
        }
      }
    );
  }
} 
