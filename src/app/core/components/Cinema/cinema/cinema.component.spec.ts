/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CinemaComponent } from './cinema.component';

describe('CinemaComponent', () => {
  let component: CinemaComponent;
  let fixture: ComponentFixture<CinemaComponent>;



  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
