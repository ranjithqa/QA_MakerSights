class SurveyCreatorPage
{

    constructor(page)
    {
        this.page = page;
        this.basicinformation = page.locator("//span[@class='step-circle selected']");
        this.products = page.locator("(//span[@class='step-circle'])[1]");
        this.productsquestions = page.locator("(//span[@class='step-circle'])[2]");
        this.consumers = page.locator("(//span[@class='step-circle'])[3]");
        this.internationaltesting = page.locator("//div[@id='step-nav-international']//span[1]");
        this.review = page.locator("//div[@id='step-nav-prep-to-send']//span[1]");
        this.basicwhichassortmentdropdown = page.locator("div.ms-select-single__value-container.ms-select-single__value-container--has-value.css-z1x3vh");
        this.basictesttitle = page.locator("//input[@id='e2e-test-name']");
        this.basicshortdescription = page.locator("//textarea[@rows='8']");
        this.datepicker = page.locator("//input[@id='input_44']");
        this.next = page.locator("//button[text()='Next']");
        this.back = page.locator("//button[text()='Back']");
        this.confirmpopup = page.locator("//button[contains(@class,'md-primary md-confirm-button')]");
        this.cancelpopup = page.locator("//button[contains(@class,'md-primary md-cancel-button')]");
        this.readytosend = page.locator("//button[text()='Ready to Send']");



    }
}

module.exports = {SurveyCreatorPage}