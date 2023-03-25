import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MxCheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { MxDefaultFieldComponent } from './default-field/default-field.component';
import { MxEmailFieldComponent } from './email-field/email-field.component';
import { MxLevelFieldComponent } from './level-field/level-field.component';
import { MxNumberFieldComponent } from './number-field/number-field.component';
import { MxPasswordFieldComponent } from './password-field/password-field.component';
import { MxPhoneFieldComponent } from './phone-field/phone-field.component';
import { MxRadioFieldComponent } from './radio-field/radio-field.component';
import { MxSelectFieldComponent } from './select-field/select-field.component';
import { MxTextFieldComponent } from './text-field/text-field.component';
import { MxTextareaFieldComponent } from './textarea-field/textarea-field.component';

const components = [
  MxDefaultFieldComponent,
  MxTextFieldComponent,
  MxNumberFieldComponent,
  MxEmailFieldComponent,
  MxPhoneFieldComponent,
  MxPasswordFieldComponent,
  MxTextareaFieldComponent,
  MxSelectFieldComponent,
  MxRadioFieldComponent,
  MxCheckboxFieldComponent,
  MxLevelFieldComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule],
  exports: [...components]
})
export class MxFieldsModule {}
