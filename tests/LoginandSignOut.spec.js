const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {MySettingsPage} = require('../pageobjects/MySettingsPage');
const {LogoutPage} = require('../pageobjects/LogoutPage');

test('verify login and Logout', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/6195868ba759f770948185a6/timeline");
    const mysettingsPage = new MySettingsPage(page);
    await mysettingsPage.mysettingsDropDown();
    const logoutPage = new LogoutPage(page);
    logoutPage.validSignOut();
    console.log(await page.locator("//p[text()='Log in to continue to the MakerSights Workspace.']").textContent());
    await expect(page.locator("//p[text()='Log in to continue to the MakerSights Workspace.']")).toContainText('Log in to continue to the MakerSights Workspace.');

});