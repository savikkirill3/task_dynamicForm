import {Component, OnInit, Input} from "@angular/core";

import {FormGroup} from "@angular/forms";
import {ElementBase} from "../../model/element-base";
import {ElementsService} from "../../shared/elements.service";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
  providers: [ElementsService]
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: ElementBase<any>[] = [];
  form: FormGroup;

  constructor(private es: ElementsService) {
  }

  ngOnInit() {
    this.form = this.es.toFormGroup(this.elements);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
