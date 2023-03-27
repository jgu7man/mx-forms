Suppose you want to create a custom set of validation messages for a form input field, and you want to use this custom set of messages throughout your Angular application. Here are the steps you can follow:

Define a custom object that implements the ValidationMessagesSlots interface, with your desired validation messages. For example:
  ```ts
  const customValidationMessages: ValidationMessagesSlots = {
    EMAIL: 'Please enter a valid email address',
    REQUIRED: 'This field cannot be left blank',
    PHONE: 'Please enter a valid phone number',
    CHAR_LIMIT: 'Please do not exceed the character limit'
  };
  ```

In your Angular module, provide this custom object as a value for the VALIDATION_MESSAGES_CONFIG_TOKEN token, using the useValue provider. For example:
  ```ts
  @NgModule({
    providers: [
      {
        provide: VALIDATION_MESSAGES_CONFIG_TOKEN,
        useValue: customValidationMessages
      }
    ]
  })
  export class MyModule { }
  ```

In your form input field, reference the VALIDATION_MESSAGES_CONFIG_TOKEN token to retrieve the corresponding set of validation messages. For example:
  ```html
  <input type="text" [formControl]="myFormControl" [validationMessages]="VALIDATION_MESSAGES_CONFIG_TOKEN" />
  ```

By following these steps, you can provide a custom set of validation messages for your form input field, and ensure that these messages are used consistently throughout your Angular application.
