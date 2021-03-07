import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'form-validator';

  form: FormGroup;
  items: MenuItem[];


  show() {

  }
  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) { }

  submit() {
    // send the http request here
  }


  ngOnInit() {
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
    this.primengConfig.ripple = true;
    this.form = this.fb.group({
      cin: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [24, [Validators.required, Validators.max(40), Validators.min(18)]],
      scrollInput: [null, Validators.required],
      address: this.fb.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null],
        state: [null],
        country: [null, Validators.required]
      }),
      family: this.fb.group({
        father: [null, Validators.required],
        mother: [null]
      }),
      bac: this.fb.group({
        highSchool: [null, Validators.required],
        highSchoolYear: [null]
      }),
      license: this.fb.group({
        university: [null, Validators.required],
        licenseYear: [null]
      })

    });
  }




}
