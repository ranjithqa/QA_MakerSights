const { expect } = require("@playwright/test");

class AllTestsPage{


    constructor(page)
    {
        this.page = page;
        this.alltestspage = page.locator("//a[.='All Tests']");
        this.addeditgroupedtests = page.locator("//button[contains(@class,'ms-ds-button ms-utility-row__button')]");
        this.addeditgroupedtestspopupcloseicon = page.locator("(//div[text()='Create/Edit Grouped Test']/following-sibling::div)[1]");
        this.alltestssearchbar = page.locator("//input[@placeholder='Search...']");
        this.kebabmenu = page.locator("(//button[@id='icon-button-'])[2]");
        this.kebabpreview = page.locator("//div[text()='Preview']");
        this.kebablinks = page.locator("//div[text()='Links']");
        this.kebabduplicate = page.locator("(//div[text()='Preview']/following-sibling::div)[2]");
        this.kebabdelete = page.locator("(//div[text()='Preview']/following-sibling::div)[2]");
        this.duplicatepopupinclude = page.locator("//button[text()='Include']");
        this.duplicatepopupexclude = page.locator("//button[text()='Exclude']");
        this.duplicatepopupcloseicon = page.locator("(//div[@class='close-icon'])[2]")
        this.delete = page.locator("//div[text()='Delete']");
        this.deletetestcancelbutton = page.locator("(//button[text()='Cancel'])[1]");
        this.deletetestyesbutton = page.locator("//button[text()='Yes']");
        this.deletetestcloseicon = page.locator("(//div[text()='Delete Test']/following-sibling::div)[1]");
        this.welcomeheading = page.locator("/*[@id='tab-content-0']/div/md-content/div/div[2]/span/h1");
        this.gobacklink = page.locator("//div[text()='Go Back']");
        
        //Decision Points
        this.globallinereviewfilter = page.locator("(//input[@type='checkbox'])[1]");
        this.sketchreviewfilter = page.locator("(//input[@type='checkbox'])[2]");
        this.conceptfilter = page.locator("(//input[@type='checkbox'])[3]");

         //Status
         this.closedfilter = page.locator("(//label[text()='Status']/following::input)[1]");
         this.draftfilter = page.locator("(//span[text()='Closed']/following::input)[1]");
         
        //coloumn filters
        this.coloumntestname = page.locator("(//div[@class='rt-resizable-header-content'])[1]");
        this.coloumnactivitydate = page.locator("(//div[@class='rt-resizable-header-content'])[2]");
        this.coloumncountries = page.locator("(//div[@class='rt-resizable-header-content'])[3]");
        this.coloumndecisionpoint = page.locator("//div[text()='Decision Point']");
        this.coloumnstatus = page.locator("//div[text()='Status']");
        this.coloumnresponses = page.locator("//div[text()='# Responses']");


        //Grouped Tests popup
        this.closepopupwindow = page.locator("(//div[@class='close-icon'])[1]");
        this.howdogroupedtestswork = page.locator("//div[@class='Collapsible__trigger Collapsible__trigger--text']");
        this.addnewgrouptestsicon = page.locator("//div[@data-for='icon-button-tooltip-CreateNewGroupedTests']");
        this.existinggroupedtestsdropdown = page.locator("(//div[@class='ms-select-single__value-container css-z1x3vh'])[1]");
        this.existingtestssearchbar = page.locator("(//input[@class='ms-text-input__input'])[1]");
        this.groupeditorsearchbar = page.locator("(//input[@class='ms-text-input__input'])[2]");
        this.groupeditordropdown = page.locator("//div[contains(@class,'ms-select-single__value-container ms-select-single__value-container--has-value')]");
        this.groupeditordelete = page.locator("");
        this.groupeditorrespondentlimit = page.locator("(//input[@class='ms-text-input__input'])[3]");
        this.creategroupedtest = page.locator("//button[text()='Create Grouped Test']");
        this.savegroupedtest = page.locator("//button[text()='Save Grouped Test']");
        this.alltestssearchbar = page.locator("//input[@placeholder='Search...']");

    }

        async validAddeditgroupedtests()
        {
            await this.alltestspage.click();
            await this.addeditgroupedtests.click();
            await this.addeditgroupedtestspopupcloseicon.click();
            await this.alltestssearchbar.click();
        }

        async validPreview()
        {
            await this.alltestspage.click();
            await this.kebabmenu.click();
            
        }

        async validLinks()
        {
            await this.kebablinks.click();

        }

        async validDuplicate()
        {
            await this.kebabduplicate.click();
            await this.duplicatepopupinclude.click();
            //console.log(await this.page.locator(".Toastify__toast-body").textContent());
            //await expect(page.locator(".Toastify__toast-body")).toContainText('survey duplicated');
            await this.gobacklink.click();
            await this.alltestspage.click();
            await this.kebabmenu.click();
            await this.kebabduplicate.click();
            await this.duplicatepopupexclude.click();
            //console.log(await this.page.locator(".Toastify__toast-body").textContent());
            await this.gobacklink.click();
            await this.alltestspage.click();
            await this.kebabmenu.click();
            await this.kebabduplicate.click();
            await this.duplicatepopupcloseicon.click();

        }

        async validDelete()
        {
            await this.delete.click();
            await this.deletetestcancelbutton.click();
            await this.alltestspage.click();
            await this.kebabmenu.click();
            await this.delete.click();
            await this.deletetestcancelbutton.click();
            await this.alltestspage.click();
            await this.kebabmenu.click();
            await this.delete.click();
            await this.deletetestcloseicon.click();
            await this.alltestspage.click();
            await this.kebabmenu.click();
            await this.delete.click();
            await this.deletetestyesbutton.click();
        }

        async validGlobalLineReviewFilters()
        {
            await this.alltestspage.click();
            await this.globallinereviewfilter.click();
            
        }

        async validSketchReviewFilters()
        {
            await this.alltestspage.click();
            await this.sketchreviewfilter.click();
            
        }

        async validConceptFilters()
        {
            await this.alltestspage.click();
            await this.conceptfilter.click();
            
        }

        async validClosedFilters()
        {
            await this.alltestspage.click();
            await this.closedfilter.click();
            
        }

        async validDraftFilters()
        {
            await this.alltestspage.click();
            await this.draftfilter.click();
            
        }

        async validColumnHeaderFilters()

        {
            await this.alltestspage.click();
            await this.coloumntestname.click();
            await this.coloumnactivitydate.click();
            await this.coloumncountries.click();
            await this.coloumndecisionpoint.click();
            await this.coloumnstatus.click();
            await this.coloumnresponses.click();
            
        }

        async goToResults() {
            await this.alltestspage.click();
            await this.alltestssearchbar.fill("2022 - Fall - Mens Shirts");
            await this.kebabmenu.click();
        }


        async validSharedLink()
        {
            await this.page.click("text=All Tests");
            await this.page.click(':text("Closed")');
            await this.page.click("(//span[@class='test-title'])[2]");
            console.log(await this.page.locator("//span[text()='Results |']").textContent())

           // open dropdown
            await this.page.click('[data-testid="dropdown-icon"]');
            console.log(await this.page.locator("//div[text()='Share Link']").textContent());
            console.log(await this.page.locator("//div[text()='Live Link']").textContent());
            console.log(await this.page.locator("//div[text()='Preview']").textContent());
            console.log(await this.page.locator("//div[text()='Advocates Lead List']").textContent());
            console.log(await this.page.locator("//div[text()='Product Results CSV']").textContent());
            console.log(await this.page.locator("//div[text()='Respondents CSV']").textContent());
            console.log(await this.page.locator("//div[text()='Campaign Share Links']").textContent());
            //await this.page.bringToFront();

            // share link
            await this.page.click("//div[text()='Share Link']");
            await this.page.click("text=Generate New Share Link");
            //console.log(await this.page.locator("//div[text()='Share token created successfully.']").textContent());
            await this.page.bringToFront();
            await this.page.click('[data-icon="trash"] >> nth=-1');
            await this.page.click(".ms-ds-button--color-primary:has-text('Yes')");
            //console.log(await this.page.locator("//div[text()='Share token deleted successfully.']").textContent());
            await this.page.click('.is-active [role="img"]');
            await this.page.click('[data-testid="dropdown-icon"]');
            const page1Promise = this.page.waitForEvent('popup');
            await this.page.getByText('Live Link').click();
            await this.page.waitForLoadState();
            const page1 = await page1Promise;
            await page1.getByText('Thanks for offering to share your feedback with us. This study is now closed, bu').click();
            await page1.getByRole('heading', { name: 'Time\'s up!' }).click();
            const page2Promise = this.page.waitForEvent('popup');
            await this.page.bringToFront();
            await this.page.getByText('Preview').click();
            await this.page.waitForLoadState();
            const page2 = await page2Promise;
            //await page2.getByText('As one of our most valued customers, we"re excited to have you help us tailor our upcoming product line to you. We can"t wait to hear what you think!').click();
            await page2.getByRole('heading', { name: 'Welcome!' }).click();
            //const page3Promise = this.page.waitForEvent('popup');
            await this.page.bringToFront();
            
            // Advocates lead list
            await this.page.mouse.click(250, 250);
            await this.page.click('[data-testid="dropdown-icon"]');
            await this.page.click("text=Advocates Lead List");
            console.log(await this.page.locator("//div[text()='Download Advocate Lists']").textContent());
            console.log(await this.page.locator("//div[text()='An advocate is a customer that rates a particular product 4 or 5 stars.']").textContent());
            console.log(await this.page.locator("//span[text()='Embroidered Tee - 1111110 - GBEA']").textContent());
            console.log(await this.page.locator("//span[text()='Core Heavy Bag Tee - 11111122 - NAV']").textContent());
            await this.page.click("(//button[text()='Download advocate list'])[1]");
            await this.page.mouse.click(0, 0);
            await this.page.click('[data-testid="dropdown-icon"]');
            await this.page.click("//div[text()='Product Results CSV']");
            await this.page.click("//div[text()='Respondents CSV']");  

            }

            async additionalDeepDive()
            {
                await this.page.click("text=All Tests");
                await this.page.fill('[placeholder="Search..."]', "2022");
                await this.page.click(":text-is('2022 - Fall - Mens Shirts')");
                //await assertText(this.page, "Results");

                // insight cards view
                await this.page.click("text=Insight Cards");
                //await assertText(this.page, "Embroidered Tee - 1111110 - GBEA");

                // enter 'deep dive' view by clicking view more hyperlink
                await this.page.click("text=View More");

                // should be able to see Detractors (sum of 1 and 2 stars, Advocates(sum of 4 and 5 stars), and graph with tooltips when hovered
                // detractors percentage shown
                await expect(this.page.locator(".ms-deep-dive-early-stage-stats__detractors-percentage")).toContainText('23');
                // advocates percentage shown
                await expect(this.page.locator(".ms-deep-dive-early-stage-stats__advocates-percentage")).toContainText('55');

                // // select from United States
                // await this.page.click("text=United States");
                // await this.page.hover("g:nth-of-type(9)");
                // await assertText(this.page, '22%');

                // filter and original labels reflect in insight cards
                await this.page.click("text=United States");
                await expect(this.page.locator('text="Filtering results..."')).toBeHidden({ timeout: 60000 });

                await this.page.hover('[rx="0"]');
                await expect(this.page.locator('.ms-bar-chart div[style*="position: absolute"]').first()).toContainText('Filtered:');
                //await expect(this.page.locator('.ms-bar-chart div[style*="position: absolute"]').first()).toContainText('36 (14%)');
                await expect(this.page.locator('[rx="0"]').first()).toHaveAttribute('fill', "#4178ca");

                await this.page.hover("g:nth-of-type(9)");
                await expect(this.page.locator('.ms-bar-chart div[style*="position: absolute"]').first()).toContainText('Original:');
                await expect(this.page.locator('.ms-bar-chart div[style*="position: absolute"]').first()).toContainText('157 (22%)');
                await expect(this.page.locator('g:nth-of-type(9) rect').first()).toHaveAttribute('fill', "#d2d7de");

                // should be able to see product questions with polarity("Positive" or "Negative") and  number of respondents // For which part?
                //await assertText(this.page, 'Positive Respondents (136)');
                //await assertText(this.page, 'Negative Respondents (128)');

                // For free text questions, should be able to see "Summary" and "All" tabs
                // await assertText(this.page, 'Summary');
                // await assertText(this.page, 'All');

                // // should be able to see the list of key words included to the answers and number of appearance in responses. can confirm by clicking item line on the list.
                // await expect(this.page.locator('text="good"')).toBeVisible();
                // await expect(this.page.locator('text="cool"')).toBeVisible();
                await this.page.hover("dd");

                // should be able to see the answer options, percent of response
                //await assertText(this.page, "Price");
                //await assertText(this.page, "20.8%"); // Design / Style
                //await assertText(this.page, "Color / Print"); // Color / Print

                //ignore below
                await this.page.click("button:nth-of-type(2)");
                await this.page.click(':text("Summary")');
                //

                // should be able to see numbers of votes on tooltip by hovering on graph
                // await this.page.hover('[data-tip="Strong Driver, with 148 votes"]');

                await this.page.hover(".ms-results-question-response-list-item__preference");

                //await assertText(this.page, "Strong Driver, with 148 votes");
                //await assertText(this.page, "Strong drivers have a higher impact on sentiment.");

                // on All tab, should be able to search responded answers
                await this.page.click("button >> text='All'");
                await expect(this.page.locator('text="bear" >> nth=0')).toBeVisible();

                // can click "show more" button to paginate 15 answers at a time and "View Less" to hide 15 answers
                const responseListItem = this.page.locator('ol').locator('li');
                await expect(responseListItem).toHaveCount(15);
                await this.page.click("text=Show More");
                await expect(responseListItem).toHaveCount(30);
                await this.page.click("text=Show Less");
                await expect(responseListItem).toHaveCount(15);

                // can download CSV file
                // const csvfile = await downloadFile(this.page, "text=Download the CSV to explore further")
                // assert(csvfile.includes('respondent_id'));
                // assert(csvfile.includes('survey_id'));
                // assert(csvfile.includes('question_id'));

                // all product thumbnails associated with the test
                //await expect(this.page.locator('.image-container').count()).toBe(27);

                // product details (product name, demand/sentiment score, and label) when hovered.
                await this.page.hover('[data-index="2"]', {delay: 500});
                //await assertText(this.page, "Jack");
                //await assertText(this.page, "60");

                // container become carousel when all product cannot fit into the container
                await this.page.click(".fa-chevron-right");
                await this.page.hover('[data-index="5"]');
                //await assertText(this.page, "California");

                //  can change translation of responses and see the correct translation appear on the XX tab and XX tab
                await this.page.click("text=Germany");
                await this.page.waitForTimeout(1500);
                await this.page.click("button:nth-of-type(2)"); // Select from all
                await expect(this.page.locator('text="good"')).toBeHidden();
                await expect(this.page.locator('text="cool"')).toBeHidden();
                await expect(this.page.locator('text="Preis"').first()).toBeVisible();
            }
        async goToSalesProjectionSurvey() {
            await this.alltestssearchbar.fill("2019 - Holiday - Mens - Tops");
            await this.kebabmenu.click();
        }



           
}
    
module.exports = {AllTestsPage}