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
    await expect(resultsPage.LEGResults).toBeVisible();
    await resultsPage.LEGFilterByAll.click();
    await expect(resultsPage.LEGResults).toBeVisible();

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

test('verify LEG is generated when there are at least 250 respondents and no significant data screen when filters are applied', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click("text='PTC Taylor Stitch Demo'");
    const resultsPage = new ResultsPage(page);

    // view LEG results
    await resultsPage.lineEfficiency.click();
    await expect(resultsPage.LEGResults).toBeVisible();
    // assert bar chart is visible and all products are visible on the bar chart
    await expect(resultsPage.LEGBarChart).toBeVisible();
    await expect(resultsPage.LEGBottomProducts).toHaveCount(5);

    // verify total responses are 250 or more
    await resultsPage.getResponseCountLocator(250);

    // filter by gender so that responses are <250
    await resultsPage.LEGFilterByFemale.click();
    await resultsPage.getFilteredResponseCount(138, 250, 55);
    await expect(resultsPage.LEGNoSignificantDataScreen).toBeVisible();

    await resultsPage.LEGFilterByMale.click();
    await expect(resultsPage.LEGNoSignificantDataScreen).toBeVisible();

    // clear filters
    await resultsPage.LEGFilterByAll.click();
    await expect(resultsPage.LEGResults).toBeVisible();
});


test('verify LEG is not generated for an active test with <250 responses', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click("text='Automation Active Test - Do not edit'");
    const resultsPage = new ResultsPage(page);

    await resultsPage.lineEfficiency.click();
    await expect(resultsPage.LEGBarChart).toBeHidden();

    await resultsPage.getResponseCountLocator(0);

    await expect(resultsPage.LEGLessThan250ResponsesScreen).toBeVisible();
});

test('verify clicking on a LEG result bar links to Deep Dive page', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);

    // navigate to Results - LEG
    await page.goto('https://qa-app.makersights.com/brand/6195868ba759f770948185a6/campaign/61a7061e3e5e72f27cc4c21d/results?tab=line-efficiency-graph');

    // click on Nashville product in chart
    await page.click('[data-testid*="turf-product-button"]:has-text("Nashville")');

    // assert on deep dive card for product
    await expect(page.locator(".ms-results-card-header__product-name:has-text('Nashville')")).toBeVisible();
    await expect(page.locator('.ms-results-card-header__score-number:has-text("57")')).toBeVisible();

    // go to line efficiency
    await page.click(':text("Line Efficiency")');

    // click while overlay is hovered
    await page.hover(".turf-chart__overlay-rect", { timeout: 7000, force: true });
    await page.click(".turf-chart__overlay-rect", { timeout: 7000, force: true });

    // assert on deep dive card for product
    await expect(page.locator(".ms-results-card-header__product-name:has-text('Nashville')")).toBeVisible();
    await expect(page.locator('.ms-results-card-header__score-number:has-text("57")')).toBeVisible();
});