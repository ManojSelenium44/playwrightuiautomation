import { Before, After, setWorldConstructor, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../../pages/loginPage';
import { DashboardPage } from '../../pages/dashboardPage';
import { ScreenshotUtils } from '../utils/screenshotUtils';

interface CustomWorld {
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    screenshotUtils: ScreenshotUtils;
}

setWorldConstructor(class CustomWorld implements CustomWorld {
    public page: Page;
    public loginPage: LoginPage;
    public dashboardPage: DashboardPage;
    public screenshotUtils: ScreenshotUtils;

    constructor(options: any) {
        this.page = options.page;
        this.loginPage = options.loginPage;
        this.dashboardPage = options.dashboardPage;
        this.screenshotUtils = new ScreenshotUtils(this.page); // Initialize screenshot utility
    }
});

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch(
        { headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-blink-features=AutomationControlled' // Hide automation control features
            ] }); // Disable headless mode to see browser UI
    page = await browser.newPage({
        recordVideo: { dir: 'videos/' }, // Directory to save videos
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });

    // Initialize page objects and utilities
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.screenshotUtils = new ScreenshotUtils(page); // Initialize screenshot utility
});

After(async function (scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED) { // Ensure result is not undefined
        // Capture screenshot
        await this.screenshotUtils.captureScreenshot(scenario.pickle.name);

        // Save video
        const videoPath = `./videos/${scenario.pickle.name}.mp4`;
        const video = await page.video();
        if (video) { // Check if video is not null
            await video.saveAs(videoPath);
            console.log(`Video saved to ${videoPath}`);
        } else {
            console.log('No video available for this scenario.');
        }
    }
    await browser.close();
});
