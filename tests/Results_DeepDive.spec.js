const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage');

test('verify name, color, pricing, score and percentile on deep dive carousel image', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click('text="2022 - Fall - Mens Shirts"');

    const resultsPage = new ResultsPage(page);
    
    await resultsPage.insightCards.click();
    await expect(resultsPage.productName).toBeVisible();
    await resultsPage.viewMore.click();

    await expect(resultsPage.productName).toBeVisible();
    await expect(resultsPage.deepDiveSentimentScore).toHaveText("66");
    await expect(resultsPage.deepDivePercentile).toHaveText("100th Percentile");

    await resultsPage.filterByAudience.click();
    await expect(resultsPage.deepDiveSentimentScore).toHaveText("64");
    await expect(resultsPage.deepDiveImage).toBeVisible();
    await resultsPage.deepDiveImage.click();
    await expect(resultsPage.deepDiveMagnifiedImage).toBeVisible();
    await page.mouse.click(250, 250);
    await expect(resultsPage.deepDiveMagnifiedImage).toBeHidden();

    await expect(resultsPage.deepDiveQuestion1).toHaveText("Is there anything else you'd like to share with us about this item?");
    await expect(resultsPage.deepDiveQuestion2).toHaveText("What do you like most about this product?");

    await expect(resultsPage.deepDiveResponseHeaderNegative).toHaveText("Negative Respondents (254)");
    await expect(resultsPage.deepDiveResponseHeaderPositive).toHaveText("Positive Respondents (283)");

});