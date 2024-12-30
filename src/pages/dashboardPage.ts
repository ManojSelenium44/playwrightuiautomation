import { Page } from 'playwright';

export class DashboardPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page; // Assign the page parameter to this.page
    }

    async getWelcomeMessage() {
        return this.page.textContent('#welcomeMessage');
    }
    async clickOnCompleteProfile(){
        await this.page.click("//a[contains(text(),'Complete')]");
    }
    async uploadResume(filePath:string){
        await this.page.setInputFiles('input[type="file"]', filePath);
        const successMessage = await this.page.textContent("//p[@class='head']");
        console.log(successMessage);
    }
    async closeBanner(){
        await this.page.click("//div[@class='crossIcon chatBot chatBot-ic-cross']");
    }
    

}

export default DashboardPage;
