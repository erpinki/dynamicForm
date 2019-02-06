import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormRadioButtonComponent } from './../form-radio-button/form-radio-button.component';
import { FormCheckBoxComponent } from './../form-check-box/form-check-box.component';
import { FormTextAreaComponent } from './../form-text-area/form-text-area.component';
const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  radio:  FormRadioButtonComponent,
  checkbox: FormCheckBoxComponent,
  textarea: FormTextAreaComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
   config;

  @Input()
  group: FormGroup
  component;
  constructor(  private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) {
}
ngOnInit() {
  const component = components[this.config.type];
  const factory = this.resolver.resolveComponentFactory<any>(component);
  this.component = this.container.createComponent(factory);
  this.component.instance.config = this.config;
  this.component.instance.group = this.group;
}
}
