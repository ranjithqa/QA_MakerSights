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
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
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