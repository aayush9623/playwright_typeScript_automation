import {test as baseTest} from '@playwright/test'
interface TestDataForOrder{
    productName:string;
    userName:string;
    password:string;
}
export const customtest = baseTest.extend<{testDataForOrder:TestDataForOrder}>({
    testDataForOrder : {
        productName : "ZARA COAT 3",
        userName:"lillyjohn@gmail.com",
        password : "Learning@1"
    }
})