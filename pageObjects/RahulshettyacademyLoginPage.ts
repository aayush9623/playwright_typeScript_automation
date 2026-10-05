import { Page,Locator,expect } from '@playwright/test';
export class RahulshettyacademyLoginPage {
    page:Page
    expect:any
    usernameField:Locator
    passwordField:Locator
    termsCheckbox:Locator
    signInButton:Locator

    constructor(page:Page, expect:any) {
        this.page = page;
        this.expect = expect;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.termsCheckbox = page.locator('#terms');
        this.signInButton = page.locator('#signInBtn');
    }

    async navigateToLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Navigated to login page");
    }

    async enterUsername(username:string) {
        await this.usernameField.fill(username);
    }

    async enterPassword(password:string) {
        await this.passwordField.fill(password);
    }

    async selectTermsCheckbox() {
        const isChecked = await this.termsCheckbox.isChecked();
        if (!isChecked) {
            await this.termsCheckbox.check();
        }
    }

    async clickSignIn() {
        await this.signInButton.click({timeout: 7000});
    }

    async login(username:string, password:string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.selectTermsCheckbox();
        await this.clickSignIn();
    }
}

module.exports = { RahulshettyacademyLoginPage };
