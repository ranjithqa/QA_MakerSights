const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {AllTestsPage} = require('../pageobjects/AllTestsPage');
const {ResultsPage} = require('../pageobjects/ResultsPage');

test('verify Head to Head feauture on Results page', async({page}) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    console.log(await page.title());
    await loginPage.validLogin(dataset.username,dataset.password);
    const alltestsPage = new AllTestsPage(page);
    await alltestsPage.goToResults();
    await page.click('text="2022 - Fall - Mens Shirts"');

    const resultsPage = new ResultsPage(page);
    
    await resultsPage.headToHead.click();
    await expect(resultsPage.filterByCountry_UnitedStates).toBeVisible();

    const selectProduct = await page.$$('.ms-comparison-table__cell__additional-data__product-select__prompt:has-text("Select a product to start comparing")');
    await selectProduct[0].isVisible();
    await selectProduct[1].isVisible();

    const chooseProduct = await page.$$('.ms-comparison-table__cell__additional-data__product-select__cta');
    await chooseProduct[0].click();
    await page.click("text=Search for a product");
    await page.click('div:nth-of-type(3)[tabindex="-1"]');

    await chooseProduct[1].click();
    await page.click("text=Search for a product");
    await page.click('div:nth-of-type(2)[tabindex="-1"]');

    await page.waitForTimeout(2000);

    const productA = await page.$('div.ms-comparison-table__cell__comparison-data__percentage');

    const productAName = await productA.$eval('div:nth-child(1)', node => node.textContent);
    const productAValue = await productA.$eval('div:nth-child(2)', node => node.textContent);
    
    // Validate Product A has 27% preference (comparison data QA and Prod)
    expect(productAName).toBe('Product A');
    expect(productAValue).toBe('27%');

    // Validate shared preference percentage is displayed
    await expect(resultsPage.headToHead_SharedPreference).toBeVisible();

    // Validate venn diagram and breakdown insights are displayed
    await expect(resultsPage.headToHead_VennDiagram).toHaveCount(2);
    await expect(resultsPage.headToHead_BreakdownInsights).toBeVisible();

    // get initial venn diagram sizes and percentages
    const circleASize = await page.locator('.ms-venn-diagram__circle__detail >> nth=0').boundingBox(); // A
    console.log(circleASize); // {"x":615.2738037109375,"y":512.33056640625,"width":141.61669921875,"height":141.61669921875}
    const circleBSize = await page.locator('.ms-venn-diagram__circle__detail >> nth=1').boundingBox(); // B
    console.log(circleBSize); // {"x":679.9525756835938,"y":521.2833251953125,"width":123.71112060546875,"height":123.71112060546875}

    const percentageA = await page.innerText(".ms-venn-diagram__circle__detail span >> nth=0");
    console.log(percentageA);
    const percentageB = await page.innerText(".ms-venn-diagram__circle__detail span >> nth=1");
    console.log(percentageB);

    // Choose a different product 
    await page.click("text=Choose another product >> nth=1");
    await page.click("text=Search for a product");
    await page.click('div:nth-of-type(4)[tabindex="-1"]');

    // get UPDATED venn diagram sizes and percentages
    const newCircleASize = await page.locator('.ms-venn-diagram__circle__detail >> nth=0').boundingBox(); // A
    console.log(newCircleASize);
    const newCircleBSize = await page.locator('.ms-venn-diagram__circle__detail >> nth=1').boundingBox(); // B
    console.log(newCircleBSize);

    const newPercentageA = await page.innerText(".ms-venn-diagram__circle__detail span >> nth=0");
    console.log(newPercentageA);
    const newPercentageB = await page.innerText(".ms-venn-diagram__circle__detail span >> nth=1");
    console.log(newPercentageB);

    // Assert venn diagram numbers and size should update
    expect(percentageA).not.toBe(newPercentageA);
    expect(percentageB).not.toBe(newPercentageB);
    expect(circleASize).not.toBe(newCircleASize);
    expect(circleBSize).not.toBe(newCircleBSize);

});