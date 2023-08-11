const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage');

test('verify Insight Cards view on Results page', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    await page.goto('https://qa-app.makersights.com/brand/607740bcc915ce2b18387719/timeline');
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click('text="2022 - Fall - Mens Shirts"');

    const resultsPage = new ResultsPage(page);
    
    await resultsPage.insightCards.click();
    await expect(resultsPage.productName).toBeVisible();
    await expect(resultsPage.filterResponseCount).toBeVisible();
    await expect(resultsPage.vsAllRespondents).toBeHidden();

    // get detractors percentage for a product w/o any audience filters
    await expect(resultsPage.unfilteredDetractorPercentage).toBeVisible();

    // Apply audience + gender filter and compare results with and without filters

    await resultsPage.filterByFemale.check();
    await resultsPage.filterByAudience.check();
    await expect(resultsPage.filteredDetractorPercentage).toBeVisible();
});
  
 