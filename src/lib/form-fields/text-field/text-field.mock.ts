import { Validators } from '@angular/forms';
import { MxTextField } from './text-field.model';

export const textField = new MxTextField(
  'name',
  'Name',
  'Enter your name',
  '',
  true,
  false,
  false,
  [
    {
      validator: Validators.maxLength(10),
      token: 'maxlength',
      message: 'The field must be at most 10 characters long'
    }
  ]
);
