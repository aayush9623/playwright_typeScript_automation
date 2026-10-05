import { Page,Locator,expect } from '@playwright/test';
export class CartPage{
    page:Page
    expect:any;
    cartpageConfirmation:Locator;
    productInCart:Locator;
    checkoutButton:Locator;

constructor(page:Page,expect:any){
    this.page=page;
    this.expect=expect;
    this.cartpageConfirmation = page.locator('div li')
    this.productInCart = page.locator("h3:has-text('Product')")
    this.checkoutButton = page.locator('text=Checkout');
  
}


async cartPageLoadCheck(){
    await this.cartpageConfirmation.first().waitFor();
}
async checkProductInCart(productName:string){

     this.expect(await this.page.locator("h3:has-text('"+productName+"')").isVisible).toBeTruthy
    
}
async clickCheckout(){
    await this.checkoutButton.click();
}   


}
module.exports = {CartPage}