import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormInputTextComponent } from './_forms/inputs/form-input-text/form-input-text.component';
import { WrapperFormFieldComponent } from './_forms/wrappers/wrapper-form-field/wrapper-form-field.component';

const COMPONENTS = [
  InputTextComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    FormInputTextComponent,
    WrapperFormFieldComponent
  ],
  exports: [
    ...COMPONENTS,
    FormlyModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'form-field', component: WrapperFormFieldComponent }],
      types: [{ name: 'input', component: FormInputTextComponent, wrappers: ['form-field'] }],
    }),
  ]
})
export class MyFormsModule { }
