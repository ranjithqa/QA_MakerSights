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

    // select and assert Taylor Stitch brand
    await page.click( "text=Taylor Stitch");
    await page.waitForTimeout(6000);
    await expect(page.locator(".ms-image__image.ms-image__image--contain")).toBeVisible();
});

test('verify an admin user can add a new brand from Brands page', async({page}) => 
{

    // to be done
});

test('verify an admin user can delete a brand from Brands page', async({page}) => 
{

    // to be done
    // do not delete an existing brand - create a new one and delete that one only
});

test('verify an admin user can edit a brand from Brands page', async({page}) => 
{

    // to be done
});