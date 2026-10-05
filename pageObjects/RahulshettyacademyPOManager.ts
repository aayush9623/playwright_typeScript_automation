import { Page,Locator,expect } from '@playwright/test';
import { RahulshettyacademyLoginPage } from '../pageObjects/RahulshettyacademyLoginPage';
import { RahulshettyacademyShopPage } from '../pageObjects/RahulshettyacademyShopPage';

export class RahulshettyacademyPOManager {
    rahulshettyacademyLoginPage: RahulshettyacademyLoginPage;
    rahulshettyacademyShopPage: RahulshettyacademyShopPage
    page: Page;
    expect: any;
    constructor(page:Page, expect:any) {
        this.page = page;
        this.expect = expect;
        this.rahulshettyacademyLoginPage = new RahulshettyacademyLoginPage(this.page, this.expect);
        this.rahulshettyacademyShopPage = new RahulshettyacademyShopPage(this.page, this.expect);
    }

    getRahulshettyacademyLoginPage() {
        return this.rahulshettyacademyLoginPage;
    }

    getRahulshettyacademyShopPage() {
        return this.rahulshettyacademyShopPage;
    }
}

module.exports = { RahulshettyacademyPOManager };
