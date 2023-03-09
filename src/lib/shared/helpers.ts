import { MxField } from '../form-fields/field.model';

export function setValue(field: MxField, value: any) {
  if (typeof value === 'object') {
    if (field) return value[field.id] || '';
    return value || '';
  }
  return '';
}

export const DefaultValueByType: DefaultValue = {
  [MxField.type.TEXT]: '',
  [MxField.type.EMAIL]: '',
  [MxField.type.PASSWORD]: '',
  [MxField.type.PHONE]: '',
  [MxField.type.NUMBER]: 0,
  [MxField.type.TEXTAREA]: '',
  [MxField.type.SELECT]: [],
  [MxField.type.RADIUS]: [],
  [MxField.type.MULTIPLE]: [],
  [MxField.type.CHECKBOX]: false,
  [MxField.type.SWITCH]: false,
  [MxField.type.RANGE]: [0, 0],
  [MxField.type.LEVEL]: 0,
  [MxField.type.DATE]: new Date(),
  [MxField.type.TIME]: new Date(),
  [MxField.type.FILE]: null
};

export type DefaultValue = {
  [key in MxField.type]: any;
};
