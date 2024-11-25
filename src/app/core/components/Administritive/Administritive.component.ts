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
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass:['custom-snackbar']
    });
}
 
}