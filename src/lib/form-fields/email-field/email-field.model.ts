import { ValidationMessages } from '../../messages/validators.messages';
import { MxField } from '../field.model';

export class MxEmailField implements Omit<MxField, 'type'> {
  placeholder?: string = '';
  visible: boolean = true;
  required: boolean = false;
  info?: string = '';
  additionalValidations?: MxField.validation[] = [];
  type: MxField.type.EMAIL = MxField.type.EMAIL;
  emailValidationMsg?: string = ValidationMessages.EMAIL;
  constructor(
    public id: string,
    public label: string,
    placeholder?: string,
    visible: boolean = true,
    required: boolean = false,
    info?: string,
    additionalValidations?: MxField.validation[],
    emailValidationMsg?: string
  ) {
    this.placeholder = placeholder;
    this.visible = visible;
    this.required = required;
    this.info = info;
    this.additionalValidations = additionalValidations;
    this.emailValidationMsg = emailValidationMsg;
  }
}
