## MxRadioFieldComponent
This component is used to display and edit radio input fields.

### Usage
To use this component, you can add the following code to your Angular template:
```html
<mx-radio-field [field]="myRadioField"></mx-radio-field>
```

Where `myRadioField` is an instance of `MxField.RADIO` which defines the properties of the radio field.

### Properties
The `MxRadioField` model has the following properties:

`id`: A string representing the unique identifier for the field.
`label`: A string representing the label text for the field.
`options`: An array of MxField.option objects that define the options for the field.
`default`Selected: An optional value from the options array that defines the default selected value.
`placeholder`: An optional string representing the placeholder text to display in the field.
`info`: An optional string representing additional information about the field.
`required`: A boolean indicating whether the field is required or optional.
`visible`: A boolean indicating whether the field is visible or hidden.
`disable`: A boolean indicating whether the field is disabled or enabled.
`additionalValidations`: An array of MxField.validation objects that define additional validation rules for the field.

### Inputs
The `MxRadioFieldComponent` has a single input:

`field`: An instance of MxField.RADIO that defines the properties of the radio field.

### Examples
Here's an example of how to create a `MxRadioField` instance and pass it to the `MxRadioFieldComponent`:
```ts
import { Component } from '@angular/core';
import { MxField, MxRadioField } from '@marxa/forms';

@Component({
  selector: 'my-component',
  template: `
    <mx-radio-field [field]="myRadioField"></mx-radio-field>
  `
})
export class MyComponent {
  myRadioField: MxField.RADIO = new MxRadioField('gender', 'Gender', [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ], 'male');
}
```


### Contributing
We welcome contributions to **MxRadioFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxRadioFieldComponent** is released under the MIT License.
