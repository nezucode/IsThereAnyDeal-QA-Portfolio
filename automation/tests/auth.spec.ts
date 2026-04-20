import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials, expectedMessages } from '../test-data/credentials';

test.describe('Authentication - Login', () => {

  test('TC01 - Verify registration with a valid email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.validUser.email, credentials.validUser.password);
    await expect(page).toHaveURL(/.*isthereanydeal.com/); 
  });

  test('TC02 - Verify login with empty email and password fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(expectedMessages.emptyField);
  });

//   test('TC02 - Login dengan invalid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login(credentials.invalidUser.email, credentials.invalidUser.password);
//     await expect(loginPage.errorMessage).toBeVisible();
//   });

  // ... (lanjutkan 3 test case lainnya)

});