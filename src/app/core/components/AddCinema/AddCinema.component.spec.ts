/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddCinemaComponent } from './AddCinema.component';

describe('AddCinemaComponent', () => {
  let component: AddCinemaComponent;
  let fixture: ComponentFixture<AddCinemaComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AddCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
