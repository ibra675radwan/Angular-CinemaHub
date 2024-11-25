import { Component, OnInit } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {RouterLink} from "@angular/router";
import {SlicePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table'; 
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),]
    )],
  
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
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Cinema', 'Number', 'City', 'Capacity'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit() {
  }

}


  export interface PeriodicElement {
    Cinema: string;
    Capacity: number;

    Number: string;
    City: string;
    description: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      Capacity: 120,
      Cinema: 'Las salinas',
      Number: '71903358',
      City: 'Anfeh',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
      Capacity: 150,
      Cinema: 'Las salinas',
      Number: '71903358',
      City: 'Anfeh',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    }, 
      
    
   
  ];
 