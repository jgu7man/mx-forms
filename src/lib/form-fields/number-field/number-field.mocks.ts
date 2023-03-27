import { Validators } from '@angular/forms';
import { MxNumberField } from './number-field.model';

export const myNumberField = new MxNumberField(
  'myNumberField',
  'My Number Field Label',
  'My Number Field Placeholder',
  'Additional Information about My Number Field',
  true, // Required field
  false, // Not disabled
  true, // Visible
  [
    // Additional Validations
    {
      token: 'min',
      message: 'Number must be greater than 0',
      validator: Validators.min(0)
    },
    {
      token: 'max',
      message: 'Number must be less than or equal to 100',
      validator: Validators.max(100)
    }
  ]
);
