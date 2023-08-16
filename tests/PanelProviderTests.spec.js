const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashBoardPage} = require('../pageobjects/DashBoardPage');
const {SurveyCreatorPage} = require('../pageobjects/SurveyCreatorPage');
const faker = require('faker');
const {AllTestsPage}  = require('../pageobjects/AllTestsPage');

test('verify submitting a test set up with Dynata Panel', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);

    // go to a dynata panel test link
    await page.goto('https://qa-go.makersights.com/N41de2LI?country=us&audience=panel&panel_provider=dynata&psid=pe_ref-4c227dce-a1c3-45f5-9929-bf01ef49edec&pid=207647&rst=2&_o=1271136');
});



test('Verify set up of a Dynata Panel test from Survey Creator', async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');

    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validateTestsOverview();

    // create a new survey
    await dashboardPage.createtest.click();
    await page.click('div.dp-inner-row.dp-title.e2e-dp-button-sketch_review:has-text("Sketch Review")');
    const testName = `QAW: ${faker.random.words(2)}`;
    await page.fill('[name="title"]', `${testName}`);

    await page.click('.ms-select-multiple__value-container');
    await page.click('.ms-select-multiple__option:has-text("Edit and finalize my line")');

    await page.click('button:text("Next")');    
    await page.click('.product-thumbnail.selectable >>nth=6');
    await page.click('.product-thumbnail.selectable >>nth=9');
    await page.click('button:text("Next")'); 

    // go to Review screen
    await page.click('.step-text:has-text("Review")');

    // change crm to recruited audience and select panel provider Dynata
    await page.selectOption('.ms-form-select.audience-type-select', { value: 'panel' });

    await page.selectOption('.ms-form-select.panel-provider-select', { label: 'Dynata' });
    await page.click('button:text("Ready to Send")'); 
    await page.click('button:text("Yes, Publish")');

    // delete the survey
    const allTestsPage = new AllTestsPage(page);
    await allTestsPage.searchTest(testName);
    await allTestsPage.deleteTest(testName);
    await allTestsPage.searchTest(testName);
});

test('Verify set up of a Lucid Panel test from Survey Creator', async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');

    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validateTestsOverview();

    // create a new survey
    await dashboardPage.createtest.click();
    await page.click('div.dp-inner-row.dp-title.e2e-dp-button-sketch_review:has-text("Sketch Review")');
    const testName = `QAW: ${faker.random.words(2)}`;
    await page.fill('[name="title"]', `${testName}`);

    await page.click('.ms-select-multiple__value-container');
    await page.click('.ms-select-multiple__option:has-text("Edit and finalize my line")');

    await page.click('button:text("Next")');    
    await page.click('.product-thumbnail.selectable >>nth=6');
    await page.click('.product-thumbnail.selectable >>nth=9');
    await page.click('button:text("Next")'); 

    // go to Review screen
    await page.click('.step-text:has-text("Review")');

    // change crm to recruited audience and select panel provider Lucid
    await page.selectOption('.ms-form-select.audience-type-select', { value: 'panel' });

    await page.selectOption('.ms-form-select.panel-provider-select', { label: 'Lucid' });
    await page.click('button:text("Ready to Send")'); 
    await page.click('button:text("Yes, Publish")');

    // delete the survey
    const allTestsPage = new AllTestsPage(page);
    await allTestsPage.searchTest(testName);
    await allTestsPage.deleteTest(testName);
    await allTestsPage.searchTest(testName);
});

test('Verify set up of a Innovate MR Panel test from Survey Creator', async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');

    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.validateTestsOverview();

    await dashboardPage.createtest.click();
    await page.click('div.dp-inner-row.dp-title.e2e-dp-button-sketch_review:has-text("Sketch Review")');
    const testName = `QAW: ${faker.random.words(2)}`;
    await page.fill('[name="title"]', `${testName}`);

    await page.click('.ms-select-multiple__value-container');
    await page.click('.ms-select-multiple__option:has-text("Edit and finalize my line")');

    await page.click('button:text("Next")');    
    await page.click('.product-thumbnail.selectable >>nth=6');
    await page.click('.product-thumbnail.selectable >>nth=9');
    await page.click('button:text("Next")'); 

    // go to Review screen
    await page.click('.step-text:has-text("Review")');

    // change crm to recruited audience and select panel provider Innovate mr
    await page.selectOption('.ms-form-select.audience-type-select', { value: 'panel' });

    await page.selectOption('.ms-form-select.panel-provider-select', { label: 'Innovate-mr' });
    await page.click('button:text("Ready to Send")'); 
    await page.click('button:text("Yes, Publish")');

    // delete the survey
    const allTestsPage = new AllTestsPage(page);
    await allTestsPage.searchTest(testName);
    await allTestsPage.deleteTest(testName);
    await allTestsPage.searchTest(testName);
});