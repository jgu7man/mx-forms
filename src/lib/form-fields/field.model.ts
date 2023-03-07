import { ValidatorFn } from '@angular/forms';
import { PasswordField, PasswordValidations } from './password-field/password-field.model';

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
  // control?: AbstractControl,
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

  export interface TEXT extends Omit<MxField, 'type'> {
    type: type.TEXT;
  }
  export interface NUMBER extends Omit<MxField, 'type'> {
    type: type.NUMBER;
  }
  export interface EMAIL extends Omit<MxField, 'type'> {
    emailValidationMsg?: string;
    type: type.EMAIL;
  }
  export type PASSWORD = PasswordField;

  export interface option {
    value: any;
    index: number;
  }

  export type reference = Pick<MxField, 'id' | 'label' | 'visible'>;

  export type Generic = Omit<MxField, 'type'>;

  export interface validation {
    validator: ValidatorFn;
    token: string;
    message: string;
  }

  export namespace validations {
    export type PASSWORD = PasswordValidations;
  }
}
