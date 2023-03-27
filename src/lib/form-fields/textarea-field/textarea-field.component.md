## MxTextareaFieldComponent
The `MxTextareaFieldComponent` is a component that displays a textarea field with additional validations.

### Usage
To use the `MxTextareaFieldComponent`, you can use the following syntax:
```html
<mx-textarea-field
  [field]="{
    id: 'description',
    label: 'Description',
    maxCharLimit: {
      limit: 500,
      message: 'Description cannot exceed 500 characters.'
    }
  }"
></mx-textarea-field>
```

The `field` property is an object that defines the configuration for the textarea input. The `maxCharLimit` property is an object that defines the maximum character limit for the field, and includes a `limit` property for the maximum number of characters allowed, and a `message` property for the error message to display if the limit is exceeded.

In addition, you can add any other property supported by `MxTextareaField` to customize the behavior of the component.

### MxTextareaField
The `MxTextareaField` is a class that defines the properties for a textarea field.

Properties
`id` (required): A unique identifier for the field.
`label` (required): The label text for the field.
`placeholder`: The placeholder text to display in the textarea.
`info`: Additional information about the field.
`size`: The size of the textarea field. It's an object with the following properties:
  `cols`: The number of visible columns.
  `rows`: The number of visible rows.
  `autosize`: Whether the textarea should automatically resize to fit its content.
`maxCharLimit`: The maximum character limit for the field. It's an object with the following properties:
  `limit`: The maximum number of characters allowed in the field.
  `message`: The error message to display if the maximum character limit is exceeded.
`required`: Whether the field is required or optional.
`visible`: Whether the field is visible or hidden.
`disable`: Whether the field is disabled or enabled.
`additionalValidations`: An array of additional validation rules for the field.

#### Usage
```ts
const myField = new MxTextareaField(
  'my-field-id',
  'My Field Label',
  'My Field Placeholder',
  'My Field Info',
  { rows: 4, cols: 10 },
  { limit: 100, message: 'Maximum character limit exceeded' },
  true,
  false,
  false,
  [{ validator: Validators.required, token: 'required', message: 'Field is required' }]
);
```

### Contributing
We welcome contributions to **MxTextareaFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxTextareaFieldComponent** is released under the MIT License.
