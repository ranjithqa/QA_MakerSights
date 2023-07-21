class BrandSettingsPage
{
    constructor(page)
    {
        this.page = page;
        this.brandsettings = page.locator("//a[contains(text(),'Settings')]");

        //general
        this.general = page.locator("//div[text()='General']");
        this.brandname = page.locator("(//input[@class='ms-text-input__input'])[1]");
        this.webstite = page.locator("(//input[@class='ms-text-input__input'])[2]");
        this.changedefaultcountry = page.locator("//button[text()='Change Default Country']");
        this.deletebrandlogo = page.locator("//button[@aria-label='Delete the Image']");
        this.browsefile = page.locator("//button[@class='uppy-u-reset uppy-Dashboard-browse']");
        this.advancedoptions = page.locator("(//button[@aria-label='Click to expand']//div)[1]");
        this.Autopopulatedemographicdata = page.locator("(//div[@class='react-toggle-track'])[1]");
        this.userid = page.locator("(//input[@class='ms-text-input__input'])[3]");
        this.defaultprimarygroupvalue = page.locator(".general-settings-other div");
        this.defaultprimarygroupsort = page.locator("div:nth-of-type(2).ms-form-control");
        this.defaultsecondarygroupvalue = page.locator("div:nth-of-type(3).ms-form-control");
        this.defaultsecondarygroupsort = page.locator("div:nth-of-type(4).ms-form-control");
        this.defaultorderbyvalue = page.locator("div:nth-of-type(5).ms-form-control");
        this.defaulttype = page.locator("div:nth-of-type(6).ms-form-control");
        this.defaultdisplaystyle = page.locator("div:nth-of-type(7).ms-form-control");

        //decision names
        this.addnewdecisionname = page.locator("//button[text()='Add New Decision Name']");
        


    }
}