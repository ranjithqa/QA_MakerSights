const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage');
const faker = require('faker');


test('verify create and process subgraph', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    // await alltestsPage.goToResults();
    await alltestsPage.alltestspage.click();
    await alltestsPage.alltestssearchbar.fill("2024 Fall Men's Shirts - Evaluate Newness");
    await alltestsPage.kebabmenu.click();
    await page.click("text='2024 Fall Men's Shirts - Evaluate Newness'");

    const resultsPage = new ResultsPage(page);

    await resultsPage.lineEfficiency.click();
    await resultsPage.legCreateNewChart.click();
    await expect(resultsPage.legCreateNewChartModal).toBeVisible();

    const testName = `QAW: ${faker.random.word()}`;
    await page.fill('[placeholder="My chart title"]', testName);
    await resultsPage.legCreateNewButton.click();

    await resultsPage.LEGAddProductNashville.first().hover();
    await resultsPage.LEGAddProductDusk.first().hover();
    await page.click("g:nth-of-type(2).turf-chart__overlay-button");
    await resultsPage.LEGProcessChartButton.click();
    await expect(page.locator(`:text("You're about to process this chart")`)).toBeVisible();
    await page.click(`:text("Let's Go")`);

    // assert processing chart spinner
    await expect(resultsPage.LEGProcessingChartSpinner).toBeVisible();

    // go back to default graph
    await page.click(".ms-select-single__indicator");
    await page.click('[tabindex="-1"]');

});

test('verify filter Line Efficiency Graph', async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click("text='2024 Fall Men's Shirts - Evaluate Newness'");
    const resultsPage = new ResultsPage(page);

    await resultsPage.lineEfficiency.click();

    // apply gender filters
    await resultsPage.LEGFilterByFemale.click();
    await expect(resultsPage.LEGScreen).toBeVisible();
    await resultsPage.LEGFilterByAll.click();
    await expect(resultsPage.LEGScreen).toBeVisible();

    // add test for country filter
});

test('verify create subgraph from cut red button', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click("text='2024 Fall Men's Shirts - Evaluate Newness'");
    const resultsPage = new ResultsPage(page);

    await resultsPage.lineEfficiency.click();

    await resultsPage.LEGAddProductNashville.first().hover();

    // click red x
    await page.click("g .turf-chart__overlay-button");
    // name chart and save
    await expect(page.locator(':text("Create A New Chart Scenario")')).toBeVisible();
    await page.fill('[placeholder="My chart title"]', "Test Chart");
    await page.click(':text("Create New")');
  
    // assert product is red
    await expect(page.locator('[rx="20"]').first()).toHaveCSS("fill","rgb(224, 36, 36)");
  
    // delete chart
    await page.click(".turf-chart__overlay-button");
    await expect(page.locator('[rx="20"]').first()).toHaveCSS("fill","rgb(28, 100, 242)");
});

test('verify create subgraph from keep green button', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click("text='2024 Fall Men's Shirts - Evaluate Newness'");
    const resultsPage = new ResultsPage(page);

    await resultsPage.lineEfficiency.click();

    await resultsPage.LEGAddProductNashville.first().hover();

    // click green plus
    await page.click("g:nth-of-type(2).turf-chart__overlay-button");

    // assert modal appears
    await expect(page.locator(':text("Create A New Chart Scenario")')).toBeVisible();
    
    // name chart and save
    await page.fill('[placeholder="My chart title"]', "Test Chart");
    await page.click(':text("Create New")');
    
    // assert product is green
    await expect(page.locator('[rx="20"]').first()).toHaveCSS(
        "fill",
        "rgb(49, 196, 141)"
    );
    
    // delete chart
    await page.click(".turf-chart__overlay-button");
    await expect(page.locator('[rx="20"]').first()).toHaveCSS(
        "fill",
        "rgb(28, 100, 242)"
    );
});