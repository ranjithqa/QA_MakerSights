const {test,expect} = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")))
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashBoardPage} = require('../pageobjects/DashBoardPage');
const {SurveyCreatorPage} = require('../pageobjects/SurveyCreatorPage');
//const faker = require('faker');

test('verify dynata panel survey - sketch review', async({page}) => {
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

    await page.click("button:below(:text('Product Specific Editor'))");
    await page.fill('[name="star-low"]', "No");
    await page.fill('[name="star-high"]', "Yes");
    await page.click('[aria-label="Cancel"]:right-of([name="star-high"])');
    await assertText(page, "Never", { selector: '[global-view="true"] [e-name="star-low"]' });
    await assertText(page, "Definitely", { selector: '[global-view="true"] [e-name="star-high"]' });

    // test editor: edit star rating scale
    await page.click("button:below(:text('Product Specific Editor'))");
    await page.fill('[name="star-low"]', "No");
    await page.fill('[name="star-high"]', "Yes");
    
    // test editor: edit new question star rating scale
    const question = faker.commerce.productMaterial();
    await page.fill('[type="text"]', question);
    await page.click('[name="questionForm"][aria-hidden="false"] [type="submit"]');
    await assertText(page, "No", { selector: '[global-view="true"] [e-name="star-low"]' });
    await assertText(page, "Yes", { selector: '[global-view="true"] [e-name="star-high"]' });
    await assertText(page, question, { selector: '[global-view="true"] .question-text' });

    // test editor: add single/multiple select response with semicolons 
    await page.click(`.column-two.flex-100 [ng-click="addFollowUp('choice', selectedQuestionIndex)"]`);
    const answer1 = faker.commerce.productAdjective();
    const answer2 = faker.commerce.productName();
    const answer3 = faker.commerce.productMaterial();
    await page.waitForTimeout(5000);
    await page.fill('input[placeholder="Type answer, press enter after each (max:6)"]:visible', `${answer1};${answer2};${answer3};`);
    await page.press('input[placeholder="Type answer, press enter after each (max:6)"]:visible', 'Enter');

    //test editor: remove single/multiple select response
    await assertText(page, answer2, { selector: '[aria-posinset="2"] :visible' });
    await assertText(page, answer3, { selector: '[aria-posinset="3"] :visible' });
    var answers= page.locator(".md-chip-content");
    var answersCount = await answers.count();
    await page.click('[aria-label="Remove question"]:visible');
    var afterAnswersCount = await answers.count();
    assert(answersCount > afterAnswersCount);
    await page.click("text=Next");

    // test editor: add/remove segmentation question
    await page.click("text=Add Question");
    await page.click("text=What's your zipcode?");
    await page.click(".segmentation-questions-modal .ms-ds-button--variant-solid");
    await assertText(page, "What's your zipcode?");
    await page.click(`[data-tip="Remove question from test"]:right-of(:text("What's your zipcode?"))`);
    await page.click("button >> text=Delete");
    await assertNotText(page, "What's your zipcode?");
    await page.click('button:text("Next")');
    await page.click("text=Skip It");
    await assertText(page, "Great job, looks like you’re just about done!");

    // test editor: change link type
    await page.selectOption(".audience-type-select", "recruited audience");
    await assertText(page, "Recruited Audience");
});



// // test editor: change link type
// await page.selectOption(".audience-type-select", "social");
// await assertText(page, "Social Audience");

// // test editor: change link audience
// await page.selectOption(".consumer-profile-select", "61a701aefa250df1c1196572" );
// await assertElement(page, '[alt="Man 1"]');

// // test editor: view audience properties
// await page.click('[data-icon="info-circle"]');
// await assertElement(page, "wizard-international-links");
// await page.click("text=Got It");

// // publish test
// await page.click("text=Ready to Send");
// await page.click("text=Yes, publish");
// await assertText(page, "Campaign published.");

// // delete test
// await page.click(':text("All Tests")');
// await page.click(`.grow:right-of(:text("${testName}"))`);
// await page.click(".open .dropdown-item >> text='Delete'");
// await assertText(page, "Delete Test");
// await page.click("text=Yes");

// // assert test deleted
// await assertNotText(page, testName);
