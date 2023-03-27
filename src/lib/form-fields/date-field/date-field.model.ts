import { ThemePalette } from '@angular/material/core';
import { MxField } from '../field.model';

/**
 * Class to set the configuration of the date field.
 *
 * @export
 * @class MxDateField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxDateField implements Omit<MxField, 'type'> {
  type = MxField.type.DATE;

  /**
   * Creates an instance of MxDateField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder=''] The placeholder text to display in the input field.
   * @param {string} [info=''] Additional information about the field.
   * @param {ThemePalette} [color='primary'] The color for accent the colors on the datepicker
   * @param {string} [toggleIcon] The icon to be displayed on the toggle button of the calendar.
   * @param {MxDateField.ActionButtons} [actionButtons] An object containing the custom labels and handlers for the action buttons.
   * @param {MxDateField.Limits} [limits] The date range limits to be set on the calendar.
   * @param {boolean} [workWeek=false] Whether to display only the work week (Monday-Friday) on the calendar.
   * @param {boolean} [inputDisable=true] Whether to disable the input field of the calendar.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [disable=false] Whether the field is disable or enable.
   * @param {MxField.validation[]} [additionalValidations=[]] An array of additional validation rules for the field.
   * @example
      <mx-date-field
        [field]="{
        id: 'date',
        label: 'Date',
        placeholder: 'Enter date',
        info: 'Select a date within the given range',
        required: true,
        visible: true,
        disable: false,
        color: 'primary',
        toggleIcon: 'calendar_today',
        actionButtons: { cancel: { label: 'Cancel', color: 'warn' }, accept: { label: 'Accept', color: 'primary' } },
        limits: { min: new Date('1900-01-01'), max: new Date(), message: 'Please select a date between 1900 and today.' },
        workWeek: false,
        inputDisable: true,
        additionalValidations: []
      </mx-date-field>
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder: string = '',
    public info: string = '',
    public color: ThemePalette = 'primary',
    public toggleIcon?: string,
    public actionButtons?: MxDateField.ActionButtons,
    public limits?: MxDateField.Limits,
    public workWeek: boolean = false,
    public inputDisable: boolean = true,
    public visible: boolean = true,
    public required: boolean = false,
    public disable: boolean = false,
    public additionalValidations: MxField.validation[] = []
  ) {}
}

export namespace MxDateField {
  /**
   * An interface representing action buttons for a date field.
   *
   * @interface
   * @name MxDateField.ActionButtons
   * @property {MxDateField.actionButton} cancel - The cancel button.
   * @property {MxDateField.actionButton} accept - The accept button.
   */
  export interface ActionButtons {
    cancel: actionButton;
    accept: actionButton;
  }
  /**
   * An interface representing an action button for a date field.
   *
   * @interface
   * @name MxDateField.actionButton
   * @property {string} label - The label for the button.
   * @property {ThemePalette} color - The color for the button.
   */
  export interface actionButton {
    label: string;
    color: ThemePalette;
  }
  /**
   * An interface representing limits for a date field.
   *
   * @interface
   * @name MxDateField.Limits
   * @property {Date} min - The minimum allowed date.
   * @property {Date} max - The maximum allowed date.
   * @property {string} message - The error message to display if the user selects a date outside the allowed range.
   */
  export interface Limits {
    min: Date;
    max: Date;
    message: string;
  }
}
