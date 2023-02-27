import { AbstractControl, ValidatorFn } from "@angular/forms";

export interface MxField {
  id: string,
  label: string,
  type: MxField.type,
  placeholder?: string,
  visible: boolean
  required: boolean
  info?: string,
  index?: number,
  control?: AbstractControl,
  additionalValidations?: MxField.validations[]
}


export declare namespace MxField {
  export interface validations {
    validator: ValidatorFn,
    token: string,
    message: string,
  }

  interface option {
    value: any;
    index: number;
  }

  type reference = Pick< MxField,
    'id' |
    'label' |
    'index' |
    'visible'
  >

  enum type {
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
    FILE = 'file',
  }
}



