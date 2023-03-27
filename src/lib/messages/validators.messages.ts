import { InjectionToken } from '@angular/core';

/**
 * Defines the interface for ValidationMessagesSlots, which represents the different types of validation messages that can be associated with a form input field. Each slot represents a specific type of validation message and is associated with a string value.
 * @property {string} EMAIL - The validation message for an invalid email input.
 * @property {string} REQUIRED - The validation message for a required input field.
 * @property {string} PHONE - The validation message for an invalid phone number input.
 * @property {string} CHAR_LIMIT - The validation message for a character limit input.
 *
 * @export
 * @interface ValidationMessagesSlots
 */
export interface ValidationMessagesSlots {
  /**
   * The validation message for an invalid email input.
   *
   * @type {string}
   */
  EMAIL: string;
  /**
   * The validation message for a required input field.
   *
   * @type {string}
   */
  REQUIRED: string;
  /**
   * The validation message for an invalid phone number input.
   *
   * @type {string}
   */
  PHONE: string;
  /**
   * The validation message for a character limit input.
   *
   * @type {string}
   */
  CHAR_LIMIT: string;
}

/**
 * Defines a constant object of ValidationMessages that implements the ValidationMessagesSlots interface.
 * It provides the specific validation messages for each type of input validation slot.
 * @constant
 * @type {ValidationMessagesSlots}
 * @property {string} EMAIL - The validation message for an invalid email input.
 * @property {string} REQUIRED - The validation message for a required input field.
 * @property {string} PHONE - The validation message for an invalid phone number input.
 * @property {string} CHAR_LIMIT - The validation message for a character limit input.
 * @default
 * {
 * EMAIL: 'Use a valid email address',
 * REQUIRED: 'This field is required',
 * PHONE: 'This no looks like a phone',
 * CHAR_LIMIT: 'You exceeded character limit.'
 * }
 */
export const ValidationMessages: ValidationMessagesSlots = {
  EMAIL: 'Use a valid email address',
  REQUIRED: 'This field is required',
  PHONE: 'This no looks like a phone',
  CHAR_LIMIT: 'You exceeded character limit.'
};

/**
 * Defines an InjectionToken for the ValidationMessagesSlots interface, to be used as a dependency injection token for providing custom validation messages to a form field.
 * @constant
 * @type {InjectionToken<ValidationMessagesSlots>}
 * @default
 * 'VALIDATION_MESSAGES_CONFIG_TOKEN::ValidationMessagesSlots'
 * An example of how to use `VALIDATION_MESSAGES_CONFIG_TOKEN` in an Angular module as a provider with a custom value.
 *
 * @example
 * import { NgModule } from '@angular/core';
 * import { VALIDATION_MESSAGES_CONFIG_TOKEN, ValidationMessagesSlots } from './validation-messages.interface';
 *
 * const customValidationMessages: ValidationMessagesSlots = {
 *   EMAIL: 'Please enter a valid email address',
 *   REQUIRED: 'This field cannot be left blank',
 *   PHONE: 'Please enter a valid phone number',
 *   CHAR_LIMIT: 'You have exceeded the maximum character limit'
 * };
 *
 * @NgModule({
 *   providers: [
 *     {
 *       provide: VALIDATION_MESSAGES_CONFIG_TOKEN,
 *       useValue: customValidationMessages
 *     }
 *   ]
 * })
 * export class MyModule { }
 */
export const VALIDATION_MESSAGES_CONFIG_TOKEN: InjectionToken<ValidationMessagesSlots> =
  new InjectionToken<ValidationMessagesSlots>(
    'VALIDATION_MESSAGES_CONFIG_TOKEN::ValidationMessagesSlots'
  );
