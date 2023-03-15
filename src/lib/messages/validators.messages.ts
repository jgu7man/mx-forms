import { MxPasswordField } from '../form-fields/password-field/password-validation.model';

export const ValidationMessages = {
  EMAIL: 'Use a valid email address',
  REQUIRED: 'This field is required'
};

export const PasswordValidationsMessages = {
  MIN_LENGTH: MxPasswordField.MESSAGES.MIN_LENGTH,
  MAX_LENGTH: MxPasswordField.MESSAGES.MAX_LENGTH,
  CHARACTER_CASE: MxPasswordField.MESSAGES.CHARACTER_CASE,
  NUMBER_REQUIRED: MxPasswordField.MESSAGES.NUMBER_REQUIRED,
  SPECIAL_CHARACTERS_REQUIRED:
    MxPasswordField.MESSAGES.SPECIAL_CHARACTERS_REQUIRED
};
