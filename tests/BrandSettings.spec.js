const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {BrandSettingsPage} = require('../pageobjects/BrandSettingsPage');

test('General Brand Profile' , async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.editBrandName();
    await brandSettingsPage.editBrandUrl();
});

test('Brand Settings Genaral other settings ' , async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.otherSettings();
});

test(' Decision name', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.decisionNames();
});

test('Change Default Country', async ({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.changeDefaultCountry();
});

test('Create and delete user', async ({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.createAndDeleteUser();
});

test('Add point based value question', async ({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.addPointbasedValueQuestion();
});

test.only('Add Image response with file picker and remove image response', async ({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/6195868ba759f770948185a6/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.addAndDeleteResponse();
});

test('Segmentation Q Key Behaviour', async ({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto("https://qa-app.makersights.com/brand/620323871263484f1e4895b7/timeline");
    const brandSettingsPage = new BrandSettingsPage(page);
    await brandSettingsPage.segmentationQKeyBehaviour();
});



