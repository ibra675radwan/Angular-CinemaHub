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
import { APIClient, FileParameter, GenreDTO, MovieDto } from 'app/core/services/apiClient';
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
  movieDto: MovieDto;
  selectedFile: File | null = null;

  constructor(private snackBar: MatSnackBar, private apiClient: APIClient) {
    // Properly initialize `movieDto` with a valid `GenreDTO` instance
    this.movieDto = {
      movieId: 0,
      title: '',
      releaseDate: null,
      duration: 0,
      rating: 0,
      genre: new GenreDTO(), // Use a new GenreDTO instance
      description: '',
      cinemaName: '',
      posterUrl: 'default-poster.jpg',
      init: function (_data?: any): void {
        throw new Error('Function not implemented.');
      },
      toJSON: function (data?: any) {
        throw new Error('Function not implemented.');
      },
    };

    // Initialize the genre with default values
    this.movieDto.genre.init({
      genreId: 0,
      name: '',
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Fetched user from localStorage:', user);
    console.log('Cinema ID:', user.cinemaId);

    if (user && user.cinemaId) {
      this.apiClient.getById(user.cinemaId).subscribe({
        next: (cinema) => {
          console.log('Cinema fetched successfully:', cinema);
          this.movieDto.cinemaName = cinema.data.name;
        },
        error: (err) => {
          console.error('Error fetching cinema name:', err);
          this.snackBar.open('Failed to fetch cinema information.', 'Close', { duration: 3000 });
        },
      });
    } else {
      console.error('User or cinemaId not found in localStorage');
      this.snackBar.open('Invalid user or cinema information.', 'Close', { duration: 3000 });
    }
  }

  addMovie() {
    if (!this.selectedFile) {
      this.snackBar.open('Please select a file for the poster.', 'Close', { duration: 3000 });
      return;
    }
  
    if (!this.movieDto.cinemaName) {
      this.snackBar.open('Cinema name is missing. Please try again later.', 'Close', { duration: 3000 });
      return;
    }
  
    if (!this.movieDto.releaseDate || this.movieDto.releaseDate.trim() === '') {
      this.snackBar.open('Release date is missing. Please provide a valid date.', 'Close', { duration: 3000 });
      return;
    }
  
    console.log('Prepared releaseDate (string):', this.movieDto.releaseDate);
  
    const fileParameter: FileParameter = {
      data: this.selectedFile,
      fileName: this.selectedFile.name,
    };
  
    this.apiClient.addMovie(
      this.movieDto.movieId,
      this.movieDto.title,
      this.movieDto.releaseDate, // Pass the release date as a string
      this.movieDto.duration,
      this.movieDto.rating,
      this.movieDto.genre.genreId,
      this.movieDto.genre.name,
      this.movieDto.description,
      this.movieDto.cinemaName,
      this.movieDto.posterUrl || 'default-poster.jpg', // Optional PosterUrl
      fileParameter
    ).subscribe({
      next: () => {
        this.snackBar.open('Movie added successfully!', 'Close', { duration: 3000 });
      },
      error: (err) => {
        console.error('Error adding movie:', err);
        this.snackBar.open('Failed to add movie. Please try again.', 'Close', { duration: 3000 });
      },
    });
  }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  

