import { MxField } from '../field.model';

export class MxNumberField implements Omit<MxField, 'type'> {
  placeholder?: string = '';
  visible: boolean = true;
  required: boolean = false;
  info?: string = '';
  additionalValidations?: MxField.validation[] = [];
  type: MxField.type.NUMBER = MxField.type.NUMBER;
  constructor(
    public id: string,
    public label: string,
    placeholder?: string,
    visible: boolean = true,
    required: boolean = false,
    info?: string,
    additionalValidations?: MxField.validation[]
  ) {
    this.placeholder = placeholder;
    this.visible = visible;
    this.required = required;
    this.info = info;
    this.additionalValidations = additionalValidations;
  }
}
