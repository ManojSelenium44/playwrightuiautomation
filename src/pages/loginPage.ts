import { Page } from 'playwright';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://www.naukri.com/');
        await this.page.waitForLoadState('networkidle'); // Wait for the page to finish loading
        console.log(await this.page.title());
    }

    async login(username: string, password: string) {
        await this.page.click('#login_Layer');
        await this.page.fill("//input[contains(@placeholder,'Username')]", username);
        await this.page.fill("//input[contains(@placeholder,'Enter your password')]", password);
        await this.page.click("//button[@type='submit']");
    }

    async titleVerification() {
        return await this.page.title();
    }
}
