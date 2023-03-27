## MxSelectFieldComponent
`MxSelectFieldComponent` is an Angular component that displays and edits selection fields.

### Usage
To use the `MxSelectFieldComponent`, you need to provide a configuration object of type `MxField.SELECT` that defines the properties of the field. The following example shows how to create a select field that allows selecting between two animals:

```ts
const selectField: MxField.SELECT = {
  id: 'animal',
  label: 'Animal',
  options: [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
  ]
  required: true,
  visible: true,
};
```

After creating the configuration object, you can pass it to the `MxSelectFieldComponent` using the field input property:

```html
<mx-select-field [field]="selectField"></mx-select-field>
```

### Properties
The `MxSelectFieldComponent` has the following input properties:

`field`: the configuration object of type `MxField.SELECT` that defines the properties of the field.

The `MxSelectField` class has the following properties:

`id`: a unique identifier for the field.
`label`: the label text for the field.
`options`: an array of options for the field. The options can be a simple array of values or a nested array of option groups.
`placeholder`: the placeholder text to display in the field.
`info`: additional information about the field.
`multiple`: a boolean value indicating whether the field can accept multiple selections.
`reset`Label: the label to display for the reset button.
`visible`: a boolean value indicating whether the field is visible or hidden.
`required`: a boolean value indicating whether the field is required or optional.
`disable`: a boolean value indicating whether the field is disabled or enabled.
`additionalValidations`: an array of additional validation rules for the field.

### Examples
The following examples show how to use the `MxSelectFieldComponent` with different configurations:
```ts
const simpleSelectField: MxField.SELECT = {
  id: 'fruits',
  label: 'Fruits',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' }
  ],
  required: true,
  visible: true,
};

const groupSelectField: MxField.SELECT = {
  id: 'cars',
  label: 'Cars',
  options: [
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
  required: true,
  visible: true,
};
```

```html
<mx-select-field [field]="simpleSelectField"></mx-select-field>
<mx-select-field [field]="groupSelectField"></mx-select-field>
```

### Contributing
We welcome contributions to **MxSelectFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxSelectFieldComponent** is released under the MIT License.
