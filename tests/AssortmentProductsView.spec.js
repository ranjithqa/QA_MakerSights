const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {DashBoardPage} = require('../pageobjects/DashBoardPage');


test('Download product and template files', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.openAssortment();
    await dashboardPage.bulkUpload();


});