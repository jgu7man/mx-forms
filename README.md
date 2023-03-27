# @marxa/mx-forms

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

The **@marxa/mx-forms** library provides a set of customizable form fields that can be used as Angular child components within a form. The available fields are `text`, `number`, `phone`, `password`, `textarea`, `checkbox`, `switch`, `select`, `date`, `level`, and `radio`. Each field has its own set of configurable properties, which can be used to customize its behavior and appearance.

## Installation
Run `npm install -s @marxa/forms` to install the package in your project.
To use the Forms, you'll first need to import it into your module:
```ts
import { MxEmailFieldComponent } from '@my-company/my-ui-library';

@NgModule({
  imports: [
    MxFormsModule,
    // other components...
  ],
  // other module properties...
})
export class MyModule {}
```

## Usage
Once you've imported the `MxFormsModule`, you can use it in your templates. Example:
```html
<mx-email-field [field]="emailField"></mx-email-field>
```

In this example, the `EmailField` variable is an object that contains the configuration for the email field:
```ts
const emailField: MxField.EMAIL = {
  id: 'email',
  label: 'Email',
  required: true,
  visible: true,
};
```

You can then use the available fields in your templates:
```html
<mx-text-field
  [(control)]="myForm.get('username')"
></mx-text-field>
```

The `control` input is a control of a `FormGroup` instance in your reactive forms, and the `controlChange` output works as a two-way binding.

## Available fields
The library provides the following fields:

`mx-text-field`
`mx-number-field`
`mx-phone-field`
`mx-password-field`
`mx-textarea-field`
`mx-checkbox-field`
`mx-switch-field`
`mx-select-field`
`mx-date-field`
`mx-level-field`
`mx-radio-field`

Each field has its own properties, please refer to the API documentation for details.

## MxDefaultFieldComponent
The `MxDefaultFieldComponent` is a base component for creating fields as HTML input elements. It receives a configuration object of type `MxField` which contains properties like the `id`, `label`, `required`, `visible`, `disable`, and `additionalValidations`. 
Additionally, it receives a `control` input of type `FormControl` which allows the component to be used in reactive forms of Angular. The `MxDefaultFieldComponent` emits two-way bindings for changes in the form control and the value of the field.

### Properties
- `field: MxField.forAll` (input) - Receives the field configuration object.
- `value: any` (input) - Receives the value of the field.
- `control: FormControl` (input) - Inherits a control form parent form component.
- `controlChange: EventEmitter<FormControl>` (output) - Emits changes in the FormControl to parent components.
- `valueChange: EventEmitter<any>` (output) - Emits changes in the value of the field to parent components.

### Methods
`emitResults(): void` - Emits changes in the FormControl and value properties to parent components.

### Usage example
```ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MxField } from './field.model';

@Component({
  selector: 'my-component',
  template: `
    <form [formGroup]="myForm">
      <mx-default-field
        [field]="myFieldConfig"
        [value]="myFieldValue"
        [control]="myFormControl"
        (controlChange)="onControlChange($event)"
        (valueChange)="onValueChange($event)"
      ></mx-default-field>
    </form>
  `
})
export class MyComponent {
  myForm = new FormGroup({
    myFormControl: new FormControl('')
  });

  myFieldConfig: MxField = {
    type: MxField.type.TEXT,
    id: 'myFieldId',
    label: 'My Field Label',
    required: true,
    visible: true,
    disable: false
  };

  myFieldValue = '';

  get myFormControl() {
    return this.myForm.get('myFormControl');
  }

  onControlChange(control: FormControl) {
    console.log('control changed:', control);
  }

  onValueChange(value: any) {
    console.log('value changed:', value);
  }
}
```


## Configuration

### Validation Messages
The **ValidationMessages** object defines the default validation messages used in the forms library. The `ValidationMessagesSlots` interface defines the properties of the object.

```ts
export const ValidationMessages: ValidationMessagesSlots = {
  EMAIL: 'Use a valid email address',
  REQUIRED: 'This field is required',
  PHONE: 'This no looks like a phone',
  CHAR_LIMIT: 'You exceeded character limit.'
};

```

### Custom Validation Messages
To use custom validation messages, you can provide a new object using the `VALIDATION_MESSAGES_CONFIG_TOKEN` injection token.

```ts
import { VALIDATION_MESSAGES_CONFIG_TOKEN } from 'forms';

@NgModule({
  providers: [
    {
      provide: VALIDATION_MESSAGES_CONFIG_TOKEN,
      useValue: {
        EMAIL: 'Please enter a valid email address',
        REQUIRED: 'This field is required',
        PHONE: 'Please enter a valid phone number',
        CHAR_LIMIT: 'You have exceeded the character limit'
      }
    }
  ]
})
export class MyModule { }
```

### `PasswordValidationsMessagesSlots`
This configuration is used specifically for password validation messages. You can customize the messages by providing your own values for the `PasswordValidationsMessagesSlots` interface.

To use this configuration, you need to follow these steps:

1. Import the PasswordValidationsMessagesSlots interface and PASSWORD_VALIDATION_MESSAGES_CONFIG token from the @my-company/forms library.
    ```ts
    import { PasswordValidationsMessagesSlots, PASSWORD_VALIDATION_MESSAGES_CONFIG } from '@my-company/forms';
    ```

2. Provide a custom value for the PASSWORD_VALIDATION_MESSAGES_CONFIG token in your module's providers config.
    ```ts
    @NgModule({
      providers: [
        {
          provide: PASSWORD_VALIDATION_MESSAGES_CONFIG,
          useValue: {
            MIN_LENGTH: 'Password must be at least 8 characters long',
            MAX_LENGTH: 'Password must not exceed 64 characters',
            CHARACTER_CASE: 'Password must contain both uppercase and lowercase letters',
            NUMBER_REQUIRED: 'Password must contain at least one number',
            SPECIAL_CHARACTERS_REQUIRED: 'Password must contain at least one special character'
          }
        }
      ]
    })
    export class MyModule { }
    ```


### Contributing
We welcome contributions to **@marxa/mx-forms**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**@marxa/mx-forms** is released under the MIT License.
