## MxLevelFieldComponent
This is a custom level field component for Angular applications.

Usage

### Input Parameters
field: Sets the configuration of the level field. It accepts an object of type MxField.LEVEL. This object has the following properties:

`id`: Unique identifier of the field.

`label`: The label of the field.

`placeholder`: Placeholder text for the field.

`info`: Informational text to be displayed below the field.

`required`: Whether the field is required or not.

`visible`: Whether the field is visible or not.

`disable`: Whether the field is disabled or not.

`minLevel`: An object that represents the minimum level value that the field can have. It has the following properties:

  `label`: The label of the minimum level.
  `amount`: The amount of the minimum level.
`maxLevel`: An object that represents the maximum level value that the field can have. It has the following properties:

  `label`: The label of the maximum level.
  `amount`: The amount of the maximum level.
  `intervals`: The number of intervals between the minimum and maximum levels. It is of type number.

`thumb`: Whether to display a thumb on the slider or not. It is of type boolean.

`vertical`: Whether the slider is vertical or not. It is of type boolean.

`additionalValidations`: An array of additional validations to be performed on the field. Each validation object has the following properties:

  `name`: Unique name of the validation.
  `message`: Error message to be displayed if the validation fails.
  `validator`: Validator function to be applied. It should be a function that takes a control and returns either null if the validation passes,


  ```ts
import { Component } from '@angular/core';
import { MxEmailField } from 'my-library';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <mx-level-field [field]="levelField"></mx-level-field>
    </form>
  `
})
export class AppComponent {
  levelField: MxLevelField = new MxLevelField(
    'level', // id
    'Level', // label
    'Select level', // placeholder
    'Choose a level between 1 and 100', // info
    { // minLevel
      label: 'Beginner',
      amount: 1,
    },
    { // maxLevel
      label: 'Expert',
      amount: 100
    },
    0, // intervals
    true, // thumb
    false, // vertical
    true, // required
    true, // visible
    false, // disable
    [ // additionalValidations
      { token: 'min', message: 'Level must be greater than or equal to 1', validator: Validators.min(1) },
      { token: 'max', message: 'Level must be less than or equal to 100', validator: Validators.max(100) }
    ]
  )
```

### Contributing
We welcome contributions to **MxLevelFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxLevelFieldComponent** is released under the MIT License.
