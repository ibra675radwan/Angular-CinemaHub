import { Component, OnInit } from '@angular/core';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { RouterLink } from "@angular/router";
import { SlicePipe } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table'; 
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { APIClient, CinemaDTO } from 'app/core/services/apiClient';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
  imports: [
    RouterLink,
    SlicePipe,
    MatTabGroup,
    MatTab,
    MatIcon,
    MatTableModule, MatButtonModule, MatIconModule
  ],
  standalone: true
})
export class CinemaComponent implements OnInit {
  dataSource: CinemaDTO[] = [];
  columnsToDisplay = ['name', 'location', 'contactInfo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: CinemaDTO | null = null;

  constructor(private apiClient: APIClient) {}

  ngOnInit() {
    this.fetchCinemas();
  }

  fetchCinemas() {
    this.apiClient.getAll().subscribe({
      next: (cinemas) => {
        this.dataSource = cinemas.data; // Adjust based on the API response structure
      },
      error: (err) => {
        console.error('Error fetching cinemas:', err);
      }
    });
  }
}
