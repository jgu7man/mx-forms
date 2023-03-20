import { ValidatorFn } from '@angular/forms';
import { MxEmailField } from './email-field/email-field.model';
import { MxNumberField } from './number-field/number-field.model';
import { MxPasswordField } from './password-field/password-field.model';
import { PasswordValidations } from './password-field/password-validation.model';
import { MxPhoneField } from './phone-field/phone-field.model';
import { MxTextField } from './text-field/text-field.model';
import { MxTextareaField } from './textarea-field/textarea-field.model';

/**
 * The MxField interface defines the properties of a field used in the application
 * @interface MxField
 * @property {string} id - The unique identifier of the field.
 * @property {string} label - The label of the field.
 * @property {string} type - The type of field.
 * @property {string} placeholder - Defines the placeholder
 * @property {string} info -  Explains the information about the field
 * @property {boolean} required - A flag indicating whether the field is required or not.
 * @property {boolean} visible - A flag indicating whether the field is visible or not.
 * @property {any[]} additionalValidations - An array of additional validations for the field.
 */
export interface MxField {
  id: string;
  label: string;
  type: MxField.type;
  placeholder?: string;
  info?: string;
  required: boolean;
  type: MxField.type;
  visible: boolean;
  additionalValidations?: MxField.validation[];
}

export namespace MxField {
  export enum type {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'tel',
    NUMBER = 'number',
    TEXTAREA = 'textarea',
    SELECT = 'select',
    RADIUS = 'radius',
    MULTIPLE = 'multiple',
    CHECKBOX = 'checkbox',
    SWITCH = 'switch',
    RANGE = 'range',
    LEVEL = 'level',
    DATE = 'date',
    TIME = 'time',
    FILE = 'file'
  }

  export type TEXT = MxTextField;
  export type NUMBER = MxNumberField;
  export type EMAIL = MxEmailField;
  export type PASSWORD = MxPasswordField;
  export type PHONE = MxPhoneField;
  export type TEXTAREA = MxTextareaField;

  export interface option {
    value: any;
    index: number;
  }

  export type reference = Pick<MxField, 'id' | 'label' | 'visible'>;

  export type forAll = MxField | TEXT | NUMBER | EMAIL | PASSWORD | TEXTAREA;

  export interface validation {
    validator: ValidatorFn;
    token: string;
    message: string;
  }

  export namespace validationTypes {
    export type PASSWORD = PasswordValidations;
  }
}
