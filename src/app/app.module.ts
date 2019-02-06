import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { FormInputComponent } from './form-components/form-input/form-input.component';
import { FormSelectComponent } from './form-components/form-select/form-select.component';
import { FormButtonComponent } from './form-components/form-button/form-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormTextAreaComponent } from './form-components/form-text-area/form-text-area.component';
import { FormRadioButtonComponent } from './form-components/form-radio-button/form-radio-button.component';
import { FormCheckBoxComponent } from './form-components/form-check-box/form-check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormTextAreaComponent,
    FormRadioButtonComponent,
    FormCheckBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [ 
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent,
    FormRadioButtonComponent,
    FormCheckBoxComponent,
    FormTextAreaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
