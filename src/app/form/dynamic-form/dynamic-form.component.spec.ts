import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DynamicFormComponent} from './dynamic-form.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By, By} from 'protractor';

const formInput = {
  date: '2019-01-02',
  email: 'savikkirill3@gmail.com',
  firstname: 'kirill',
  skill: '2'
};
describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
