import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Error } from './error';

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
    input.focus({ preventScroll: false });
    if (document.activeElement != input) {
      console.log("it seems like he is not visible")
      let tabParent = this.findParentBySelector(input, `[role="tabpanel"]`) as HTMLElement;
      let linkToActivate = document.querySelector(`[aria-controls="${tabParent.id}"]`) as HTMLElement;
      linkToActivate.click();
    }



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
  getSiblings(e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }

  collectionHas(a, b) { //helper function (see below)
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] == b) return true;
    }
    return false;
  }
  findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while (cur && !this.collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }
}
