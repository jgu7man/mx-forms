## MxTextFieldComponent
The `MxTextFieldComponent` is an Angular component for displaying and editing text fields.

### Usage
Add the `mx-text-field` component to your template, passing the field configuration.
```html
<mx-text-field [field]="textField"></mx-text-field>
```

The `field` input is an instance of `MxField.TEXT`. You can create a `MxTextField` object with the desired configuration:
```ts
import { MxField } from '@marxa/forms';
import { MxTextField } from '@marxa/forms';

@Component({
  selector: 'my-component',
})
export class MyComponent {
  textField: Partial<MxField.TEXT> = {
    id: 'myTextField',
    label: 'My Text Field',
    required: true,
    visible: true,
    additionalValidations: [
      { type: MxField.ValidationType.MIN_LENGTH, value: 5 },
      { type: MxField.ValidationType.MAX_LENGTH, value: 50 }
    ]
  };
}
```

### Properties
The **MxTextFieldComponent** has the following properties: 

`field` (input)
The `field` input property is used to pass a `MxTextField` configuration object to the component. The component sets up the field based on the configuration object.

### Parameters

The `MxTextField` constructor accepts the following parameters:

`id`: A string that represents the unique identifier for the field.
`label`: A string that represents the label text for the field.
`placeholder` (optional): A string that represents the placeholder text to display in the text field.
`info` (optional): A string that represents additional information about the field.
`visible` (optional): A boolean that indicates whether the field is visible or hidden.
`required` (optional): A boolean that indicates whether the field is required or optional.
`disable` (optional): A boolean that indicates whether the field is disabled or enabled.
`additionalValidations` (optional): An array of additional validation rules for the field. Each rule is an object with two properties:
`type`: A value from the MxField.ValidationType enum that represents the type of validation rule.
`value`: The value to use for the validation rule.

### Contributing
We welcome contributions to **MxTextFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxTextFieldComponent** is released under the MIT License.
