const { expect } = require('@playwright/test');

class demoqaBookLoginPage {

    async isOnDemoqaBooksLoginPage() {
        await expect(this.lblHeaderLogin).toBeVisible();
        await expect(this.lblSubTitleLogin).toBeVisible();
        await expect(this.fieldUserName).toBeVisible();
        await expect(this.fieldPassword).toBeVisible();
        await expect(this.btnLogin).toBeVisible();
        await expect(this.btnRegister).toBeVisible();
    }

    async navigateToLoginPage() {
        await this.page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded' });
    }

    async inputUserName(username) {
        await this.fieldUserName.fill(username);
    }

    async inputPassword(password) {
        await this.fieldPassword.fill(password);
    }

    async clickLoginButton() {
        await this.btnLogin.click();
    }

    async clickNewUserButton() {
        await this.btnRegister.click();
    }

    async verifyLoginFailed() {
        await expect(this.lblInvalidLoginMessage).toBeVisible({timeout: 15000});
    }

    async verifyLoginSuccess() {
        await expect(this.lblInvalidLoginMessage).not.toBeVisible();
    }


    constructor(page) {
        this.page = page;
        this.lblHeaderLogin = page.getByRole('heading', { name: 'Welcome,' });
        this.lblSubTitleLogin = page.getByRole('heading', { name: 'Login in Book Store' });
        this.fieldUserName = page.getByRole('textbox', { name: 'UserName' });
        this.fieldPassword = page.getByRole('textbox', { name: 'Password' });
        this.btnLogin = page.getByRole('button', { name: 'Login' });
        this.btnRegister = page.getByRole('button', { name: 'New User' });
        this.lblInvalidLoginMessage = page.getByText('Invalid username or password!');
    }
}
module.exports = { demoqaBookLoginPage };