## MxDefaultFieldComponent
`MxDefaultFieldComponent` is a base component for fields as input HTML elements in Angular applications. It provides a default implementation for the common functionality of input fields, such as managing the state of the field and emitting changes to parent components.

##" Inputs
`control`
Inherits a control form parent form component from.

`field`
Receives the field configuration as an instance of the MxField model.

`value`
Receives the value of the field.

### Outputs
`controlChange`
Outputs the form control changes as an EventEmitter<FormControl>.

`valueChange`
Outputs the value changes of the form control as an EventEmitter<any>.

### Two-way binding
`MxDefaultFieldComponent` provides a two-way binding for the `control` input through the `controlChange` output.

### Implementation
`MxDefaultFieldComponent` is implemented as an Angular component that extends the `OnInit` interface. The component has the following class properties:

`_field`
A behavior subject that emits the current MxField object.

`_value`
A behavior subject that emits the current value of the field.

`control`
A FormControl that inherits a control form parent form component.

`_fieldMessages`
An instance of the `ValidationMessagesSlots` model that provides validation messages for the field.

The component also defines the following class methods:

`emitResults()`
Emits changes in the FormControl and value properties to parent components.

`_prepareField()`
Prepares the field by combining the _field and _value BehaviorSubjects, updating the value of the control, and setting the field validators.

`_destroyed`
A Subject<void> that emits when the component is destroyed.

`_takeWhileLoad`
A function that returns true while the field and value are null or undefined.

`_setValidators()`
Sets the validators for the control based on the field configuration.

Usage
To use `MxDefaultFieldComponent`, import it in your Angular module and add it to the declarations and exports arrays. Then, use the component in your templates as follows:

```html
<mx-default-field
  [control]="myFormControl"
  [field]="myFieldConfig"
  [value]="myFieldValue"
  (controlChange)="myControlChangeHandler($event)"
  (valueChange)="myValueChangeHandler($event)"
></mx-default-field>
```

Where:

- `myFormControl` is a FormControl instance that inherits a control form parent form component.
- `myFieldConfig` is an instance of the MxField model that represents the configuration of the field.
- `myFieldValue` is the current value of the field.
- `myControlChangeHandler` is a method that handles changes to the control property.
- `myValueChangeHandler` is a method that handles changes to the value property.

### Contributing
We welcome contributions to **MxDefaultFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxDefaultFieldComponent** is released under the MIT License.
