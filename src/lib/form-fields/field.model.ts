import { ValidatorFn } from '@angular/forms';
import { MxEmailField } from './email-field/email-field.model';
import { MxNumberField } from './number-field/number-field.model';
import {
  PasswordField,
  PasswordValidations
} from './password-field/password-field.model';
import { MxTextField } from './text-field/text-field.model';

/**
 * The MxField interface defines the properties of a field used in the application
 * @interface MxField
 * @property {string} type - The type of field.
 * @property {string} id - The unique identifier of the field.
 * @property {string} label - The label of the field.
 * @property {boolean} required - A flag indicating whether the field is required or not.
 * @property {boolean} visible - A flag indicating whether the field is visible or not.
 * @property {any[]} additionalValidations - An array of additional validations for the field.
 * @property {any} [key: string] - Additional properties can be added dynamically using a string key.
 */
export interface MxField {
  id: string;
  label: string;
  placeholder?: string;
  visible: boolean;
  required: boolean;
  type: MxField.type;
  info?: string;
  additionalValidations?: MxField.validation[];
}

export namespace MxField {
  export enum type {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'phone',
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
  export type PASSWORD = PasswordField;

  export interface option {
    value: any;
    index: number;
  }

  export type reference = Pick<MxField, 'id' | 'label' | 'visible'>;

  export type forAll = MxField | TEXT | NUMBER | EMAIL;

  export interface validation {
    validator: ValidatorFn;
    token: string;
    message: string;
  }

  export namespace validations {
    export type PASSWORD = PasswordValidations;
  }
}
