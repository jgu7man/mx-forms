import { MxSelectField } from './select-field.model';

export const simpleSelectField: MxSelectField = new MxSelectField(
  'fruits', // id
  'Fruits', // label
  [
    // options
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' }
  ],
  'Select a fruit', // placeholder
  'You can select a fruit', // info
  false, // multiple
  'None', // resetLabel
  true, // required
  true // visible
);

export const groupSelectField: MxSelectField = new MxSelectField(
  'cars', // id
  'Cars', // label
  [
    // options
    {
      name: 'Japanese Cars',
      options: [
        { label: 'Honda', value: 'honda' },
        { label: 'Toyota', value: 'toyota' },
        { label: 'Nissan', value: 'nissan' }
      ]
    },
    {
      name: 'American Cars',
      options: [
        { label: 'Ford', value: 'ford' },
        { label: 'Chevrolet', value: 'chevrolet' },
        { label: 'Chrysler', value: 'chrysler' }
      ]
    }
  ],
  'Select a cars', // placeholder
  'You can select a cars', // info
  false, // multiple
  'None', // resetLabel
  true, // required
  true // visible
);
