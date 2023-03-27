# MxCheckboxFieldComponent

The `MxCheckboxFieldComponent` is an Angular component that extends the `MxDefaultFieldComponent` and is used to render a checkbox field. 

## Usage

```html
<mx-checkbox-field [field]="{ id: 'myCheckbox', label: 'My Checkbox' }"></mx-checkbox-field>
```

In the above example, we're binding an object with `id` and `label` properties to the `field` input of the `MxCheckboxFieldComponent`. You can also pass additional properties to the `field` object to customize the behavior of the checkbox field.

Properties
The class has several properties that define the behavior and appearance of the checkbox input field, including:

`id`: a unique identifier for the field
`label`: the label text for the field
`value`: the value of the field
`info`: additional information about the field
`visible`: whether the field is visible or hidden
`required`: whether the field is required or optional
`disable`: whether the field is disabled or enabled
`additionalValidations`: an array of additional validation rules for the field

Here's an example of how to create an instance of `MxCheckboxField`:
```ts
const checkboxField = new MxCheckboxField(
  'checkbox', // id
  'Checkbox label', // label
  true, // defaultSelected
  'Checkbox placeholder', // placeholder
  'Checkbox additional information', // info
  true, // visible
  true, // required
  false, // disable
  [ // additionalValidations
    {type: 'required', message: 'This field is required'},
    {type: 'pattern', value: /^[A-Za-z]+$/, message: 'Only alphabetical characters allowed'}
  ]
);
```

In the above example, we're creating a new instance of MxCheckboxField and passing various parameters to customize its behavior. You can also omit some of the parameters to use their default values.

## Properties
`field: MxField.CHECKBOX` - A property that accepts a MxField.CHECKBOX object to define the properties of the checkbox field.

### Contributing
We welcome contributions to **MxCheckboxFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxCheckboxFieldComponent** is released under the MIT License.
