import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MxDefaultFieldComponent } from './default-field/default-field.component';
import { MxEmailFieldComponent } from './email-field/email-field.component';
import { MxNumberFieldComponent } from './number-field/number-field.component';
import { MxTextFieldComponent } from './text-field/text-field.component';

const components = [
  MxDefaultFieldComponent,
  MxTextFieldComponent,
  MxNumberFieldComponent,
  MxEmailFieldComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule],
  exports: [...components]
})
export class MxFieldsModule {}
