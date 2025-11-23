export interface LoginElements {
  emailField: string
  passwordField: string
  submitButton: string
  feedbackMessage: string
}

export const loginElements: LoginElements = {
  emailField: '[data-testid="login-email"]',
  passwordField: '[data-testid="login-password"]',
  submitButton: '[data-testid="login-submit"]',
  feedbackMessage: '.form-message',
}
