import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes = {
    mainLableClass: '',
    lableClass: 'col-xl-3 col-lg-3 col-form-label m-t-20',
    formGroupClass : '',
    inputControlClass : 'form-control m-input',
    selectControlClass : 'form-control m-input',
    checkBoxControlClass : '',
    radioControlClass : '',
    textAreaControlClass : 'form-control col-md-12',
    buttonControlClass : 'btn btn-success m-btn m-btn--custom m-btn--icon m-t-20',
    btnPostFixClass: 'la la-arrow-right'
  }
  cabinetinfo = [{
      type: 'select',
      label: 'DataCenter',
      name: 'dataCenter',
      options: ['india', 'UK', 'US', 'TS'],
      placeholder: 'Select an option',
      labelClass: this.classes.lableClass,
      controlClass: this.classes.selectControlClass,
      validation: [Validators.required]
  },
  {
    type: 'select',
    label: 'Cabinet:',
    name: 'cabinet',
    options: ['A', 'B', 'C', 'D'],
    placeholder: 'Select an option',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.selectControlClass,
    validation: [Validators.required]
  },
  {
    type: 'input',
    label: 'Panel',
    name: 'panel',
    placeholder: 'Panel',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    type: 'input',
    label: 'Port',
    name: 'port',
    placeholder: 'Port',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    label: 'Save and Continue',
    postFix: true,
    preFix: false,
    name: 'submit',
    type: 'button',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.buttonControlClass,
    postFixClass: this.classes.btnPostFixClass,
  }
];
carrierDetails = [{
    type: 'input',
    label: 'Carrier',
    name: 'carrier',
    placeholder: 'Carrier',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    type: 'input',
    label: 'Carrier Circuit ID',
    name: 'circuitID',
    placeholder: 'Carrier Circuit ID',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    type: 'input',
    label: 'Company Name on Order (if different)',
    name: 'companyName',
    placeholder: 'Company Name on Order (if different)',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    type: 'input',
    label: 'Carrier LOA Document',
    name: 'loaDocument',
    placeholder: 'Carrier LOA Document',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.inputControlClass
  },
  {
    type: 'checkbox',
    label: '',
    name: 'check',
    options: [{id: 1, name : 'I affirm the  Carrier LOA Document Contains all of the Following details',
    checkList: true, checkListOpt: ['Carrier Firm Delivery Date (FOC)',
     'Carrier Termination Detail',
     'Carrier Relay Rack', 'Carrier Port', 'Carrier Panel', 'Carrier Port Speed']}],
    labelClass: this.classes.lableClass,
    controlClass: this.classes.checkBoxControlClass
  },
  {
    type: 'textarea',
    label: 'Additional Carrier Notes',
    name: 'carrierNotes',
    placeholder: 'Additional Carrier Notes',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.textAreaControlClass
  },
  {
    label: 'Save and Continue',
    postFix: true,
    preFix: false,
    name: 'submit',
    type: 'button',
    labelClass: this.classes.lableClass,
    controlClass: this.classes.buttonControlClass,
    postFixClass: this.classes.btnPostFixClass,
  }
];
cableDetails = [{
  type: 'radio',
  label: 'Cable Type',
  name: 'Cable',
  options: [{id: 1, name: 'Copper', detailInfo: true, details: 'CAT6 Ethernet, RJ45 Connetros'},
   {id: 2, name: 'Multi Mode Fiber', detailInfo: true, details: 'OM4, LC Connectros'},
   {id: 3, name: 'Single Mode Fiber', detailInfo: true, details: '9/125 , LC Connectros'}],
  labelClass: this.classes.lableClass,
  controlClass: this.classes.radioControlClass
},
{
type: 'textarea',
label: 'Additional Cable Notes',
name: 'Additional Cable Notes',
placeholder: 'Additional Cable Notes',
labelClass: this.classes.lableClass,
controlClass: this.classes.textAreaControlClass
},
{
  label: 'Save and Continue',
  postFix: true,
  preFix: false,
  name: 'submit',
  type: 'button',
  labelClass: this.classes.lableClass,
  controlClass: this.classes.buttonControlClass,
  postFixClass: this.classes.btnPostFixClass
}
];
reviewConfirmDetails = []
  constructor() {
   }

  ngOnInit() {
    console.log();
  }
  formSubmitted(value) {
    console.log(value);
  }

}
