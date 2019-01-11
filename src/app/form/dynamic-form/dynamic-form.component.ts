import {Component, OnInit, Input} from "@angular/core";

import {FormGroup} from "@angular/forms";
import {ElementBase} from "../../model/element-base";
import {ElementsService} from "../../shared/elements.service";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  providers: [ElementsService]
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: ElementBase<string>[] = [];
  form: FormGroup;

  constructor(private elementsService: ElementsService) {
  }

  ngOnInit() {
    this.form = this.elementsService.toFormGroup(this.elements);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
