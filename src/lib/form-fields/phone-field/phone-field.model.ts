import { ValidationMessages } from '../../messages/validators.messages';
import { MxField } from '../field.model';

export class MxPhoneField implements Omit<MxField, 'type'> {
  placeholder?: string = '';
  visible: boolean = true;
  required: boolean = false;
  info?: string = '';
  additionalValidations?: MxField.validation[] = [];
  type: MxField.type.PHONE = MxField.type.PHONE;
  patternValidation: MxPhoneField.PatternValidation = {
    pattern: MxPhoneField.PATTERN,
    message: ValidationMessages.PHONE
  };
  phonePatternValidationMsg?: string = ValidationMessages.PHONE;
  pattern: string = MxPhoneField.PATTERN;
  constructor(
    public id: string,
    public label: string,
    placeholder?: string,
    visible: boolean = true,
    required: boolean = false,
    info?: string,
    patternValidation?: MxPhoneField.PatternValidation,
    additionalValidations?: MxField.validation[]
  ) {
    this.placeholder = placeholder;
    this.visible = visible;
    this.required = required;
    this.info = info;
    this.additionalValidations = additionalValidations;
    this.patternValidation = patternValidation ?? this.patternValidation;
  }
}

export namespace MxPhoneField {
  export const PATTERN = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  export interface PatternValidation {
    pattern: string;
    message: string;
  }
}
