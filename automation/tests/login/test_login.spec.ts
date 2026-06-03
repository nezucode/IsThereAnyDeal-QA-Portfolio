import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { credentials } from '../../test-data/credentials';

test.describe('Authentication - Login', () => {

  test('Verify login with a valid email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.validUser.email, credentials.validUser.password);
    await expect(page).toHaveURL(/.*isthereanydeal.com/); 
  });

  test('Verify login with empty email and password fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    const emailInput = page.getByPlaceholder('email@example.com');

    const isInvalid = await emailInput.evaluate(
    (el: HTMLInputElement) => !el.validity.valid
    );
  
    expect(isInvalid).toBe(true);
});

  test('Verify login with an empty email and a valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', credentials.validUser.password);
    const emailInput = page.getByPlaceholder('email@example.com');
    const isInvalid = await emailInput.evaluate(
    (el: HTMLInputElement) => !el.validity.valid
    );
  
    expect(isInvalid).toBe(true);
  });

  test('Verify login with a valid email and an empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.validUser.email, '');
    const passwordInput = page.getByPlaceholder('Your password');
    const isInvalid = await passwordInput.evaluate(
    (el: HTMLInputElement) => !el.validity.valid
    );
  
    expect(isInvalid).toBe(true); 
  });

  test('Verify login with a valid email and an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.validUser.email, credentials.invalidPassword.password);
    await page.waitForSelector('div.error.message li, h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const errorMsg = page.getByText('The email and password combination is incorrect');
    const captchaVisible = await captcha.isVisible();
    const errorVisible = await errorMsg.isVisible();

    expect(captchaVisible || errorVisible).toBeTruthy();
  });


  test('Verify login with an unregistered account', async ({ page }) => {
    test.setTimeout(60000);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.unregisteredUser.email, credentials.unregisteredUser.password);
    await page.waitForSelector('div.error.message li, h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const errorMsg = page.getByText('The email and password combination is incorrect');
    const captchaVisible = await captcha.isVisible();
    const errorVisible = await errorMsg.isVisible();

    expect(captchaVisible || errorVisible).toBeTruthy();
  });

  test('Verify login with an unverified email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.unverifiedUser.email, credentials.unverifiedUser.password);
    await page.waitForSelector('h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const captchaVisible = await captcha.isVisible();
    expect(captchaVisible).toBeTruthy();
    await expect(page).toHaveURL(/.*isthereanydeal.com/); 
  });
  
}); 