const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');


test('validate All Tests page Added Edit Grouped Tests button', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validAddeditgroupedtests();

});

test('validate Preview in All Tests page', async({browser}) =>
{

    const context = await browser.newContext();
    const page =  await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    const preview = page.locator("//div[text()='Preview']");
    const [newPage] =await  Promise.all([
    context.waitForEvent('page'),
    preview.click(),
    ])
    const text = await newPage.locator("//*[@id='tab-content-0']/div/md-content/div/div[2]/span/h1").textContent();
    console.log(text);
    await page.close();
});

test('validate Links in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    await alltestspage.validLinks();
    await page.locator("//*[@id='e2e-angular-app']/div/div[2]/div/div[1]/div[1]/span").textContent();
    await page.goBack();
});

test.only('validate Duplicate in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    await alltestspage.validDuplicate();

   
});


