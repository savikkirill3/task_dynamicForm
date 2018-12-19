import {Injectable} from "@angular/core";
import {ElementBase} from "../model/element-base";
import {TextBoxElement} from "../model/textbox-element";
import {DropDownElement} from "../model/dropdown-element";

@Injectable()
export class FormsService {

  getElements() {
    let elements: ElementBase<any>[] = [
      new TextBoxElement({
        key: "firstname",
        label: "First Name",
        required: true,
        order: 1
      }),
      new TextBoxElement({
        key: "email",
        label: "Email",
        type: "email",
        required: true,
        order: 3
      }),
      new TextBoxElement({
        key: "date",
        label: "Date",
        type: "date",
        required: true,
        order: 3
      }),
      new DropDownElement({
        key: "skill",
        label: "Skill",
        order: 4,
        options: [{ key: "1", value: "JS" },
          { key: "2", value: "Java" },
          { key: "3", value: "NodeJs" },]
      })
    ];

    return elements.sort((a, b) => a.order - b.order);
  }
}
