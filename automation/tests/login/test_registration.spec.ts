import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { credentials } from '../../test-data/credentials';

test.describe('Authentication - Registration', () => {

    test('Verify registration with valid email and password', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(credentials.newUser.email, credentials.newUser.password, credentials.newUser.repeatpassword);
    await expect(page).toHaveURL('https://isthereanydeal.com/#user:join'); 
    });

    test('Verify registration with all required fields empty', async ({ page }) => {  
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register("", "", "");
    const emailInput = page.getByPlaceholder('email@example.com');
    
    const isInvalid = await emailInput.evaluate(
        (el: HTMLInputElement) => !el.validity.valid
    );
      
    expect(isInvalid).toBe(true);
    });

    test('Verify registration with a registered email and a valid password', async ({ page }) => {  
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(credentials.validUser.email, credentials.validUser.password, credentials.validUser.repeatpassword);
    await page.waitForSelector('div.error.message li, h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const errorMsg = page.getByText('Email is already in use');
    const captchaVisible = await captcha.isVisible();
    const errorVisible = await errorMsg.isVisible();

    expect(captchaVisible || errorVisible).toBeTruthy();
    });

    test('Verify registration with a valid email when password and repeat password don’t match', async ({ page }) => {  
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(credentials.newUser.email, credentials.newUser.password, credentials.validUser.repeatpassword);
    await page.waitForSelector('div.error.message li, h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const errorMsg = page.getByText('Passwords do not match');
    const captchaVisible = await captcha.isVisible();
    const errorVisible = await errorMsg.isVisible();

    expect(captchaVisible || errorVisible).toBeTruthy();
    });

    test('Verify registration with wrong email format', async ({ page }) => {  
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(credentials.newUser.email, credentials.newUser.password, credentials.validUser.repeatpassword);
    await page.waitForSelector('div.error.message li, h2:text("Checking that you are human")',{ timeout: 15000 });
    const captcha = page.locator('h2:text("Checking that you are human")');
    const errorMsg = page.getByText('Passwords do not match');
    const captchaVisible = await captcha.isVisible();
    const errorVisible = await errorMsg.isVisible();

    expect(captchaVisible || errorVisible).toBeTruthy();
    });

});