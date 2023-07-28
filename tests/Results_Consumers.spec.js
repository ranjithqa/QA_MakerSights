const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage');

test('verify Consumers view on Results page', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click('text="2022 - Fall - Mens Shirts"');

    const resultsPage = new ResultsPage(page);

    // navigate to consumers tab
    await resultsPage.consumers.click();

    // validate filters are visible
    await expect(resultsPage.filterResponseCount).toBeVisible();
    await expect(resultsPage.filterByAudience).toBeVisible();
    await expect(resultsPage.filterByCountry_China).toBeVisible();
    await expect(resultsPage.filterByCountry_Germany).toBeVisible();
    await expect(resultsPage.filterByCountry_UnitedStates).toBeVisible();

    // assert questions are visible
    await expect(resultsPage.consumersWhereDoYouLive).toBeVisible();
    await expect(resultsPage.consumersWhereDoYouLive).toHaveText("Where do you live?");

    await expect(resultsPage.consumersWhatsYourGender).toBeVisible();
    await expect(resultsPage.consumersWhatsYourGender).toHaveText("What's your gender?");

    await expect(resultsPage.consumersHowOldAreYou).toBeVisible();
    await expect(resultsPage.consumersHowOldAreYou).toHaveText("How old are you?");

    await expect(resultsPage.consumersEvaluateStatement).toBeVisible();
    await expect(resultsPage.consumersEvaluateStatement).toHaveText("Evaluate the statement: “My friends think I'm fashion-forward”");
    
    // filter by audience and country
    await resultsPage.filterByAudience.click();
    await resultsPage.filterByCountry_UnitedStates.click();

    await expect(resultsPage.consumersWhereDoYouLive).toBeHidden();

    // clear audience filters
    await expect(resultsPage.filterAudienceAlert).toBeVisible();
    await resultsPage.filterByAudience.click();

    const dl = await page.$('dl');
    const germanyResult = await dl.textContent();
    
    await resultsPage.filterByCountry_Germany.click();
    const germanyFilteredResult = await dl.textContent();

    // verify filtered result is different than non-filtered result
    expect(germanyResult != germanyFilteredResult);

    // sort responses
    await resultsPage.consumersSortButton.first().click();
    await resultsPage.consumersSortByPercent.first().click();
    expect(page, "China", { selector: "dl:nth-of-type(3)" });
    await resultsPage.consumersSortByLabel.first().click();
    expect(page, "China", { selector: "dl" });
});
  
