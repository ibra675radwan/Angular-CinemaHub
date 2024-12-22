import { Component, OnInit } from '@angular/core';
import { APIClient, CinemaDTO, UserDTO } from 'app/core/services/apiClient';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminHome',
  templateUrl: './AdminHome.component.html',
  styleUrls: ['./AdminHome.component.scss'],
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
  standalone : true
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'administrative') {
      this.router.navigate(['/administrative']);
    } else if (route === 'addCinema') {
      this.router.navigate(['/addCinema']);
    }
  }

  ngOnInit() {
  }

}
