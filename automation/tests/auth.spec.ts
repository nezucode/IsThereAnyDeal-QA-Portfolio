import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials, expectedMessages } from '../test-data/credentials';

test.describe('Authentication - Login', () => {

  test('TC01 - Login dengan valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(credentials.validUser.email, credentials.validUser.password);
    await expect(page).toHaveURL(/.*isthereanydeal.com/); 
  });

//   test('TC02 - Login dengan invalid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login(credentials.invalidUser.email, credentials.invalidUser.password);
//     await expect(loginPage.errorMessage).toBeVisible();
//   });

  // ... (lanjutkan 3 test case lainnya)

});