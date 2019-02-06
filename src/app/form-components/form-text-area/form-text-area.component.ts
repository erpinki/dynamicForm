import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  styleUrls: ['./form-text-area.component.scss']
})
export class FormTextAreaComponent {
  config: any;
  group: FormGroup;
}
