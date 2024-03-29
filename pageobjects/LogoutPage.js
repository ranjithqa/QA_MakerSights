class LogoutPage{

    constructor(page)
    {
        this.page = page;
        this.signout= page.locator(".dropdown-menu > :nth-child(6)");
    }

    async validSignOut()
    {
        //race condition
    await Promise.all(
        [

             this.page.waitForURL(),
             await this.signout.click(),
             //await this.page.waitForLoadState('networkidle'),
        ]
    );
}
}

module.exports = {LogoutPage};