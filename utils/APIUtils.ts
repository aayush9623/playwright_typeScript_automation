import { Page,Locator,expect } from '@playwright/test';
export default class APIUtils {
    apiContext:any
    loginPayload:string 
    constructor(apiContext:any,loginPayload:string) {
        this.apiContext = apiContext;
        this.loginPayload =loginPayload;
    }
    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: this.loginPayload });

        const loginJsonResponse = await loginResponse.json();
        const token = loginJsonResponse.token;
        console.log(token);
        return token;
    }
    async createOrder(createOrderPayload:string){
        let response ={token:String, orderId:String};
        response.token = await this.getToken();
        const orderResponse =await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
        data:createOrderPayload,
        headers:{
            'Authorization': response.token,
            'Content-type':'application/json'
        }
    })
    const orderJsonResponse = await orderResponse.json();
    console.log(orderJsonResponse);
    console.log("oreder response JSON finder "+orderJsonResponse.orders[0]);
    response.orderId  = orderJsonResponse.orders[0];
    console.log(response.orderId);
    return response;
    }
}
