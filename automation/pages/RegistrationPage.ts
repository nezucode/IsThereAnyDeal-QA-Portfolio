import { Page, Locator } from '@playwright/test';
export class RegistrationPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly repeatPasswordInput: Locator;  
  readonly createanaccountButton: Locator;  
  readonly createButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('email@example.com');
    this.passwordInput = page.getByRole('textbox', { name: 'Your password', exact: true })
    this.repeatPasswordInput = page.getByRole('textbox', { name: 'Your password again', exact: true });
    this.createanaccountButton = page.getByRole('button', { name: 'Create an account' });
    this.createButton = page.getByRole('button', { name: 'Create Account' });
  }

  async goto() {
    await this.page.goto('https://isthereanydeal.com/');
    await this.page.getByRole('button', { name: 'User' }).click();
    await this.page.getByRole('link', { name: 'Sign in / join' }).click();
    await this.page.getByRole('button', { name: 'Create an account' }).click();
  }

  async register(email: string, password: string, repeatpassword: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.repeatPasswordInput.fill(repeatpassword);
    await this.createButton.click();
  }
} 