const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage')

test('verify M/S admins can switch between brands', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/5713f2f0d898fc990737aa33/tests');
    const alltestsPage = new AllTestsPage(page);

    // Navigate to Investment Review/Sales Projection survey
    await page.click("text='Investment Review'");
    await alltestsPage.goToSalesProjectionSurvey();
    await page.click("text='2019 - Holiday - Mens - Tops'");

    const expectedText = "We no longer support Investment review survey format. Please reach out to the Customer Success team if you need to view the results of this survey.";
    const element = page.locator(`div:has-text("${expectedText}")`).first();
    await expect(element).toBeVisible();

});