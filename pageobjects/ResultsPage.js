const {expect} = require('@playwright/test')

class ResultsPage
{

    constructor(page)
    {
        this.page = page;
        this.insightCards = page.locator("//div[contains(text(),'Insight Cards')]");
        this.productName = page.locator("//div[contains(text(),'Graphic Tee - 11111116 - PAC')]");
        this.loadMore = page.locator("//button[text()='Load More']");

        this.filterResponseCount = page.locator(".ms-filter-section:has-text('250 of 250 (100%)')");
        this.vsAllRespondents = page.locator(".ms-filter-section:has-text(' vs. all respondents')");
        this.unfilteredDetractorPercentage = page.locator("div.ms-deep-dive-early-stage-stats__percentage-number:has-text('25')");
        this.filteredDetractorPercentage = page.locator("div.ms-deep-dive-early-stage-stats__percentage-number:has-text('27')");
        this.filterByNonBinary = page.locator("div.results-filters__option-label:has-text('Non-binary')");
        this.filterByMale = page.locator("div.results-filters__option-label:has-text('Male')");
        this.filterByFemale = page.locator("div.results-filters__option-label:has-text('Female')");
        this.filterByPreferNotToSay = page.locator("div.results-filters__option-label:has-text('Prefer not to say')")

    }

}

module.exports = {ResultsPage}