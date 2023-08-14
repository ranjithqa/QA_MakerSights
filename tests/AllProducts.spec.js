const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllproductsPage} = require('../pageobjects/AllproductsPage');


test('view All Products', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const allproductsPage = new AllproductsPage(page);
    await allproductsPage.AllProducts();
    
});

test('Download Image', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const allproductsPage = new AllproductsPage(page);
    await allproductsPage.AllProducts();
    await allproductsPage.DownloadImg();
    console.log(await page.locator(".Toastify__toast-body").textContent());
    await expect(page.locator(".Toastify__toast-body")).toContainText('Downloading images...');

    
});

test('Search all products', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const allproductsPage = new AllproductsPage(page);
    await allproductsPage.AllProducts();
    await allproductsPage.validSearchProduct(dataset.Austinproduct);
    
});