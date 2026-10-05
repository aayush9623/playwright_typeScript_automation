const {test,expect} = require('@playwright/test')


test('first playwright test',async ({browser})=>{
    let context= await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    await expect(page.getByRole("heading",{'class':'brand greenLogo'})).toBeVisible();
    await page.locator('.product').filter({hasText:'Brocolli'}).getByRole('button',{name:"ADD TO CART"}).click();
    await page.getByAltText("Cart").click();
    await page.getByText("PROCEED TO CHECKOUT").click();
    await expect(page.getByText("Brocolli - 1 Kg")).toBeVisible();
    
    const [newtab]=await Promise.all([
        context.waitForEvent('page'),
        await page.getByText("Top Deals").click()
    ]);
    await expect(newtab).toHaveTitle("GreenKart - veg and fruits kart");
    await expect(newtab.getByText("Veg/fruit name")).toBeVisible();

    await page.bringToFront(); // Brings original tab back into focus
    await expect(page.locator('.brand.greenLogo')).toBeVisible();
})  