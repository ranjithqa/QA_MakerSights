const { expect } = require("@playwright/test");

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
        this.addnewassortmentyear = page.locator("(//div[@class='ms-select-single__control css-hpsnpn-control'])[1]");
        this.addnewassortmentyseason = page.locator("//div[text()='Season']");
        this.addnewassortmentcategory = page.locator("//div[text()='Category']");
        this.savenewassortment = page.locator("//button[text()='Save']");
        this.firstassortment = page.locator("(//div[@class='assortment-info'])[1]");
        this.firstassortmentkebabmenu = page.locator("(//button[@data-testid='dropdown-icon'])[1]");
        this.deletenewAssortment = page.locator("(//div[text()='Delete'])[1]");
        this.confirmdeletenewassortment = page.locator("//button[text()='Delete']");


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
        this.expandimage = page.locator("(//img[@class='ms-image__image ms-image__image--contain'])[3]");
        this.firstproduct = page.locator("(//div[@class='image-container'])[1]");
        this.closeproductdetails = page.locator("(//div[@class='close-icon'])[2]");
        this.dashboardtests = page.locator("(//div[text()='Tests'])[2]");
        this.globallinereviewfilter = page.locator("(//input[@type='checkbox'])[1]");
        this.sketchreviewfilter = page.locator("(//input[@type='checkbox'])[2]");
        this.draftfilter = page.locator("(//input[@type='checkbox'])[3]");
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

    async validateProductDetailsView()
    {
        await this.dashboard.click();
        await this.latestassortment.click();
        await this.products.click();
        await this.firstproduct.click();
        await this.expandimage.click();
        await this.closeproductdetails.click();

    }

    async validateTestsOverview()
    {
        await this.dashboard.click();
        await this.latestassortment.click();
        await this.dashboardtests.click();

    }

    async validGlobalLineReviewFilters()
    {
        await this.globallinereviewfilter.click();
        
    }

    async validSketchReviewFilters()
    {
        await this.sketchreviewfilter.click();
        
    }

    async validDraftFilters()
    {
        await this.draftfilter.click();
        
    }

    async addAndDeleteAssortment()
    {
        await this.addnewassortment.click();
        
        // add year
        var years = ["2022", "2023", "2024", "2025", "2026",];
        var random = Math.floor(Math.random() * years.length);
        var randomYear = years[random];
        await this.addnewassortmentyear.click();
        await this.page.click(`.ms-select-single__menu-list >> text=${randomYear}`);

        // add season
        var seasons = ["fall", "holiday", "resort", "spring", "summer"];
        var random = Math.floor(Math.random() * seasons.length);
        var seasonStr = seasons[random];
        await this.addnewassortmentyseason.click();
        await this.page.click(`.ms-select-single__menu-list >> text=${seasonStr}`);
        var capitalizedSeason = seasonStr.charAt(0).toUpperCase() + seasonStr.slice(1);

        // add category
        await this.addnewassortmentcategory.click();
        await this.addnewassortmentcategory.type('Men\'s Shirts')
        await this.page.click(`.ms-select-single__menu-list >> text=Men\'s Shirts`);
    
        await this.savenewassortment.click();

        // assert assortment saved
        //await assertText(page, `${capitalizedSeason} ${randomYear}`);

        // delete assortment
        await this.page.click(`.grow:above(:text("${capitalizedSeason} ${randomYear}"))`);
        await this.page.click(".open :visible");
        //await assertText(page, "Delete Assortment");
        await this.confirmdeletenewassortment.click();
        //await assertNotText(page, `${capitalizedSeason} ${r   andomYear}`);

    }

    async addProductToParentProduct()
    {
        await this.page.click(".dropdown-header");
        await this.page.click("text=QA Static");
        await this.page.click("text=fall 2023Men's Shirts");
        expect(this.page, "Men's Shirts", {
          selector: '[data-testid="assortment-header__details"]',
        }).toBeVisible;
        await this.page.click(".menu-item >> text='Products'");
        
        // create new product
        //await assertText(this.page, "New Product");
        await this.page.click("text=New Product");
        
        // add language to new product
        await this.page.click('[data-icon="plus-circle"]');
        //await assertText(this.page, "Add Language");
        await this.page.click("text=Select...");
        await this.page.click(".ms-select-single__option >> text='Arabic'");
        await this.page.click(".add-language-add-button");
        //await assertText(this.page, "Arabic", {selector: ".active .translation-country-name", });
        await this.page.click("text=English");
        
        // add product name
        //const productName = math.random.words(2);
        function generateRandomWord() {
            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            let productName = "";
          
            for (let i = 0; i < 3; i++) {
              const randomIndex = Math.floor(Math.random() * alphabet.length);
              productName += alphabet[randomIndex];
            }
          
            return productName;
          }
          
          const productName = generateRandomWord();
        await this.page.fill('[placeholder="Product Name (required)"]', productName);
        
        // add product price
        await this.page.fill('[type="number"]', "85");
        
        // new product required fields
        var saveBtn = this.page.locator(".bottom-row button >> text='Save'");
        await expect(saveBtn).toBeDisabled();
        
        // set asset format
        await this.page.click(".ms-select-single__input:above(:text('Style Name'))");
        await this.page.click('.ms-select-single__option >> text="on-body sample"');
        await expect(saveBtn).toBeEnabled();
        
        // set new product to parent
        await this.page.click(":text('Select...')");
        await this.page.click("text=Rufus");
        
        // add image
        this.page.once("filechooser", async (chooser) =>
          await chooser.setFiles("utils/whiteshirt.jpeg")
        );
        await this.page.click("text=browse files");
        await saveBtn.click({ timeout: 65 * 1000 });
        //await assertText(this.page, "Product created.");

        // assert product saved
        await this.page.click(".main-card >> nth=0");
        //await assertText(this.page, "Style + Style Variants:");
        var variants = this.page.locator(".variant-thumbnail");
        await variants.last().click();
        console.log(productName);
        //await assertText(this.page, productName);
        
        // style + style variants are listed
        expect(await variants.count()).toBeGreaterThan(1);
        await this.page.click('[data-icon="times"]');
         
    }

    
}
module.exports = {DashBoardPage}