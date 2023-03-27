import { MxRadioField } from './radio-field.model';

export const radioField = new MxRadioField(
  'gender',
  'Gender',
  [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ],
  'male',
  '',
  '',
  true,
  true,
  false,
  []
);
