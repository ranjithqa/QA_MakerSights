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
        this.deletetestyes = page.locator("(//button[contains(@class,'ms-ds-button ms-modal__content-button')])[2]");
        this.deletetest = page.locator("(//button[contains(@class,'ms-ds-button ms-modal__content-button')])[1]");
        this.welcomeheading = page.locator("/*[@id='tab-content-0']/div/md-content/div/div[2]/span/h1");
        this.gobacklink = page.locator("//div[text()='Go Back']");
        
        //Filters
        this.conceptfilter = page.locator("(//input[@class='ms-checkbox-input__input'])[1]");
        this.sellinfilter = page.locator("(//input[@class='ms-checkbox-input__input'])[2]");
        this.investmentreviewfilter = page.locator("(//input[@class='ms-checkbox-input__input'])[3]");
        this.sketchreviewfilter = page.locator("(//span[text()='Investment Review']/following::input)[1]");
        this.lineadoptionfilter = page.locator("//span[text()='Line Adoption']");
        this.otherfilter = page.locator("(//span[text()='Line Adoption']/following::input)[1]");
        this.malefilter = page.locator("(//label[text()='Gender']/following::input)[1]");
        this.unisexfilter = page.locator("(//span[text()='male']/following::input)[1]");
        this.mensfilter = page.locator("(//span[text()='unisex']/following::input)[1]");
        this.womensfilter = page.locator("//span[contains(text(),\"women's\")]");
        this.girlsfilter = page.locator("//span[contains(text(),\"girls'\")]");
        this.draftfilter = page.locator("(//label[text()='Status']/following::input)[1]");
        this.closedfilter = page.locator("(//span[text()='Draft']/following::input)[1]");
        this.activefilter = page.locator("(//span[text()='Closed']/following::input)[1]");

        //coloumn filters
        this.coloumntestname = page.locator("(//div[@class='rt-resizable-header-content'])[1]");
        this.coloumnactivitydate = page.locator("(//div[@class='rt-resizable-header-content'])[2]");
        this.coloumncountries = page.locator("(//div[@class='rt-resizable-header-content'])[3]");
        this.coloumndecisionpoint = page.locator("//div[text()='Decision Point']");
        this.coloumnstatus = page.locator("//div[text()='Status']");


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
            await this.duplicatepopupcloseicon();

        }

}
    
module.exports = {AllTestsPage}