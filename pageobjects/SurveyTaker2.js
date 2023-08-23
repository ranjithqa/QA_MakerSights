class SurveyTaker2{

    constructor(page)
    {
        this.page = page;

        // legal screen
        this.makersightslogo = page.locator("[alt='MakerSights logo']");
        this.enterSurvey = page.locator(":text('Enter')");
        this.cookiePolicy = page.locator("text=By continuing with this experience presented by MakerSights, you agree to our cookie policy.");

        // welcome screen
        this.welcome = page.locator(":text('Welcome!')");
        this.welcomeMessage = page.locator(":text('As one of our most valued customers')");
        this.onwardButton = page.locator(":text('Onward!')");
        this.starNowButton = page.locator(":text('Start now')");

        // intro screen
        this.next = page.locator(":text('Next')");

        // segemtation questions
        this.selectMale = page.locator(":text('Male')");
        this.selectFemale = page.locator(":text('Female')");
        this.selectNonBinary = page.locator(":text('Non-Binary')");  
        this.selectPreferNotToSay = page.locator(":text('Prefer not to say')");

        // select multi dropdown
        this.multiSelectDropdown = page.locator(".mantine-Input-input");
        this.firstMultiSelectResponse = page.locator(":text('Tennis')");
        this.secondMultiSelectResponse = page.locator(":text('Basketball')");
        this.thirdMultiSelectResponse = page.locator(":text('Cycling')");

        // single select dropdown 
        this.singleSelectDropdown = page.locator("[placeholder='Select one']");
        this.selectSingleSelectResponse = page.locator(":text('Tennis')");
        this.selectAnotherSingleSelectResponse = page.locator(":text('Ultimate Frisbee')");

        // number question
        this.typeNumber = page.locator("[placeholder='Type a number']");

        // text question
        this.enterTextHere = page.locator("[placeholder='Enter text here']");

        // star rating question
        this.starRating1 = page.locator(".mantine-Rating-label >> nth=1");
        this.starRating2 = page.locator(".mantine-Rating-label >> nth=2");
        this.starRating3 = page.locator(".mantine-Rating-label >> nth=3");
        this.starRating4 = page.locator(".mantine-Rating-label >> nth=4");
        this.starRating5 = page.locator(".mantine-Rating-label >> nth=5");

        // select multiple text question
        this.firstMultiTextResponse = page.locator(".mantine-Checkbox-body >> nth=0");
        this.secondMultiTextResponse = page.locator(".mantine-Checkbox-body >> nth=3");

        // currency question
        this.typeAmount = page.locator("[placeholder='Type a number']");
        this.currency = page.locator(":text('USD')");

        // rank text question
        this.rankResponse1 = page.locator("[role='button'][aria-roledescription='sortable'] >> nth=0");
        this.rankResponse2 = page.locator("[role='button'][aria-roledescription='sortable'] >> nth=1");
        this.rankResponse3 = page.locator("[role='button'][aria-roledescription='sortable'] >> nth=2");
        this.rankResponse4 = page.locator("[role='button'][aria-roledescription='sortable'] >> nth=3");
        this.rankResponse5 = page.locator("[role='button'][aria-roledescription='sortable'] >> nth=4");


        // likert scale question
        this.likertQuestion = page.locator(":text('Select an option from 1 (Very unlikely) to 5 (Very Likely)')");
        this.likertScaleResponse1 = page.locator(":text('1')");
        this.likertScaleResponse2 = page.locator(":text('2')");
        this.likertScaleResponse3 = page.locator(":text('3')");
        this.likertScaleResponse4 = page.locator(":text('4')");
        this.likertScaleResponse5 = page.locator(":text('5')");

        // multi image select question
        this.imageOption1 = page.locator(".mantine-Checkbox-input >> nth=0");
        this.imageOption2 = page.locator(".mantine-Checkbox-input >> nth=1");
        this.imageOption3 = page.locator(".mantine-Checkbox-input >> nth=2");
        this.imageOption4 = page.locator(".mantine-Checkbox-input >> nth=3");
        this.image = page.locator(".mantine-Image-image >> nth=0");

        // single image select question
        this.imageSingleOption1 = page.locator(".mantine-Radio-radio >> nth=2");

        // exit screen
        this.thankyouMessage = page.locator(":text('Thank You!')");
        this.subTextThankyou = page.locator(":text('We can't wait to read your thoughts and use your feedback to make our upcoming product line as tailored to you as possible!')");
    }

    async goto()
    {
        await this.page.goto("https://qa-go.makersights.com/v2/1gAFQyol/legal/648167243dfdaab236206d98");
    }

}

module.exports = {SurveyTaker2};