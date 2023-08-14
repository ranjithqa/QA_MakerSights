const { expect } = require("@playwright/test");

class BrandSettingsPage
{
    constructor(page)
    {
        this.page = page;
        this.brandsettings = page.locator("//a[contains(text(),'Settings')]");

        //general
        this.general = page.locator("//div[text()='General']");
        this.brandname = page.locator("(//label[text()='Brand Name']/following::input)[1]");
        this.webstite = page.locator("(//input[@class='ms-text-input__input'])[2]");
        this.changedefaultcountry = page.locator("//button[text()='Change Default Country']");
        this.deletebrandlogo = page.locator("//button[@aria-label='Delete the Image']");
        this.browsefile = page.locator("//button[@class='uppy-u-reset uppy-Dashboard-browse']");
        this.advancedoptions = page.locator("(//button[@aria-label='Click to expand']//div)[1]");
        this.Autopopulatedemographicdata = page.locator("(//div[@class='react-toggle-track'])[1]");
        this.userid = page.locator("(//input[@class='ms-text-input__input'])[3]");
        this.defaultprimarygroupvalue = page.locator("//label[text()='Default Primary Group Value']/following-sibling::div");
        this.defaultprimarygroupsort = page.locator("//label[text()='Default Primary Group Sort']/following-sibling::div");
        this.defaultsecondarygroupvalue = page.locator("//label[text()='Default Secondary Group Value']/following-sibling::div");
        this.defaultsecondarygroupsort = page.locator("//label[text()='Default Secondary Group Sort']/following-sibling::div");
        this.defaultorderbyvalue = page.locator("//label[text()='Default Order By Value']/following-sibling::div");
        this.defaulttype = page.locator("//label[text()='Default Type']/following-sibling::div");
        this.defaultdisplaystyle = page.locator("//label[text()='Default Display Style']/following-sibling::div");
        this.brandsettingstitle = page.locator("ms-brand-settings__header__settings-title");
        this.brandupdated = page.locator("//div[contains(text(),'Brand updated.')]");

        //decision names
        this.decisionnametab = page.locator("//div[text()='Decision Names']");
        this.addnewdecisionname = page.locator("//button[text()='Add New Decision Name']");

        this.usertab = page.locator(':text("Users")');
        


    }

    async editBrandName()
    {
        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.general.click();
        }
        var oldbrandName = await this.brandname.inputValue();
        await this.brandname.fill('Updated Brand Name');
        expect(this.brandname).toHaveValue('Updated Brand Name')
        await this.brandname.fill(oldbrandName);

    }

    async editBrandUrl()
    {
        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.general.click();
        }
        var oldbrandUrl = await this.webstite.inputValue();
        await this.webstite.fill('Updated URL');
        expect(this.webstite).toHaveValue('Updated URL');
        await this.webstite.fill(oldbrandUrl);

    }

    async otherSettings ()
    {
        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.general.click();
        }

        // //groupvalue
        // const rndInt = Math.floor(Math.random() * 6) + 1

        // group sort
        // var sort = ["ascending","descending"];
        // var random = Math.floor(Math.random() * sort.length);
        // var randomSort = value[random];


        await this.defaultprimarygroupvalue.click();
        await this.page.click(".ms-select-single__option:nth-of-type(15)");
        expect(this.brandupdated).toBeVisible

        await this.defaultprimarygroupsort.click();
        await this.page.click(".ms-select-single__option:has-text('Descending')");
        expect(this.brandupdated).toBeVisible

        await this.defaultsecondarygroupvalue.click();
        await this.page.click(".ms-select-single__option:nth-of-type(15)");
        expect(this.brandupdated).toBeVisible

        await this.defaultsecondarygroupsort.click();
        await this.page.click(".ms-select-single__option:has-text('Ascending')");
        expect(this.brandupdated).toBeVisible

        await this.defaultorderbyvalue.click();
        await this.page.click(".ms-select-single__option:nth-of-type(15)");
        expect(this.brandupdated).toBeVisible

        await this.defaulttype.click();
        await this.page.click(".ms-select-single__option:has-text('Descending')");
        expect(this.brandupdated).toBeVisible

        await this.defaultdisplaystyle.click();
        await this.page.click(".ms-select-single__option:has-text('style')");
        expect(this.brandupdated).toBeVisible


    }

    async decisionNames()
    {

        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.decisionnametab.click();
        }

    
        // REQ362 Able to see existing Decision names for a brand
        await expect(this.page.locator("text=Concept")).toBeVisible();
        await expect(this.page.locator("text=Other").first()).toBeVisible();
        await expect(this.page.locator("text=Sketch Review")).toBeVisible();
        await expect(this.page.locator("text=Line Adoption")).toBeVisible();
        await expect(this.page.locator("text=Sell-in")).toBeVisible();

        // clean test
        // var lastitem = await this.page.locator("//input[@value='New Decision Name']").inputValue();
        // if (lastitem.slice(0, -5) == `QA Decision`) 
        // {
        //     const deleteIcon = this.page.locator(`.brand-settings-decision-point__delete-button`).last();
        //     await deleteIcon.click();
        //     await this.page.click(".bottom-row .ms-ds-button--color-primary");
        // }

        // REQ363 Able to create a new decision name
        const decisionName = `QA Decision ` + Date.now().toString().slice(-4);
        var abbrev = [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", ];
        var random = Math.floor(Math.random() * abbrev.length);
        var randomAbbrev = abbrev[random];

        await this.page.click(':text("Add New Decision Name")');
        //await this.page.waitForTimeout(3000);
        await this.page.fill('input[placeholder="Decision Name"] >> nth=5', decisionName);
        await this.page.mouse.click(0, 0);
        await this.page.waitForTimeout(3000);
        await this.page.fill('[placeholder="Abbrev."] >> nth=-1', randomAbbrev);
        await this.page.mouse.click(0, 0);
        //await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(3000);

        // reload to assert decision name saved
        //await this.page.reload(); // Issue: reloads and redirects to another brand's dashboard
        //await this.page.waitForTimeout(6000);


        await this.page.waitForTimeout(3000);
        expect(await this.page.inputValue('input[placeholder="Decision Name"] >> nth=5')).toBe(decisionName);
        expect(await this.page.inputValue('input[placeholder="Abbrev."] >> nth=-1')).toBe(randomAbbrev);

        // REQ364 Able to edit a decision name
        const newDecisionName = `QA Decision ` + Date.now().toString().slice(-4);
        var newRandomAbbrev = abbrev[random];
        //await this.page.waitForTimeout(3000);
        await this.page.fill('input[placeholder="Decision Name"] >> nth=5',newDecisionName);
        await this.page.mouse.click(0, 0);
        await this.page.waitForTimeout(3000);
        await this.page.fill('[placeholder="Abbrev."] >> nth=-1', newRandomAbbrev);
        await this.page.mouse.click(0, 0);
        await this.page.waitForTimeout(2000);

        //await this.page.reload(); // Issue: reloads and redirects to another brand's dashboard

        expect(await this.page.inputValue('input[placeholder="Decision Name"] >> nth=5')).toBe(newDecisionName);
        expect(await this.page.inputValue('input[placeholder="Abbrev."] >> nth=-1')).toBe(newRandomAbbrev);

        // REQ365 Able to delete a decision name
        const deleteIcon = this.page.locator(`.brand-settings-decision-point__delete-button`).last();
        await deleteIcon.click();
        await this.page.click(".bottom-row .ms-ds-button--color-primary");
        await this.page.waitForTimeout(1000);
        expect(await this.page.inputValue('input[placeholder="Decision Name"] >> nth=4')).not.toBe(newDecisionName);
        expect(await this.page.inputValue('input[placeholder="Abbrev."] >> nth=-1')).not.toBe(newRandomAbbrev);

        // REQ366 Not able to change Type or delete the decision name if used by a Test
        await expect(this.page.locator(".ms-select-single__control--is-disabled").first()).toBeVisible();
    }

    async changeDefaultCountry()
    {
        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.general.click();
        }

        // constants
        const country1 = "United States";
        const country2 = "United Kingdom";

        // reset default country if needed
        try 
        {
        await expect(this.page.locator(".country")).toHaveText(country1, { timeout: 3000 });
        } 
        catch 
        {
        await this.page.click(':text("Change Default Country")');
        await this.page.click(`:text("${country1}")`);
        await this.page.click('button:has-text("Done")');
        await expect(this.page.locator('[role="alert"]')).not.toBeVisible({ timeout: 10 * 1000 });
        await expect(this.page.locator(".country")).toHaveText(country1);  
        }

        // REQ367 Able to edit the default country
        await this.page.click(':text("Change Default Country")');
        await this.page.click(`:text("${country2}")`);
        await this.page.click('button:has-text("Done")');
        await expect(this.page.locator('[role="alert"]')).not.toBeVisible({ timeout: 10 * 1000 });
        await expect(this.page.locator(".country")).toHaveText(country2);

        // reset default country
        await this.page.click(':text("Change Default Country")');
        await this.page.click(`:text("${country1}")`);
        await this.page.click('button:has-text("Done")');
        await expect(this.page.locator('[role="alert"]')).not.toBeVisible({ timeout: 10 * 1000 });
        await expect(this.page.locator(".country")).toHaveText(country1);
    }

    async createAndDeleteUser()
    {
        if (await this.brandsettingstitle !== null )
        {
        await this.brandsettings.click();
        await this.usertab.click();
        }

        const email = "makersights07@gmail.com"

        await expect(this.page.locator(':text("makersights+qa@qawolf.email")')).toBeVisible();

        // REQ371 Able to create a user
        await this.page.click(':text("Add User(s)")');
        await this.page.fill('[placeholder="Type email addresses separated by commas (,)"]', email);
        await this.page.click(".is-active .ms-ds-button--color-primary");
        await expect(this.page.locator(`:text("${email}")`)).toBeVisible();

        // accept invite and set password
        //const { urls } = await waitForMessage();
        // const context2 = await browser.newContext();
        // const page2 = await context2.newPage();
        // await page2.goto(urls[0]);
        // await expect(page2.locator('text=Accept your invitation to sign up | MakerSights Workspace')).toBeVisible();
        // await page2.fill("#password", process.env.DEFAULT_PASSWORD);
        // await page2.click(':text("Continue")');
        // await expect(page2.locator('text=My Assortments')).toBeVisible();
        // await page2.close();

        // REQ370 Able to activate & deactivate a user
        let activeToggle = this.page.locator(`.brand-settings-users__row .ms-toggle-switch`).last();
        await activeToggle.click();
        await expect(this.page.locator('text=User is successfully deactivated.')).toBeVisible();
        await this.page.waitForTimeout(1000);
        await activeToggle.click();
        await expect(this.page.locator('text=User is successfully activated.')).toBeVisible();

        // REQ373 Able to send password reset email to your user
        const after = new Date();
        let resetPassword = this.page.locator(`[aria-label="Reset Password"]`).last();
        await resetPassword.click();

        // // REQ374 Assert password reset email received
        // const {subject, urls} = await waitForMessage({ after });
        // assert(subject.includes('Change Password'));

        // // reset password
        // const context3 = await browser.newContext();
        // const page3 = await context3.newPage();
        // await page3.goto(urls[urls.length - 4]);
        // await expect(page3.locator(':text("Set Password")')).toBeVisible();
        // await page3.fill('#password-reset', process.env.DEFAULT_PASSWORD + "Edited");
        // await page3.fill("#re-enter-password", process.env.DEFAULT_PASSWORD + "Edited");
        // await page3.click(':text("Reset password")');
        // await expect(page3.locator('text=Password Changed!')).toBeVisible();
        // await expect(page3.locator('text=Your password has been changed successfully.')).toBeVisible();
        // await page3.click(':text("Back to MakerSights Workspace")');

        // // log in with new password
        // await expect(page3.locator(':text("Welcome")')).toBeVisible();
        // await page3.fill("#username", email);
        // await page3.click('[name="action"]');
        // await page3.fill("#password", process.env.DEFAULT_PASSWORD + "Edited");
        // await page3.click('[name="action"]:visible');
        // await expect(page3.locator('[alt="Brand Logo"]')).toBeVisible();

        // able to delete user
        //await this.page.bringToFront();
        let deleteUser = this.page.locator('button#icon-button-DeleteUser>div').last();
        await deleteUser.click();
        let confirmdelete = this.page.locator("//button[contains(text(),'Yes, Remove from ALL Brands')]");
        await confirmdelete.click();
        await expect(this.page.locator("//div[contains(text(),'User could not be deleted.')]")).toBeVisible();


    }

    async addPointbasedValueQuestion ()
    {
        // if (await this.brandsettingstitle !== null )
        // {
        // await this.brandsettings.click();
        // await this.page.click(':text("Segmentation Questions")');
        // }
        // navigate to QA Wolves -> settings -> segmentation questions
        await this.brandsettings.click();
        //await assertText(page, "Brand Settings");
        await this.page.click(':text("Segmentation Questions")');

        // Click Add New button
        await this.page.click(':text("Add New")');

        // Fill in Question title
        const questionTitle = "This is the point based question";
        await this.page.fill(`[placeholder="Title / Question you'd like to ask"]`, questionTitle);

        // Select "Include Point Values" answer type
        await this.page.click('[value="point"]');

        // Fill in Answer 1 with any text
        const answer1 = "first answer";
        await this.page.fill("#option--0", answer1);

        // Fill in Assigned Point Value for Answer 1 with any number
        //const pointValue1 = faker.datatype.number({min: 3, max: 20}).toString();
        const pointValue1 = (Math.floor(Math.random() * 20) + 3).toString();
        await this.page.fill('[placeholder="Point Value 1"]', pointValue1);

        // Fill in Answer 2 with any text
        const answer2 = "Second Answer";
        await this.page.fill("#option--1", answer2);

        // Fill in Assigned Point Value for Answer 2 with any number
        //const pointValue2 = faker.datatype.number({min: 3, max: 20}).toString();
        const pointValue2 = (Math.floor(Math.random() * 20) + 3).toString();
        await this.page.fill('[placeholder="Point Value 2"]', pointValue2);

        // Click Save
        await this.page.click(':text("Save")');

        // confirm saved
        await expect(this.page.locator('[role="alert"]')).toHaveText("Segmentation Question created.");

        await this.page.waitForTimeout(3000);
        await this.page.keyboard.down('End');
       


        // assert segmentation Question created and is in the Segmentation question list
        await expect(this.page.locator(`text=${questionTitle}`)).toBeVisible();
        await expect(this.page.locator(`text=${answer1}`)).toBeVisible();
        //await expect(this.page.locator(`text=${pointValue1}`).first()).toBeVisible();
        await expect(this.page.locator(`text=${answer2}`)).toBeVisible();
        //await expect(this.page.locator(`text=${pointValue2}`).first()).toBeVisible();

        // Toggle on "Enabled by default on test"
        await this.page.click(`.segmentation-item:has-text("${questionTitle}") button >> nth=3`);
        await expect(this.page.locator('[role="alert"]')).toHaveText("Segmentation Question updated.");

        // Go to dashboard
        await this.page.click(':text("Dashboard")');

        // Click Add New Event
        await this.page.click(':text("Add New Event")');

        // Select Type Test
        await this.page.click(':text("Select...")');
        await this.page.click('.ms-select-single__option:has-text("test")');

        // Select an assortment
        await this.page.click(':text("Select...")');
        await this.page.click('.ms-select-single__option:has-text("2023 fall Men\'s Shirts")');

        // Click Add
        await this.page.click('.add-edit-event-modal button:has-text("add")');

        // Click Concept
        await this.page.click('.content-section [role="button"]:has-text("Concept")');

        // FIll in Test Title
        await this.page.fill('[name="title"]', "add point based value q");

        // Choose Purpose of test
        await this.page.click(':text("Choose Purpose(s)")');
        await this.page.click(".ms-select-multiple__menu label");

        // Click Next
        await this.page.click(':text("Next")');
        this.confirmtonext = this.page.locator("//button[text()='Confirm']");
        if (await this.confirmtonext.toBeVisible){await this.page.confirmtonext.click();}

        // Click on an image
        await this.page.click('.product-thumbnail');

        // Click Next
        await this.page.click(':text("Next")');

        // Click Next
        await this.page.click(':text("Next")');

        // assert point-based value question is available
        await expect(this.page.locator(`text=${questionTitle}`)).toBeVisible();
        await expect(this.page.locator(`text=${answer1}`)).toBeVisible();
        //await expect(this.page.locator(`text=${pointValue1}`).first()).toBeVisible();
        await expect(this.page.locator(`text=${answer2}`)).toBeVisible();
        //await expect(this.page.locator(`text=${pointValue2}`).first()).toBeVisible();

        // go back and cleanup question
        await this.page.click('[aria-label="arrow_back"]');
        await this.page.click(':text("Settings")');
        await this.page.click(':text("Segmentation Questions")');
        await this.page.keyboard.down('End');
        await this.page.click(`.segmentation-item:has-text("${questionTitle}") button >> nth=2`);
        await expect(this.page.locator('text=Delete Segmentation Question')).toBeVisible();
        await expect(this.page.locator('text=Are you sure you want to remove this segmentation question?')).toBeVisible();
        await this.page.click(".is-active .ms-ds-button--color-primary");
        await expect(this.page.locator('[role="alert"]')).toHaveText("Segmentation Question deleted.");
        await expect(this.page.locator(`text=${questionTitle}`)).not.toBeVisible();

    }

    async addAndDeleteResponse()
    {
        // go to settings
        await this.page.click(':text("Settings")');

        // go to Segmentation Questions
        await this.page.click(':text("Segmentation Questions")');

        // wait for data to load
        await this.page.waitForTimeout(5000);

        // delete residual questions if present
        await this.page.mouse.wheel(0, 9000) // scroll down to get possible paginated results
        try {
        await expect(page.locator(':text("Add image response")').first())
            .not.toBeVisible({ timeout: 10000 });
        } catch{
        var questions = this.page.locator(':text("Add image response")');

        while (await questions.toBeVisible) {
            // click trash
            await this.page.click('[data-icon="trash"]:right-of(:text("Add image response"))').last();
            await expect(this.page.locator('text=Are you sure you want to remove this segmentation question?')).toBeVisible();
            await this.page.click(`.is-active .ms-ds-button--color-primary:has-text("Delete")`);

            // assert deleted
            await expect(this.page.locator(':text("Segmentation Question deleted.")')).toBeVisible({ timeout: 30000 });
            //await expect(this.page.locator(':text("Segmentation Question deleted.")')).not.toBeVisible({ timeout: 30000 });
        }

        await expect(this.page.locator(':text("Add image response")').first())
        .not.toBeVisible({ timeout: 10000 });
        }
        await this.page.mouse.move(0, 0);
        // add question
        await this.page.click(':text("Add New")');

        // check image
        await this.page.check('[value="singleImage"]');

        // add title
        await this.page.fill(`[placeholder="Title / Question you'd like to ask"]`, "Add image response");

        // add wolf image
        this.page.once('filechooser', async (chooser) => await chooser.setFiles('utils/blacktshirt.jpeg'));
        await this.page.click(':text("Drop file here or browse file")');

        
        // add wolf image name
        await this.page.fill('[role="button"] input', "Choice Wolf");

        // add wolf pack image
        this.page.once('filechooser', async (chooser) => await chooser.setFiles('utils/whiteshirt.jpeg'));
        await this.page.click(':text("Drop file here or browse file")');

        // wait for 3 images to be visible
        await expect(this.page.locator('img'))
        .toHaveCount(2, { timeout: 30000 });

        // add wolf pack image name
        await this.page.waitForTimeout(5000);
        await this.page.fill('[role="button"] input >> nth=-1', "Choice Wolf Pack");

        // click save
        await this.page.click(':text("Save")');

        // assert created
        await this.page.mouse.wheel(0, 9000)
        await expect(this.page.locator(':text("Add image response")').first())
        .toBeVisible({ timeout: 10000 });


        // click edit
        await this.page.click('[data-icon="pencil"]:right-of(:text("Add image response"))');

        // assert images saved
        await expect(this.page.locator('img:left-of(:text("Choice Wolf"))'))
        .toBeVisible();
        await expect(this.page.locator('img:left-of(:text("Choice Wolf Pack"))'))
        .toBeVisible();
        await expect(this.page.locator('img'))
        .toHaveCount(3);

        // remove images
        var closeButtons = this.page.locator('button [data-icon="times"]');
        while (await closeButtons.count()) {
        await this.page.click('button [data-icon="times"]');
        };

        //await this.page.waitForTimeout(5000);
        // check Free Text
        await this.page.check(':text("Free Text")');

        // click save
        await this.page.click(':text("Save")');

        // assert confirm message
        await expect(this.page.locator(':text("Segmentation Question updated.")'))
        .toBeVisible({timeout: 50000});
        // await expect(this.page.locator(':text("Segmentation Question updated.")'))
        // .not.toBeVisible({timeout: 50000});

        // click edit
        await this.page.click('[data-icon="pencil"]:right-of(:text("Add image response"))');

        // check image
        await this.page.check('[value="singleImage"]');

        // assert images removed
        await expect(this.page.locator('img:left-of(:text("Choice Wolf"))'))
        .not.toBeVisible();
        await expect(this.page.locator('img:left-of(:text("Choice Wolf Pack"))'))
        .not.toBeVisible();
        await expect(this.page.locator('img'))
        .toHaveCount(1);

        // close modal
        await this.page.click('.is-active [role="img"]');

        // delete question
        await expect(this.page.locator(':text("Add image response")'))
        .toBeVisible({ timeout: 30000 });

        // click trash
        await this.page.click('[data-icon="trash"]:right-of(:text("Add image response"))');
        await expect(this.page.locator('text=Are you sure you want to remove this segmentation question?')).toBeVisible();
        await this.page.click(`.is-active .ms-ds-button--color-primary:has-text("Delete")`);

        // assert deleted
        await expect(this.page.locator(':text("Segmentation Question deleted.")'))
        .toBeVisible({ timeout: 30000 });
        // await expect(this.page.locator(':text("Segmentation Question deleted.")'))
        // .not.toBeVisible({ timeout: 30000 });
        await expect(this.page.locator(':text("Add image response")'))
        .not.toBeVisible({ timeout: 30000 });

    }

    async segmentationQKeyBehaviour()
    {

        // Click Settings
        await this.page.click('[data-icon="cog"]');

        // Click Segmentation Questions tab
        await this.page.click(':text("Segmentation Questions")');

        // Act:
        // Click Add New
        await this.page.click(':text("Add New")');

        // Enter question title
        await this.page.fill(
        `[placeholder="Title / Question you'd like to ask"]`,
        "question 1"
        );

        // Input an answer in "Answer 1" field
        await this.page.fill("#option--0", "answer 1");

        // Click Tab on keyboard twice
        await this.page.keyboard.press("Tab");
        //await this.page.keyboard.press("Tab");

        // Assert:
        // Assert user mouse is moved to "Answer 2" field
        await expect(
            this.page.locator('[class*="focused"] [placeholder="Answer 2"]')
        ).toBeVisible();

        // exit out of question modal
        await this.page.click(".is-active path");

        // Act:
        // Click Add New
        await this.page.click(':text("Add New")');

        // Enter question title
        await this.page.fill(
        `[placeholder="Title / Question you'd like to ask"]`,
        "question 1"
        );

        // Input an answer in "Answer 1" field
        await this.page.fill("#option--0", "answer 1");

        // Click Enter on keyboard
        await this.page.keyboard.press("Enter");

        // Assert clicking Enter allows user mouse to go to "Answer 2" field
        await expect(
            this.page.locator('[class*="focused"] [placeholder="Answer 2"]')
        ).toBeVisible();

        // Input an answer in "Answer 2"
        await this.page.keyboard.type("answer 2");

        // Click Enter on keyboard
        await this.page.keyboard.press("Enter");

        // Assert:
        // Assert clicking Enter allows user to create "Answer 3" field if "Answer 2" was the last answer option
        await expect(
            this.page.locator('[class*="focused"] [placeholder="Answer 3"]')
        ).toBeVisible();

        // exit out of question modal
        await this.page.click(".is-active path");

        // Act:
        // Click Add New
        await this.page.click(':text("Add New")');

        // Enter question title
        await this.page.fill(
        `[placeholder="Title / Question you'd like to ask"]`,
        "question 1"
        );

        // Input 3 words with semicolons between them (ex: apple; banana; kiwi)
        await this.page.fill("#option--0", "apple; banana; kiwi");

        // Click Enter on keyboard
        await this.page.keyboard.press("Enter");

        // Assert:
        // Assert that answers are separated into their own answer boxes
        await expect(this.page.locator("#option--0")).toHaveValue("apple");
        await expect(this.page.locator("#option--1")).toHaveValue("banana");
        await expect(this.page.locator("#option--2")).toHaveValue("kiwi");

    }

}

module.exports = {BrandSettingsPage}