import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-radio-button',
  templateUrl: './form-radio-button.component.html',
  styleUrls: ['./form-radio-button.component.scss']
})
export class FormRadioButtonComponent {
  config: any;
  group: FormGroup;
}
