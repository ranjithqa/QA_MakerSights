const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashBoardPage} = require('../pageobjects/DashBoardPage');

const filePath0 = 'utils/myfile.xlsx';

test('Download products and template files', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validbulkDownload();
    
});

test('Upload file using set input files', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    dashboardPage.validbulkUpload();
    page.on("filechooser", async(filechooser) => {
    await filechooser.setFiles (filePath0)

        })
await page.click("//div[text()='Product Bulk Upload Status']", {force: true})

  })


test('Valid Filters in Dashboard page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validFilters();

});

test('product modal doesnt affect scroll position ', async({page}) =>
{
    
});

test('view product details', async({page}) =>
{

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validateProductDetailsView();
});


test.only('View test link shows test view', async({page}) =>
{

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validateTestsOverview();
    await dashboardPage.validGlobalLineReviewFilters()
    await expect( page.locator("(//input[@class='ms-checkbox-input__input'])[1]")).toBeChecked();
    await page.locator("(//input[@class='ms-checkbox-input__input'])[1]").uncheck();
    expect( await page.locator("(//input[@class='ms-checkbox-input__input'])[1]").isChecked()).toBeFalsy();
    await dashboardPage.validSketchReviewFilters();
    await expect( page.locator("(//input[@type='checkbox'])[2]")).toBeChecked();
    await page.locator("(//input[@type='checkbox'])[2]").uncheck();
    expect( await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy();
    await dashboardPage.validDraftFilters();
    await expect( page.locator("(//input[@class='ms-checkbox-input__input'])[3]")).toBeChecked();
    await page.locator("(//input[@class='ms-checkbox-input__input'])[3]").uncheck();
    expect( await page.locator("(//input[@class='ms-checkbox-input__input'])[3]").isChecked()).toBeFalsy();
    
});

test('add and delete assortment', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.addAndDeleteAssortment();
});