import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Error } from './error';
import * as DomUtil from './dom-utils';

@Component({
  selector: 'form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {

  errors: Error[] = [];

  @Input()
  form: FormGroup;
  @Output()
  submit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  validate() {
    this.errors.length = 0;
    this.prepareErrors(this.form);
    if (this.errors.length == 0)
      this.submit.emit();
  }
  select(error: Error) {
    const selector = `[formControlName=${error.name}]`;
    let input = document.querySelector(`${selector}`) as HTMLElement;
    if (DomUtil.isInTab(input)) {
      let parent = DomUtil.getTabParent(input);
      if (DomUtil.isHidden(parent)) {
        DomUtil.openRegionOrTab(parent);
      }
    }
    if (DomUtil.isInRegion(input)) {
      let parent = DomUtil.getRegionParent(input);
      if (DomUtil.isHidden(parent))
        DomUtil.openRegionOrTab(parent);
    }

    setTimeout(function () { input.focus({ preventScroll: false }); }, 300);
  }

  prepareErrors(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl && !control.valid) {
        let error = new Error(field, control);
        this.errors.push(error);

      } else if (control instanceof FormGroup) {
        this.prepareErrors(control);
      }
    });
  }

}
