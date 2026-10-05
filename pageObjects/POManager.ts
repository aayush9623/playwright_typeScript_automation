//const { LoginPage } = require('../pageObjects/LoginPage')
//const { DashboardPage } = require('../pageObjects/DashboardPage')

import {LoginPage} from '../pageObjects/LoginPage'
import { DashboardPage } from '../pageObjects/DashboardPage'
import { CartPage } from '../pageObjects/CartPage'
import { PaymentPage } from '../pageObjects/PaymentPage'
import {MyOrderPage} from '../pageObjects/MyOrderPage'  
import { Page,expect } from '@playwright/test';


export class POManager {
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage
    paymentPage:PaymentPage
    myOrderPage:MyOrderPage
    page:Page;
    expect:any; 
    constructor(page:Page,expect:any) {
        this.page = page;
        this.expect=expect;
        this.loginPage = new LoginPage(this.page,this.expect);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page,this.expect);
        this.paymentPage = new PaymentPage(this.page,this.expect)
        this.myOrderPage = new MyOrderPage(this.page, this.expect)

    }
    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getPaymentPage(){
        return this.paymentPage;
    }
    getMyOrderPage(){
        return this.myOrderPage;
    }
}
module.exports={POManager}