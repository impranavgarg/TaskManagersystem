import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 
import { User } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Adjust path if needed
})
export class RegisterComponent {
  errorMessage: string = '';
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe(
      newUser => {
        // Successful registration;
        // Potentially: Redirect to login OR auto-log in the user, 
        // then proceed to the 'taskbystatus' route. 
        console.log('Registration successful', newUser); 
        this.router.navigate(['/loginuser']); 
      },
      error => {
        this.errorMessage = 'Registration failed. Please try again.'; // Handle error
      }
    );
  }

  login(): void {
    this.router.navigate(['/loginuser']);
  }
}
