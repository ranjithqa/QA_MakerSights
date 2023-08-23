const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');

test('verify an admin user can switch brands', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);

    await page.goto('https://qa-app.makersights.com/brand/56bba8e900820bfc24975413/timeline');
    await page.click(".dropdown-header");

    await expect(page.locator('[data-testid="dropdown-item"]:has-text("Taylor Stitch")')).toHaveCount(1);
    await page.waitForTimeout(3000);

    // select and assert QA Static brand
    await page.click( "text=Taylor Stitch");
    await page.waitForTimeout(6000);
    await expect(page.locator(".ms-image__image.ms-image__image--contain")).toBeVisible();
    // await assertText(page, "Holiday 2023\nGeneric");
});