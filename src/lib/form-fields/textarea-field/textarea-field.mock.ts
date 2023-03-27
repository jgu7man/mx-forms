import { Validators } from '@angular/forms';
import { MxTextareaField } from './textarea-field.model';

export const myField = new MxTextareaField(
  'my-field-id',
  'My Field Label',
  'My Field Placeholder',
  'My Field Info',
  { rows: 4, cols: 10 },
  { limit: 100, message: 'Maximum character limit exceeded' },
  true,
  false,
  false,
  [
    {
      validator: Validators.required,
      token: 'required',
      message: 'Field is required'
    }
  ]
);
