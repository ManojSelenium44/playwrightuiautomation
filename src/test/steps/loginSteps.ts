import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I navigate to the login page', { timeout: 60000 }, async function () {
    await this.loginPage.navigateTo();
});

When('I login with valid credentials', { timeout: 60000 }, async function () {
    await this.loginPage.login('user@example.com', 'password');
});

Then('I should see the dashboard', { timeout: 60000 }, async function () {
    const pageTitle = await this.loginPage.titleVerification();
    // console.log(pageTitle);
    expect(pageTitle).toContain('Naukri.com');
    await this.screenshotUtils.captureScreenshot('DashboardVisible');
    
});
