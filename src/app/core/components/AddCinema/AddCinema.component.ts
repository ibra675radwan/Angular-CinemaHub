import { Component, OnInit } from '@angular/core';
import { APIClient, CinemaDTO } from 'app/core/services/apiClient';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-AddCinema',
  templateUrl: './AddCinema.component.html',
  styleUrls: ['./AddCinema.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AddCinemaComponent implements OnInit {
  CinemaDto: CinemaDTO = new CinemaDTO();
  username: string | null = '';

  constructor(private apiClient: APIClient) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = user?.username || 'Guest';
  }

  addCinema() {
    if (!this.CinemaDto.name || !this.CinemaDto.location || !this.CinemaDto.contactInfo) {
      alert('Please fill in all fields.');
      return;
    }
    this.CinemaDto.cinemaId = 0;
    console.log(this.CinemaDto);
    
    this.apiClient.add(this.CinemaDto).subscribe({
      next: () => alert('Cinema added successfully!'),
      error: (error) => {
        console.error('Error adding cinema:', error);
        alert('Failed to add cinema.');
      }
    });
  }
}
