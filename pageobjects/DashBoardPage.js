class DashBoardPage
{
    constructor(page)
    {
        this.page = page;
        this.dashboard = page.locator("//a[contains(text(),'Dashboard')]");
        this.addnewassortment = page.locator("//button[text()='Add New Assortment']");
        this.latestassortment = page.locator("(//div[@class='left-section'])[1]");
        this.nextassortment = page.locator("//button[@id='icon-button-Next']");
        this.previousassortment = page.locator("//button[@id='icon-button-Previous']");
        this.assortmentkebabmenu = page.locator("(//button[@data-testid='dropdown-icon'])[1]");
        this.addnewevent = page.locator("//button[text()='Add New Event']");

        //filters
        this.allseasons = page.locator("/div[text()='All Seasons']");
        this.fall = page.getByLabel("fall");
        this.holiday = page.getByLabel("holiday");
        this.holiday = page.getByLabel("resort");
        this.holiday = page.getByLabel("spring");
        this.holiday = page.getByLabel("summer");
        this.allseasonscloseicon = page.locator("(//div[@class='ms-select-multiple__indicators css-1wy0on6']//div)[1]");

        




        this.allyears = page.locator("(//div[@class='ms-select-multiple__indicators css-1wy0on6'])[2]");
        this.allgenders = page.locator("(//div[@class='ms-select-multiple__indicators css-1wy0on6'])[3]");
        this.allcategories = page.locator("//div[text()='All Categories']");
        this.alleventtypes = page.locator("//div[text()='All Event Types']");
        this.allteststatus = page.locator("//div[text()='All Test Status']");
        this.calendar = page.locator("//input[@id='homepage-date-filter']");

        //assortment
        this.products = page.locator("//div[contains(text(),'Products')]");
        this.tests = page.locator("(//div[@class='menu-item menu-item--variant-underline'])[1]");
        this.meetings = page.locator("(//div[@class='menu-item menu-item--variant-underline'])[2]");
        this.sharedlearnings = page.locator("(//div[@class='menu-item menu-item--variant-underline'])[3]");
        this.searchbar = page.locator("//input[@placeholder='Search...']");
        this.bulkupload = page.locator("//button[text()='Bulk Upload/Download']");
        this.bulkuploadcloseicon = page.locator("(//div[@class='close-icon'])[2]");
        this.downloadtemplatefile = page.locator("//span[text()='Download Template File']");
        this.downloadcurrentproducts = page.locator("//span[text()='Download Current Products']");
        this.uploadfile = page.locator("//span[text()='Upload File']");
        this.reuploadfile = page.locator("//button[text()='Re-Upload File']");
        this.savebulkupload = page.locator("//button[text()='Save & Continue']");
        this.newproduct = page.locator("//button[text()='New Product']");
        this.productname = page.locator("(//input[@class='ms-text-input__input'])[1]");
        this.productprice = page.locator("(//input[@type='number'])[1]");
        this.assettype = page.locator("(//div[contains(@class,'ms-select-single__indicator ms-select-single__dropdown-indicator')])[2]");
        this.uploadproductimage = page.locator("//button[@class='uppy-u-reset uppy-Dashboard-browse']");
        this.saveproduct = page.locator("//button[text()='Save']");
        this.closeproductpopup = page.locator("(//div[@class='close-icon'])[1]");
        this.primarygroup = page.locator("//select[@class='ms-form-select custom-primary']");
        this.secondarygroup = page.locator("//select[@class='ms-form-select custom-secondary']");
        this.orderby = page.locator("//select[@class='ms-form-select custom-tertiary']");
        this.skuselect = page.locator("//div[@class='selected left']");
        this.styleselect = page.locator("//div[text()='Style']");
        this.createtest = page.locator("//button[text()='Create Test']");
        this.primarytest = page.locator("(//div[@role='rowgroup']//div)[1]");
        this.primarytestkebabmenu = page.locator("(//button[@id='icon-button-'])[2]");
        this.createmeeting = page.locator("//button[text()='Create Meeting']");

    }

    async validbulkDownload()
        {
            await this.dashboard.click();
            await this.latestassortment.click();
            await this.bulkupload.click();
            await this.downloadtemplatefile.click();
            await this.downloadcurrentproducts.click();
            await this.bulkuploadcloseicon.click();
        }

    async validbulkUpload()
        {
            await this.dashboard.click();
            await this.latestassortment.click();
            await this.bulkupload.click();

        }

        async validFilters()
        {
            await this.dashboard.click();
            await this.allseasons.click();
            await this.fall.click();
            await this.allseasonscloseicon.click();
            await this.allseasons.click();
            await this.holiday.click();
            await this.allseasonscloseicon.click();
            await this.allseasons.click();
            await this.resort.click();
            await this.allseasonscloseicon.click();
            await this.allseasons.click();
            await this.spring.click();
            await this.allseasonscloseicon.click();
            await this.allseasons.click();
            await this.spring.click();
            await this.allseasonscloseicon.click();

        }
}
module.exports = {DashBoardPage}