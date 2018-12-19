import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {AppComponent} from './app.component';
import {DynamicFormComponent} from "./form/dynamic-form/dynamic-form.component";
import {DynamicFormElementComponent} from "./form/dynamic-form-element/dynamic-form-element.component";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
