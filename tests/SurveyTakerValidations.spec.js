const {test,expect} = require('@playwright/test')
const {SurveyTaker2} = require('../pageobjects/SurveyTaker2');

test('verify user can submit a survey with survey taker 2.0', async({page}) => 
{
    const surveyTaker2 = new SurveyTaker2(page);
    await surveyTaker2.goto();
    console.log(await page.title());

    // validate legal screen elements
    await expect(surveyTaker2.makersightslogo).toBeVisible();
    await expect(surveyTaker2.cookiePolicy).toBeVisible();
    await expect(surveyTaker2.enterSurvey).toBeVisible();
    await surveyTaker2.enterSurvey.click();
    
    // validate welcome screen elements
    await expect(surveyTaker2.welcome).toBeVisible();
    await expect(surveyTaker2.welcomeMessage).toBeVisible();
    await expect(surveyTaker2.onwardButton).toBeVisible();
    await surveyTaker2.onwardButton.click();

    // click next on intro screen
    await page.waitForSelector('img');
    await surveyTaker2.next.click();
        
    // answer segmentation questions
    await expect(surveyTaker2.next).toBeDisabled();
    await surveyTaker2.selectFemale.click();
    await surveyTaker2.next.click();

    // answer multi select dropdown question 
    await surveyTaker2.multiSelectDropdown.click();
    await expect(surveyTaker2.next).toBeDisabled();
    await surveyTaker2.firstMultiSelectResponse.click();
    await surveyTaker2.secondMultiSelectResponse.click();
    await surveyTaker2.thirdMultiSelectResponse.click();
    await expect(surveyTaker2.next).toBeEnabled();
    await surveyTaker2.next.click();

    // answer single select dropdown question
    await surveyTaker2.singleSelectDropdown.click();
    await expect(surveyTaker2.next).toBeDisabled();
    await surveyTaker2.selectSingleSelectResponse.click();
    await expect(surveyTaker2.next).toBeEnabled();
    await surveyTaker2.singleSelectDropdown.click();
    await surveyTaker2.selectAnotherSingleSelectResponse.click();
    await surveyTaker2.next.click();

    // answer number question
    await expect(surveyTaker2.next).toBeDisabled();
    await surveyTaker2.typeNumber.click();
    await surveyTaker2.typeNumber.fill("3");
    await surveyTaker2.next.click();

    // answer text question 
    await surveyTaker2.enterTextHere.click();
    await surveyTaker2.enterTextHere.fill("Nikes");
    await surveyTaker2.next.click();

    // answer star rating question
    await surveyTaker2.starRating4.click({ force: true });
    await surveyTaker2.next.click();

    // answer multi text question
    await surveyTaker2.firstMultiTextResponse.click();
    await surveyTaker2.secondMultiTextResponse.click();
    await surveyTaker2.next.click();

    // answer currency question
    await surveyTaker2.typeAmount.click();
    await surveyTaker2.typeAmount.fill("2500");
    await expect(surveyTaker2.currency).toBeVisible();
    await surveyTaker2.next.click();

    // rank text question
    await surveyTaker2.rankResponse1.hover();
    await page.mouse.down();
    await page.mouse.move(0,1500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    await surveyTaker2.next.click();
    
    // likert scale question
    await expect(surveyTaker2.likertQuestion).toBeVisible();
    await surveyTaker2.likertScaleResponse4.click();
    await surveyTaker2.next.click();

    // multi image select and expand image
    await surveyTaker2.imageOption1.click();
    await surveyTaker2.imageOption2.click();

    // const imageUrl = 'https://d1q02u2o70cucv.cloudfront.net/profile_pictures/5f69bdef3938400094ab46b6fc960444.png';
    // await surveyTaker2.image.click();
    // await page.waitForResponse(imageUrl);
    await surveyTaker2.next.click();

    // single image select question
    await surveyTaker2.imageSingleOption1.click();
    await surveyTaker2.next.click();

    // rank image question
    await surveyTaker2.rankResponse1.hover();
    await page.mouse.down();
    await page.mouse.move(0,1500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    await surveyTaker2.next.click();

    // long text question
    await surveyTaker2.enterTextHere.click();
    await surveyTaker2.enterTextHere.fill("Clothing #$%^&,.has always served as a complex tapestry woven with threads of necessity, culture, identity, and expression. Since the first leaves or animal skins wrapped around human bodies, clothing has evolved into a multi-faceted industry and an intricate part of our lives.")
    await surveyTaker2.next.click();

    // exit screen
    // await expect(surveyTaker2.thankyouMessage).toBeVisible();
    // await expect(surveyTaker2.subTextThankyou).toBeVisible();

    await page.close();

});


