class ExplorePage{
    
    constructor(page)
    {
        this.page = page;
        this.mysettingsdropdown = page.locator("(//button[@id='icon-button-'])[1]");
        this.qastatic = page.locator(":text('QA Static')");
        this.explorepage = page.locator("//a[contains(text(),'Explore')]");
        this.allyears = page.locator(":text('All Years')");
        this.lastyearcheckbox = page.locator(".ms-checkbox-input");
        this.clearallfilters = page.locator(":text('Clear All Filters')");
        this.myassortmentsheading = page.locator(":text('My Assortments')");
        this.filterbyheading = page.locator(":text('Filter By')");

    }

    async validExplorePage()
    {
        //await expect(this.page.myassortmentsheading).toBeVisible();
        await this.page.waitForTimeout(1000);
        await this.mysettingsdropdown.click();
        await this.qastatic.click();
        await this.page.waitForTimeout(1000);
        await this.page.reload();
        await this.explorepage.click();
        await this.page.waitForTimeout(1000);
        //await this.expect(this.page.filterbyheading).toBeVisible();
        await this.allyears.click();
        await this.lastyearcheckbox.last().click();
        await this.page.mouse.click(0, 0);
        const cards = await this.page.locator(".ms-card__content").count();
        await this.clearallfilters.click();
        await this.page.waitForTimeout(3000);
        await this.page.keyboard.press("End");
        
    }

    async validExploreFeed()
    {
        await this.page.waitForTimeout(1000);
        await this.mysettingsdropdown.click();
        await this.qastatic.click();
        await this.page.waitForTimeout(1000);
        await this.page.reload();
    }
}

module.exports = {ExplorePage};