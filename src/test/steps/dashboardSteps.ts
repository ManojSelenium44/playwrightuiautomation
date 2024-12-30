import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const filePath = 'Resume.pdf';

When('I should click on Complete profile', { timeout: 60000 }, async function () {
    await this.dashboardPage.clickOnCompleteProfile();
});

Then('I should click on Upload resume', { timeout: 60000 },async function () {
    try{
        await this.dashboardPage.closeBanner();
    } catch{
        console.log('No banner');
    }
    await this.dashboardPage.uploadResume(filePath);
});