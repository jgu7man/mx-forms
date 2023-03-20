import { MxField } from '../field.model';

/**
 * Class to set configuration to Number Field
 *
 * @export
 * @class MxNumberField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxNumberField implements Omit<MxField, 'type'> {
  type: MxField.type.NUMBER = MxField.type.NUMBER;
  /**
   * Creates an instance of MxNumberField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] Additional information about the field.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [disable=false] Whether the field is disable or enable
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {MxField.validation[]} [additionalValidations] An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder?: string,
    public info?: string,
    public required: boolean = false,
    public visible: boolean = true,
    public additionalValidations?: MxField.validation[]
  ) {}
}
