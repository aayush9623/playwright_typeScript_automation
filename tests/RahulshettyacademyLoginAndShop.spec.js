import { test, expect } from '@playwright/test';

const { RahulshettyacademyPOManager } = require('../pageObjects/RahulshettyacademyPOManager');

test('@Web Rahulshetty Academy Login and Shop Verification', async ({ page }) => {
    test.setTimeout(60000); // Set timeout to 60 seconds for this test before each test
    test.setDefaultTimeout(30000); // Set default timeout to 60 seconds for this test  for locator operation(ex -click fill etc)
    const slowExpect=expect.configure({timeout:7000}) //set timeout for expect assertion to 10 sec
    //waitFor() does not have default timeout so we can set it as below
    
    const poManager = new RahulshettyacademyPOManager(page, expect);
    const loginPage = poManager.getRahulshettyacademyLoginPage();
    const shopPage = poManager.getRahulshettyacademyShopPage();

    // Step 1: Navigate to login page
    await loginPage.navigateToLoginPage();

    // Step 2: Enter username and password
    await loginPage.login("rahulshettyacademy", "Learning@830$3mK2");

    // Step 3: Wait for page to navigate to shop page
    await shopPage.waitForShopPageToLoad();

    // Step 4: Verify the page URL
    await slowExpect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    console.log("✓ Successfully navigated to shop page");

    // Step 5: Verify iPhone X product is present
    const isProductFound = await shopPage.verifyProductExists("iPhone X");
    
    // Assert that the product exists
    await slowExpect(isProductFound).toBe(true);
    console.log("✓ Test passed: iPhone X product found on the shop page");
});
