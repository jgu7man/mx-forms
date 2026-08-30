# @marxa/mx-forms (Dynamic Reactive Form Engine for Angular)

[![Angular](https://img.shields.io/badge/Angular-v11%2B%20%7C%20Reactive%20Forms-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

The **`@marxa/mx-forms`** library provides a comprehensive set of customizable, schema-driven form field components designed to integrate natively with Angular Reactive Forms (`FormGroup` / `FormControl`).

---

## 📦 Available Fields

The library provides the following field components:

- `mx-text-field` — Text input with validation
- `mx-number-field` — Formatted numeric input
- `mx-phone-field` — Phone number formatting
- `mx-password-field` — Password field with policy enforcement
- `mx-textarea-field` — Multi-line text area
- `mx-checkbox-field` — Boolean checkbox
- `mx-switch-field` — Toggle switch
- `mx-select-field` — Dropdown select
- `mx-date-field` — Date picker
- `mx-level-field` — Stepper / level selector
- `mx-radio-field` — Radio button group

---

## 🚀 Installation & Setup

1. Install the package:
   ```bash
   npm install @marxa/forms
   ```

2. Import `MxFormsModule` into your Angular module or component imports:
   ```typescript
   import { NgModule } from '@angular/core';
   import { MxFormsModule } from '@marxa/forms';

   @NgModule({
     imports: [
       MxFormsModule
     ]
   })
   export class AppModule {}
   ```

---

## 💻 Usage Example

### 1. Template Binding
```html
<form [formGroup]="myForm">
  <mx-text-field
    [field]="usernameField"
    [control]="myForm.get('username')"
    (controlChange)="onControlChange($event)"
  ></mx-text-field>

  <mx-email-field
    [field]="emailField"
    [control]="myForm.get('email')"
  ></mx-email-field>
</form>
```

### 2. Component Configuration
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MxField } from '@marxa/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  usernameField: MxField = {
    type: MxField.type.TEXT,
    id: 'username',
    label: 'Username',
    required: true,
    visible: true,
    disable: false
  };

  emailField: MxField = {
    type: MxField.type.EMAIL,
    id: 'email',
    label: 'Corporate Email',
    required: true,
    visible: true
  };

  onControlChange(control: FormControl) {
    console.log('Control updated:', control.value);
  }
}
```

---

## 🔧 Component API: `MxDefaultFieldComponent`

`MxDefaultFieldComponent` is the base class for form field rendering, receiving configuration metadata and two-way control bindings.

### Inputs & Outputs
| Property | Type | Direction | Description |
| :--- | :--- | :---: | :--- |
| `field` | `MxField.forAll` | `@Input()` | Field configuration object (`id`, `label`, `required`, `visible`, `disable`, `additionalValidations`) |
| `value` | `any` | `@Input()` | Current value of the field |
| `control` | `FormControl` | `@Input()` | Form control instance inherited from parent `FormGroup` |
| `controlChange` | `EventEmitter<FormControl>` | `@Output()` | Emits when control state changes |
| `valueChange` | `EventEmitter<any>` | `@Output()` | Emits when field value changes |

### Methods
- `emitResults(): void` — Broadcasts changes in `FormControl` and `value` properties to parent components.

---

## ⚙️ Configuration & Customization

### Default Validation Messages
The library includes standard validation strings defined in `ValidationMessages`:

```typescript
export const ValidationMessages: ValidationMessagesSlots = {
  EMAIL: 'Use a valid email address',
  REQUIRED: 'This field is required',
  PHONE: 'This does not look like a valid phone number',
  CHAR_LIMIT: 'Character limit exceeded'
};
```

### Custom Validation Messages Provider
Override global validation messages using the `VALIDATION_MESSAGES_CONFIG_TOKEN` injection token:

```typescript
import { NgModule } from '@angular/core';
import { VALIDATION_MESSAGES_CONFIG_TOKEN } from '@marxa/forms';

@NgModule({
  providers: [
    {
      provide: VALIDATION_MESSAGES_CONFIG_TOKEN,
      useValue: {
        EMAIL: 'Please enter a valid corporate email address',
        REQUIRED: 'This field is required for submission',
        PHONE: 'Please enter a valid 10-digit phone number',
        CHAR_LIMIT: 'Maximum character limit exceeded'
      }
    }
  ]
})
export class AppModule {}
```

### Password Policy Validation Configuration
Customize password complexity messages via `PASSWORD_VALIDATION_MESSAGES_CONFIG`:

```typescript
import { NgModule } from '@angular/core';
import { PASSWORD_VALIDATION_MESSAGES_CONFIG } from '@marxa/forms';

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
export class AppModule {}
```

---

## 📄 License

Distributed under the [MIT License](LICENSE). Created by [Jorge Guzmán (@jgu7man)](https://github.com/jgu7man).
