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

    async validLogin(username,password)
    {
        await this.username.type(username);
        await this.usernameContinueButton.click();
        await this.password.type(password);
        await this.passwordContinueButton.click();

    }
}

module.exports = {LoginPage};