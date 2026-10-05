import { expect, type Locator, type Page } from '@playwright/test';
let messgae1 : string ="Hello World";
console.log(messgae1);
messgae1 ="bye World"; 
console.log(messgae1);
let age:number=23
console.log(age );
age=24; 
console.log(age);

let flag:boolean=true
console.log(flag);
flag=false;
console.log(flag);
let array1:number[]=[1,2,3,4,5];
console.log(array1);
let data:any;"you are fine "
console.log(data);
data = 23;
console.log(data);

function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log("testing");
console.log(add(2,21));
console.log("testing");
let user1 :{name:string,age:number}={name:"John",age:23};
console.log(user1); 
//cannot assign new value to user1 because it is not defined in contract in typescript 
//it complains but complier will not throw error because it is not a runtime error
//user.location="USA";



class CartPage{

page:Page;
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
async checkProductInCart(productName:string ){

     this.expect(await this.page.locator("h3:has-text('"+productName+"')").isVisible).toBeTruthy
    
}
async clickCheckout(){
    await this.checkoutButton.click();
}   


}
module.exports = {CartPage}