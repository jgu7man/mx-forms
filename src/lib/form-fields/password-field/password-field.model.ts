import { MxField } from '../field.model';
import {
  PasswordValidations,
  PasswordValidationsModel
} from './password-validation.model';

export class MxPasswordField implements Omit<MxField, 'type'> {
  placeholder?: string;
  visible: boolean;
  required: boolean;
  info?: string;
  additionalValidations?: MxField.validation[];
  type: MxField.type.PASSWORD = MxField.type.PASSWORD;
  validations?: PasswordValidations;
  readonly hideToggle?: boolean;
  constructor(
    public id: string,
    public label: string,
    required: boolean = false,
    placeholder: string = '',
    info: string = '',
    visible: boolean = true,
    hideToggle: boolean = true,
    validations = new PasswordValidationsModel(),
    additionalValidations: MxField.validation[] = []
  ) {
    this.placeholder = placeholder;
    this.visible = visible;
    this.required = required;
    this.info = info;
    this.additionalValidations = additionalValidations;
    this.validations = validations;
    this.hideToggle = hideToggle;
  }
}
