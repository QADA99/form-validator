import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { ErrorListComponent } from './form-validator/error-list/error-list.component';
import { FilterErrorPipe } from './form-validator/error-list/filter-error.pipe'
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    FormValidatorComponent,
    ErrorListComponent,
    FilterErrorPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    ButtonModule,
    ReactiveFormsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
