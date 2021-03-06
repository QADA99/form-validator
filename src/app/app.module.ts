import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule, Routes } from '@angular/router'

import { ButtonModule } from 'primeng/button';
import { DraggableDirective } from './form-validator/draggable.directive'
import { AppComponent } from './app.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { ErrorListComponent } from './form-validator/error-list/error-list.component';
import { FilterErrorPipe } from './form-validator/error-list/filter-error.pipe'
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [
    AppComponent,
    FormValidatorComponent,
    ErrorListComponent,
    FilterErrorPipe,
    DraggableDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    ScrollPanelModule,
    ButtonModule,
    ReactiveFormsModule,
    TabViewModule,
    StepsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
const routes: Routes = []
