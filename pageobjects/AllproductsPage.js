class AllproductsPage{

    constructor(page)
    {
        this.page = page;
        this.allproductspage = page.locator("//a[contains(text(),'All Products')]");
        this.helpericon = page.locator(":nth-child(1) > .top-container > .card-dropdown-list > [data-testid='dropdown'] > [data-testid='dropdown-icon']");
        this.allproducts = page.locator("//div[@class='filters-container']/following-sibling::div[1]")
        this.downloadimage = page.locator("(//div[text()='Download Images'])[1]")
        this.searchbox = page.locator("//input[@placeholder='Search...']")
        this.austinsearchproduct = page.locator("(//div[text()='Austin'])[1]")

    }

    async AllProducts()
    {
        await this.allproductspage.click();
        console.log(await this.allproducts.first().textContent());
        const allTitles = await this.allproducts.allTextContents();
        console.log(allTitles);
    }

    async DownloadImg()
    {
        await this.helpericon.click();
        await this.downloadimage.click();
    }

    async validSearchProduct(Austinproduct)
    {
        await this.searchbox.type(Austinproduct);
        await this.austinsearchproduct.click();      
    }

}

module.exports = {AllproductsPage};