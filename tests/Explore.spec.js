const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {ExplorePage} = require('../pageobjects/ExplorePage');

test('Explore:Feed Filters', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const explorePage = new ExplorePage(page);
    await explorePage.validExplorePage();
});


test('Explore Feed: Initial access to the feed', async({page}) =>
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const explorePage = new ExplorePage(page);
    await explorePage.validExploreFeed();
    expect(await page.locator(".ms-card__content").count()).toBeLessThanOrEqual(10);

});

test.only('Explore Feed: Real time comment updates - snip card', async({browser}) =>
{
    const context = await browser.newContext();
    const page =  await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const explorePage = new ExplorePage(page);
    await explorePage.validExploreFeed();
    const explorepage = page.locator("//a[contains(text(),'Explore')]");
    const [newPage] =await Promise.all([
    //context.waitForEvent('page'),
     explorepage.click(),
     ])


});

