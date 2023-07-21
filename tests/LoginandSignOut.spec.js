const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {MySettingsPage} = require('../pageobjects/MySettingsPage');
const {LogoutPage} = require('../pageobjects/LogoutPage');

test('verify login and out', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const mysettingsPage = new MySettingsPage(page);
    await mysettingsPage.mysettingsDropDown();
    const logoutPage = new LogoutPage(page);
    logoutPage.validSignOut();

});