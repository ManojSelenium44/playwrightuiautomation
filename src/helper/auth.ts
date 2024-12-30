import { Page } from 'playwright';
import { config } from './env';

export async function login(page: Page) {
    await page.goto(`${config.baseUrl}/login`);
    await page.fill('#username', config.username);
    await page.fill('#password', config.password);
    await page.click('#loginButton');
}
