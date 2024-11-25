import { Component, OnInit } from '@angular/core';
import { APIClient, CinemaDTO, UserDTO, UserRequestDto } from 'app/core/services/apiClient';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[
MatFormFieldModule,
MatInputModule,
MatButtonModule,
FormsModule





  ],
  standalone: true
})
export class LoginComponent implements OnInit {

  userDto: UserRequestDto
  constructor(private apiClient: APIClient) { }

  ngOnInit() {
    this.userDto = new UserRequestDto(); // Initialize the DTO
  }

  login(){
    this.apiClient.login(this.userDto).subscribe(data => {
      
    })
  }

}
