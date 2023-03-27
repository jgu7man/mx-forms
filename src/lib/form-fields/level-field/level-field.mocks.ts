import { Validators } from '@angular/forms';
import { MxLevelField } from './level-field.model';

export const levelField: MxLevelField = new MxLevelField(
  'level', // id
  'Level', // label
  'Select level', // placeholder
  'Choose a level between 1 and 100', // info
  {
    // minLevel
    label: 'Beginner',
    amount: 1
  },
  {
    // maxLevel
    label: 'Expert',
    amount: 100
  },
  0, // intervals
  true, // thumb
  false, // vertical
  true, // required
  true, // visible
  false, // disable
  [
    // additionalValidations
    {
      token: 'min',
      message: 'Level must be greater than or equal to 1',
      validator: Validators.min(1)
    },
    {
      token: 'max',
      message: 'Level must be less than or equal to 100',
      validator: Validators.max(100)
    }
  ]
);
