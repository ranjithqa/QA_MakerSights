const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const { chromium } = require('@playwright/test');


test('validate All Tests page Added Edit Grouped Tests button', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
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
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    const preview = page.locator("//div[text()='Preview']");
    const [newPage] =await  Promise.all([context.waitForEvent('page'),preview.click(),])
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
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    await alltestspage.validLinks();
    await page.locator("//*[@id='e2e-angular-app']/div/div[2]/div/div[1]/div[1]/span").textContent();
    await page.goBack();
});

test('validate Duplicate in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    await alltestspage.validDuplicate();


});

test('validate Delete in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validPreview();
    await alltestspage.validDelete();

});

test('validate Filters in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validGlobalLineReviewFilters();
    await expect( page.locator("(//input[@type='checkbox'])[1]")).toBeChecked();
    await page.locator("(//input[@type='checkbox'])[1]").uncheck();
    expect( await page.locator("(//input[@type='checkbox'])[1]").isChecked()).toBeFalsy();
    await alltestspage.validSketchReviewFilters();
    await expect( page.locator("(//input[@type='checkbox'])[2]")).toBeChecked();
    await page.locator("(//input[@type='checkbox'])[2]").uncheck();
    expect( await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy();
    await alltestspage.validConceptFilters();
    await expect( page.locator("(//input[@type='checkbox'])[3]")).toBeChecked();
    await page.locator("(//input[@type='checkbox'])[3]").uncheck();
    expect( await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeFalsy();
    await alltestspage.validClosedFilters();
    await expect( page.locator("(//label[text()='Status']/following::input)[1]")).toBeChecked();
    await page.locator("(//label[text()='Status']/following::input)[1]").uncheck();
    expect( await page.locator("(//label[text()='Status']/following::input)[1]").isChecked()).toBeFalsy();
    await alltestspage.validDraftFilters();
    await expect( page.locator("(//span[text()='Closed']/following::input)[1]")).toBeChecked();
    await page.locator("(//span[text()='Closed']/following::input)[1]").uncheck();
    expect( await page.locator("(//span[text()='Closed']/following::input)[1]").isChecked()).toBeFalsy();
});

test('validate Column Headers in All Tests page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validColumnHeaderFilters();
    
});

test.only('Add Learning button is hidden when viewed through shared link', async ({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/6195868ba759f770948185a6/timeline');
    const alltestspage = new AllTestsPage(page);
    await alltestspage.validSharedLink();
   
});

