import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MxDefaultFieldComponent, MxNumberFieldComponent, MxTextFieldComponent } from './default-field/default-field.component';


@NgModule({
  declarations: [
    MxDefaultFieldComponent,
    MxTextFieldComponent,
    MxNumberFieldComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MxFieldsModule { }
