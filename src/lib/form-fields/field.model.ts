import { AbstractControl, ValidatorFn } from "@angular/forms";

export interface MxFieldModel {
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


export namespace MxField {
  export interface validations {
    validator: ValidatorFn,
    token: string,
    message: string,
  }

  export interface option {
    value: any;
    index: number;
  }

  export type reference = Pick< MxFieldModel,
    'id' |
    'label' |
    'index' |
    'visible'
  >

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
    FILE = 'file',
  }
}



