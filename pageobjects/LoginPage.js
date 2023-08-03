class LoginPage{

    constructor(page)
    {
        this.page = page;
        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.usernameContinueButton = page.locator("//button[contains(text(),'Continue')]");
        this.passwordContinueButton = page.locator("(//button[@name='action'])[2]");
    }

    async goto()
    {
        await this.page.goto("https://qa-app.makersights.com/");
        //await this.page.goto("https://dev-app.makersights.com/");
    }

    async goto2()
    {
        await this.page.goto2("https://dev-app.makersights.com/#!/brand/6195868ba759f770948185a6/campaign/61a7061e3e5e72f27cc4c21d/results/?from=all_tests");
           
    }

    async validLogin(username,password)
    {
        await this.username.type(username);
        await this.usernameContinueButton.click();
        await this.password.type(password);
        await this.passwordContinueButton.click();

    }
}

module.exports = {LoginPage};