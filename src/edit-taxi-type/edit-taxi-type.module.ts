import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaxiTypeRoutingModule } from './edit-taxi-type-routing.module';
import { EditTaxiTypeComponent } from './edit-taxi-type.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditTaxiTypeComponent
  ],
  imports: [
    CommonModule,
    EditTaxiTypeRoutingModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
export class EditTaxiTypeModule { }
