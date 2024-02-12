import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginuser.component.html',
  styleUrls: ['loginuser.component.css'] // Adjust path if needed
})
export class LoginuserComponent {
  errorMessage: string = '';
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.user).subscribe(
      response => {
        this.authService.setAuthentication(response.token, response.username);
        this.router.navigate(['/taskbystatus']);
      },
      error => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
