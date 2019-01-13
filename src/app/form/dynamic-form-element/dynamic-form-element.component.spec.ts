import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormElementComponent } from './dynamic-form-element.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DynamicFormElementComponent', () => {
  let component: DynamicFormElementComponent;
  let fixture: ComponentFixture<DynamicFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormElementComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormElementComponent);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
