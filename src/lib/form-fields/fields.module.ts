import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PASSWORD_VALIDATION_MESSAGES_CONFIG,
  PasswordValidationsMessages
} from '../messages/password-validation.messages';
import {
  VALIDATION_MESSAGES_CONFIG_TOKEN,
  ValidationMessages
} from '../messages/validators.messages';
import { SharedModule } from '../shared/shared.module';
import { MxCheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { MxDateFieldComponent } from './date-field/date-field.component';
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
  MxLevelFieldComponent,
  MxDateFieldComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule],
  exports: [...components],
  providers: [
    {
      provide: VALIDATION_MESSAGES_CONFIG_TOKEN,
      useExisting: ValidationMessages
    },
    {
      provide: PASSWORD_VALIDATION_MESSAGES_CONFIG,
      useExisting: PasswordValidationsMessages
    }
  ]
})
export class MxFieldsModule {}
