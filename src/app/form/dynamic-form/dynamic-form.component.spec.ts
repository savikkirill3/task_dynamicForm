import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DynamicFormComponent} from './dynamic-form.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

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

  it('should not call onChanges if form is invalid', () => {
    component.form.patchValue({
      firstname: '',
      email: 'aaa@mail.ru',
      date: '',
      skill: 1
    });

    fixture.detectChanges();

    spyOn(component.onChange, 'emit');
    component.onSubmit();

    expect(component.onChange.emit).toHaveBeenCalled();
  });

});
