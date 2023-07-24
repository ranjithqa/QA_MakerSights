const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashBoardPage} = require('../pageobjects/DashBoardPage');

const filePath0 = '../utils/myfile.xlsx';

test('Download current products and template files', async({page}) =>
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
    //await page.getByLabel("//span[text()='Upload File']").setInputFiles('./utils/myfile.xlsx');
    //await page.setInputFiles("//span[text()='Upload File']", filePath0 );
    await page.getByRole('button', { name: 'Upload File' }).setInputFiles(filePath0);
    /*page.on("filechooser", async(filechooser) => {
    await filechooser.setFiles(filechooser);
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByLabel("//span[text()='Upload File']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath0);
    console.log(await page.locator("//div[text()='Product Bulk Upload Status']").textContent());*/
    await expect(page.locator("//div[text()='Product Bulk Upload Status']")).toContainText('Product Bulk Upload Status');
})

/*await page.click("//span[text()='Upload File']", {force: true})

})*/

test.only('Valid Filters in Dashboard page', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validFilters();

});