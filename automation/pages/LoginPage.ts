import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  //readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('email@example.com');
    this.passwordInput = page.getByPlaceholder('Your password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    //this.errorMessage = page.locator('text=The email and password combination is incorrect');
  }

  async goto() {
    await this.page.goto('https://isthereanydeal.com/');
    await this.page.getByRole('button', { name: 'User' }).click();
    await this.page.getByRole('link', { name: 'Sign in / join' }).click();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}