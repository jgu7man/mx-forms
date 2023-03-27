import { Validators } from '@angular/forms';
import { MxPhoneField } from './phone-field.model';

// Mock usage of MxPhoneFieldModel
export const phoneField = new MxPhoneField(
  'phone',
  'Phone Number',
  'Enter phone number',
  'Phone field description',
  undefined,
  true,
  true,
  false,
  [
    {
      validator: Validators.maxLength(20),
      token: 'maxLength',
      message: 'Phone number cannot be longer than 20 characters'
    }
  ]
);
