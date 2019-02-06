import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './../form-components/dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [DynamicformComponent, DynamicFieldDirective],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynamicformComponent]
})
export class DynamicFormModule { }
