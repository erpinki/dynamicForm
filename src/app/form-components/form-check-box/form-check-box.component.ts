import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-check-box',
  templateUrl: './form-check-box.component.html',
  styleUrls: ['./form-check-box.component.scss']
})
export class FormCheckBoxComponent {
  config: any;
  group: FormGroup;
}
