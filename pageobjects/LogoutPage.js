class LogoutPage{

    constructor(page)
    {
        this.page = page;
        this.signout= page.locator("//div[text()='Sign Out']");
    }

    async validSignOut()
    {
        
        await this.signout.click();

    }
}

module.exports = {LogoutPage};