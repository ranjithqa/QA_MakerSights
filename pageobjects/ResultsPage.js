const {expect} = require('@playwright/test')

class ResultsPage
{

    constructor(page)
    {
        this.page = page;
        this.insightCards = page.locator("//div[contains(text(),'Insight Cards')]");
        this.headToHead = page.locator("//div[contains(text(),'Head To Head')]");

        this.productName = page.locator("//div[contains(text(),'Embroidered Tee - 1111110 - GBEA')]");
        this.loadMore = page.locator("//button[text()='Load More']");

        this.filterResponseCount = page.locator(".ms-filter-section:has-text('1246 of 1246 (100%)')");
        this.vsAllRespondents = page.locator(".ms-filter-section:has-text(' vs. all respondents')");
        this.unfilteredDetractorPercentage = page.locator("div.ms-deep-dive-early-stage-stats__percentage-number:has-text('23')");
        this.filteredDetractorPercentage = page.locator("div.ms-deep-dive-early-stage-stats__percentage-number:has-text('24')");

        this.headToHead_ChooseProduct = page.locator(".ms-comparison-table__cell__additional-data__product-select__cta");
        this.headToHead_SelectProductToStartComparing = page.locator(".ms-comparison-table__cell__additional-data__product-select__prompt:has-text('Select a product to start comparing')");
        this.headToHead_SharedPreference = page.locator("div.ms-comparison-table__cell__comparison-data__preference:has-text('33% of customers rated both products the same')");
        this.headToHead_VennDiagram = page.locator(".ms-venn-diagram__circle__detail");
        this.headToHead_BreakdownInsights = page.locator(".ms-head-to-head__breakdown-content__insights")
        
        // Filters
        this.filterByNonBinary = page.locator("div.results-filters__option-label:has-text('Non-binary')");
        this.filterByMale = page.locator("div.results-filters__option-label:has-text('Male')");
        this.filterByFemale = page.locator("div.results-filters__option-label:has-text('Female')");
        this.filterByPreferNotToSay = page.locator("div.results-filters__option-label:has-text('Prefer not to say')");

        this.filterByAudience = page.locator(".ms-filter-section:has-text('Audience') >> label:has-text('Modern outdoorsman')");

        this.filterByCountry_UnitedStates = page.locator("#results-country-tab__united_states");

    }

}

module.exports = {ResultsPage}