class MySettingsPage{

    constructor(page)
    {
        this.page = page;
        this.mysettingsdropdown = page.locator("(//button[@id='icon-button-'])[1]");
        this.mysettingspage = page.locator("(//div[text()='My Settings'])[1]");
        this.firstname = page.locator("(//input[@class='ms-text-input__input'])[1]");
        this.lastname = page.locator("(//input[@class='ms-text-input__input'])[2]");
        this.updateinfobutton = page.locator("//button[text()='Update Info']");
        this.toastmessage = page.locator(".Toastify_toast-body");

    }

    async mysettingsDropDown()
    {
        await this.mysettingsdropdown.click();
    }

    async mysettingsOption()
    {
        await this.mysettingspage.click();
    }

    async validUpdateinfobutton()
    {
        await this.firstname.click();
        await this.lastname.click();
        await this.updateinfobutton.click();
        /*console.log(await this.toastmessage.textContent());
        await expect(this.toastmessage).toContainText('You have successfully updated your account');*/

    }


}

module.exports = {MySettingsPage};