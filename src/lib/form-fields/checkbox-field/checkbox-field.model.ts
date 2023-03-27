import { MxField } from '../field.model';

export class MxCheckboxField implements Omit<MxField, 'type'> {
  /**
   * Creates an instance of MxCheckboxField.
   *
   * @param {string} id - The unique identifier for the field.
   * @param {string} label - The label text for the field.
   * @param {boolean} [defaultSelected=false] - Value from the options to define default value selected.
   * @param {string} [placeholder=''] - The placeholder text to display in the textarea.
   * @param {string} [info=''] - Additional information about the field.
   * @param {boolean} [visible=true] - Whether the field is visible or hidden.
   * @param {boolean} [required=false] - Whether the field is required or optional.
   * @param {boolean} [disable=false] - Whether the field is disable or enable.
   * @param {MxField.validation[]} [additionalValidations=[]] - An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public defaultSelected: boolean = false,
    public placeholder: string = '',
    public info: string = '',
    public visible: boolean = true,
    public required: boolean = false,
    public disable: boolean = false,
    public additionalValidations: MxField.validation[] = []
  ) {}
}
