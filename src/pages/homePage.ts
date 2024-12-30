import { Page } from 'playwright';

export class HomePage {
    constructor(private page: Page) {}

    async navigateTo() {
        await this.page.goto('https://example.com');
    }

    async getTitle() {
        return this.page.title();
    }
}
