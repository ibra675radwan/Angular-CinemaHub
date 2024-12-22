import { Component } from '@angular/core';
import { APIClient, LoginRequestDTO } from 'app/core/services/apiClient';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgIf
  ]
})
export class LoginComponent {
  errorMessage: string | null = null;
  userDto: LoginRequestDTO = new LoginRequestDTO() // DTO Initialization

  constructor(
    private apiClient: APIClient,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    console.log(this.userDto);

    this.apiClient.login(this.userDto).subscribe({
      
      next: (response: any) => {

        console.log(response);
        localStorage.setItem("user", JSON.stringify(response));
        const token = response.token;  // Ensure correct response mapping
        if (token) {
          // this.authService.saveToken(token);  // Save token
          this.router.navigate(['/movies']);  // Navigate on success        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
