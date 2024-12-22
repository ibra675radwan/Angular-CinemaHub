import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDateRangeInput} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { APIClient, MovieDto } from 'app/core/services/apiClient';
import { Router } from '@angular/router';




@Component({
  selector: 'app-Administritive',
  templateUrl: './Administritive.component.html',
  styleUrls: ['./Administritive.component.scss'],
  providers: [provideNativeDateAdapter()],
  imports:[
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    JsonPipe,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,



  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone : true
})
export class AdministritiveComponent implements OnInit {
  movieDto: MovieDto = new MovieDto();

  constructor(private apiClient: APIClient, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    // Retrieve cinema information from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.movieDto.cinemaName = parsedUser.cinemaName; // Automatically set cinemaName
    }
  }

  addMovie(): void {
    // Validate required fields
    if (!this.movieDto.title || !this.movieDto.releaseDate || !this.movieDto.duration || !this.movieDto.genre.name || this.movieDto.description || this.movieDto.rating) {
      this.showSnackBar('Please fill in all required fields.');
      return;
    }

    // Call the API to add the movie
    this.apiClient.addMovie(this.movieDto).subscribe(
      () => {
        this.showSnackBar('Movie added successfully!');
        this.router.navigate(['/movies']);
      },
      (error) => {
        console.error('Error adding movie:', error);
        this.showSnackBar('Failed to add movie.');
      }
    );
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      });
  }}

 
