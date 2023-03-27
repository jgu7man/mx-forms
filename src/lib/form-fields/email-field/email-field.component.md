## MxEmailField
This component is used to display an email input field.

`MxEmailField` is a class that defines the configuration for an email input field in an Angular application. Extends the `MxField` class.

### Properties
The class has several properties that define the behavior and appearance of the email input field, including:

`id`
The `id` property is a string that specifies the unique identifier for the field. This property is required.

`label`
The `label` property is a string that specifies the label text for the field. This property is required.

`placeholder`
The `placeholder` property is an optional string that specifies the `placeholder` text to display in the email field.

`info`
The `info` property is an optional string that provides additional information about the field.

`emailValidationMsg`
The `emailValidationMsg` property is an optional string that specifies a custom message for email format validation. If this property is not provided, the default message is used.

`required`
The `required` property is a boolean that specifies whether the field is required or optional. The default value is false.

`disable`
The `disable` property is a boolean that specifies whether the field is disabled or enabled. The default value is false.

`visible`
The `visible` property is a boolean that specifies whether the field is visible or hidden. The default value is true.

`additionalValidations`
The `additionalValidations` property is an optional array of additional validation rules for the field. Each rule is an object with the following properties:

  `validator`: A function that performs the validation.
  `token`: A string that specifies a unique identifier for the validation rule.
  `message`: A string that specifies the validation message to display if the validation fails.

`id:` a unique identifier for the field
`label`: the label text for the field
`placeholder`: the placeholder text to display in the input field
`info`: additional information about the field
`emailValidationMsg`: a custom message for email format validation
`required`: whether the field is required or optional
`disable`: whether the field is disabled or enabled
`visible`: whether the field is visible or hidden
`additionalValidations`: an array of additional validation rules for the field

### Example
```html
<mx-email-field [field]="emailField"></mx-email-field>
```

```ts
import { Component } from '@angular/core';
import { MxEmailField } from 'my-library';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <mx-email-field [field]="emailField"></mx-email-field>
    </form>
  `
})
export class AppComponent {
  emailField: MxEmailField = new MxEmailField(
    'email',
    'Email',
    'Enter email',
    'Enter a valid email address',
    'Please enter a valid email address',
    true,
    false,
    true,
    [
      {
        name: 'customValidation',
        validator: (value: any) => {
          const pattern = /\S+@\S+\.\S+/;
          if (!pattern.test(value)) {
            return {
              customValidation: true
            };
          }
          return null;
        },
        message: 'Please enter a valid email address'
      }
    ]
  );
}
```

### Customizing Email Validation Message
To customize the email validation message, you can set the emailValidationMsg property of the email field configuration object:
```ts
const emailField: MxField.EMAIL = {
  id: 'email',
  label: 'Email',
  required: true,
  visible: true,
  emailValidationMsg: 'Please enter a valid email address.'
};
```

### Contributing
We welcome contributions to **MxEmailFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxEmailFieldComponent** is released under the MIT License.
