import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent implements OnInit {
   @Input()
   config: any[] = [];
   form : FormGroup;
   @Output()
   submitted: EventEmitter<any> = new EventEmitter<any>();
  constructor( private fb: FormBuilder ) { }   

  ngOnInit() {
this.form = this.createForm();
  }
createForm() {
const group = this.fb.group({});
this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
  // if(control.options && control.type==checkbox){
  //   this.config["options"].forEach(option =>option.addControl(option.formName, this.fb.control('')))
  // }


return group;
}
}
