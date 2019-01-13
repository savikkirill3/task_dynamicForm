import {Component} from '@angular/core';
import {FormsService} from "./shared/forms.service";
import {ElementBase} from "./model/element-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FormsService]
})
export class AppComponent {
  elements: ElementBase<any>[];

  constructor(private formsService: FormsService) {
    this.elements = formsService.getElements();
    console.log(this.elements);
  }
}
