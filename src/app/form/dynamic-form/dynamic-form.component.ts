import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {FormGroup} from '@angular/forms';
import {ElementBase} from '../../model/element-base';
import {ElementsService} from '../../shared/elements.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ElementsService]
})
export class DynamicFormComponent implements OnInit {

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() elements: ElementBase<string>[] = [];
  form: FormGroup;

  constructor(private elementsService: ElementsService) {
  }

  ngOnInit() {
    this.form = this.elementsService.toFormGroup(this.elements);
  }

  onSubmit() {
    if (this.form.valid) {
      this.onChange.emit(this.form.value);
    }
  }

}
