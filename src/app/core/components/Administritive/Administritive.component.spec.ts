/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdministritiveComponent } from './Administritive.component';

describe('AdministritiveComponent', () => {
  let component: AdministritiveComponent;
  let fixture: ComponentFixture<AdministritiveComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AdministritiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministritiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
