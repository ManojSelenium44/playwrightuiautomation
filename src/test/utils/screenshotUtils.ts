import { Page, Locator } from 'playwright';

export class ScreenshotUtils {
    private page: Page;
    private screenshotDir: string;

    constructor(page: Page, screenshotDir: string = 'screenshots/') {
        this.page = page;
        this.screenshotDir = screenshotDir;
    }

    async captureScreenshot(scenarioName: string) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `${scenarioName}-${timestamp}.png`;
        const filePath = `${this.screenshotDir}/${fileName}`;
        await this.page.screenshot({ path: filePath });
        console.log(`Screenshot saved to ${filePath}`);
    }

    async captureElementScreenshot(locator: Locator, scenarioName: string) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `${scenarioName}-${timestamp}.png`;
        const filePath = `${this.screenshotDir}/${fileName}`;
        await locator.screenshot({ path: filePath });
        console.log(`Element screenshot saved to ${filePath}`);
    }
}
