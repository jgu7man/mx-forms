## MxNumberFieldComponent
`MxNumberFieldComponent` is a customizable Angular component for displaying and editing numeric fields.

### Usage
Use the component in your template:
```html
<mx-number-field [field]="numberField"></mx-number-field>
```

Set the configuration of the field in your component:

```ts
import { MxField } from 'mx-number-field';

const numberField: Partial<MxField.NUMBER> = {
  id: 'age',
  label: 'Age',
  required: true,
  visible: true,
  additionalValidations: [
    { type: MxField.ValidationType.MIN_VALUE, value: 0 },
    { type: MxField.ValidationType.MAX_VALUE, value: 150 }
  ]
};
```

### Properties
`MxNumberFieldComponent` takes a configuration object of type `MxField.NUMBER` with the following properties:

`id` (string): The unique identifier for the field.
`label` (string): The label text for the field.
`placeholder` (string): The placeholder text to display in the field.
`info` (string): Additional information about the field.
`required` (boolean): Whether the field is required or optional. (Default: `false`)
`disable` (boolean): Whether the field is disabled or enabled. (Default: `false`)
`visible` (boolean): Whether the field is visible or hidden. (Default: `true`)
`additionalValidations` (array of objects): An array of additional validation rules for the field.

The additionalValidations array takes objects with the following properties:
  `type` (string): The type of validation. (Possible values: `min_value`, `max_value`)
  `value` (number): The value to use for the validation.

### Contributing
We welcome contributions to **MxNumberFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxNumberFieldComponent** is released under the MIT License.

