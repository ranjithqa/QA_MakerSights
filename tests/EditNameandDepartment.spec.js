const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {MySettingsPage} = require('../pageobjects/MySettingsPage');


test('verify that the user can edit name and department', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/6195868ba759f770948185a6/timeline");
    const mysettingsPage = new MySettingsPage(page);
    await mysettingsPage.mysettingsDropDown();
    await mysettingsPage.mysettingsOption();
    await mysettingsPage.validUpdateinfobutton();
    //console.log(await page.locator(".Toastify__toast-body").textContent());
    //await expect(page.locator(".Toastify__toast-body")).toContainText('You have successfully updated your account');
    

});