import { Page,Locator,expect } from '@playwright/test';
export class RahulshettyacademyShopPage {
    page:Page
    expect:any
    shopPageUrl:string
    constructor(page:Page, expect:any) {
        this.page = page;
        this.expect = expect;
        this.shopPageUrl = "https://rahulshettyacademy.com/angularpractice/shop";
    }

    async waitForShopPageToLoad() {
        // Wait for the URL to match the shop page
        await this.page.waitForURL(this.shopPageUrl, { waitUntil: 'networkidle' });
        // Wait for product cards to load
        await this.page.waitForSelector('[routerlink="/angularpractice/cart"]', { timeout: 10000 });
    }

    async verifyProductExists(productName:string) {
        // Look for product card containing the product name
        const productCards = await this.page.locator("app-product-list").locator("h4");
        const products = await productCards.allTextContents();
        
        console.log("Available products:", products);
        
        // Check if iPhone X is present
        const productFound = products.some(product => product.toLowerCase().includes(productName.toLowerCase()));
        
        if (productFound) {
            console.log(`✓ Product "${productName}" found on the page`);
            return true;
        } else {
            console.log(`✗ Product "${productName}" NOT found on the page`);
            return false;
        }
    }

    async getProductList() {
        const productCards = await this.page.locator("app-product-list").locator("h4");
        return await productCards.allTextContents();
    }
}

module.exports = { RahulshettyacademyShopPage };
