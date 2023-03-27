import { InjectionToken } from '@angular/core';

/**
 * Represents the validation messages that can be used for password validations.
 *
 * @interface
 * @public
 */
export interface PasswordValidationsMessagesSlots {
  /**
   * Message for minimum length validation
   *
   * @property
   */
  MIN_LENGTH: string;

  /**
   * Message for maximum length validation
   *
   * @property
   */
  MAX_LENGTH: string;

  /**
   * Message for character case validation
   *
   * @property
   */
  CHARACTER_CASE: string;

  /**
   * Message for number requirement validation
   *
   * @property
   */
  NUMBER_REQUIRED: string;

  /**
   * Message for special character requirement validation
   *
   * @property
   */
  SPECIAL_CHARACTERS_REQUIRED: string;
}

/**
 * Represents the default password validation messages that can be used in the application.
 *
 * @constant
 * @public
 */
export const PasswordValidationsMessages: PasswordValidationsMessagesSlots = {
  MIN_LENGTH: 'Password must be at least 8 characters long',
  MAX_LENGTH: 'Password must not exceed 64 characters',
  CHARACTER_CASE: 'Password must contain both uppercase and lowercase letters',
  NUMBER_REQUIRED: 'Password must contain at least one number',
  SPECIAL_CHARACTERS_REQUIRED:
    'Password must contain at least one special character'
};

/**
 * Represents the injection token that can be used to provide custom password validation messages.
 *
 * This token can be used to override the default password validation messages with custom messages.
 * To use custom messages, provide a value for this token in the application's root module or in a component
 * that uses the `PasswordValidator` service.
 *
 * Example usage:
 *
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { PASSWORD_VALIDATION_MESSAGES_CONFIG, PasswordValidationsMessages } from './password-validations';
 *
 * const customMessages: PasswordValidationsMessagesSlots = {
 *   ...PasswordValidationsMessages,
 *   MIN_LENGTH: 'Your password must be longer than 10 characters',
 *   SPECIAL_CHARACTERS_REQUIRED: 'Your password must contain at least one of these special characters: !@#$%^&*()_+'
 * };
 *
 * @NgModule({
 *   providers: [
 *     {
 *       provide: PASSWORD_VALIDATION_MESSAGES_CONFIG,
 *       useValue: customMessages
 *     }
 *   ]
 * })
 * export class MyModule { }
 * ```
 *
 * @constant
 * @public
 */
export const PASSWORD_VALIDATION_MESSAGES_CONFIG: InjectionToken<PasswordValidationsMessagesSlots> =
  new InjectionToken<PasswordValidationsMessagesSlots>(
    'PASSWORD_VALIDATION_MESSAGES_CONFIG::PasswordValidationsMessagesSlots'
  );
