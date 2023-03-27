## MxPhoneFieldComponent
The `MxPhoneFieldComponent` is an Angular component that displays and allows editing of phone number fields. It extends the `MxDefaultFieldComponent` and is intended to be used with a `MxPhoneField` configuration object.

### Usage
To use the `MxPhoneFieldComponent`, you need to pass a `MxPhoneField` configuration object to the field input property. You can set the following properties in the `MxPhoneField` object:

`id` (string): The unique identifier for the field.
`label` (string): The label text for the field.
`placeholder` (string, optional): The placeholder text to display in the input field.
`info` (string, optional): Additional information about the field.
`patternValidation` (object, optional): An object that contains the pattern and message for the phone number field validation. The default pattern is `'[0-9]{3}-[0-9]{3}-[0-9]{4}'` and the default message is 'Invalid phone number format.'.
`required` (boolean, optional): Whether the field is required or optional.
`disable` (boolean, optional): Whether the field is disabled or enabled.
`visible` (boolean, optional): Whether the field is visible or hidden.
`additionalValidations` (array of validation objects, optional): An array of additional validation rules for the field.

```ts
import { Component } from '@angular/core';
import { MxPhoneField } from './phone-field.model';

@Component({
  selector: 'my-component',
  template: `
    <mx-phone-field [field]="phoneField"></mx-phone-field>
  `
})
export class MyComponent {
  phoneField: MxPhoneField = {
    id: 'phone',
    label: 'Phone Number',
    required: true,
    visible: true,
    patternValidation: {
      pattern: '^\\d{3}-\\d{3}-\\d{4}$',
      message: 'Please enter a valid phone number'
    }
  };
}
```

### Properties
The **MxPhoneFieldComponent** has the following properties:

`field` (input)
The `field` input property is used to pass a `MxPhoneField` configuration object to the component. The component sets up the field based on the configuration object.

### Implementation
The **MxPhoneFieldComponent** uses Angular's `Validators` to validate the phone number field based on the pattern specified in the `patternValidation` property of the `MxPhoneField` configuration object.

The component also sets up any additional validation rules specified in the `additionalValidations` property of the `MxPhoneField` configuration object.

### Contributing
We welcome contributions to **MxPhoneFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxPhoneFieldComponent** is released under the MIT License.
