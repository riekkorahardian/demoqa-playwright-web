const { expect } = require('@playwright/test');

class demoqaBookRegisterPage {

    async isOnDemoqaBookRegisterPage() {
        await expect(this.lblHeaderRegister).toBeVisible();
        await expect(this.lblSubTitleRegister).toBeVisible();
        await expect(this.fieldFirstName).toBeVisible();
        await expect(this.fieldLastName).toBeVisible();
        await expect(this.fieldUserName).toBeVisible();
        await expect(this.fieldPassword).toBeVisible();
        await expect(this.btnRegister).toBeVisible();
    }

    async inputFirstName(firstname) {
        await this.fieldFirstName.fill(firstname);
    }

    async inputLastName(lastname) {
        await this.fieldLastName.fill(lastname);
    }

    async inputUserName(username) {
        await this.fieldUserName.fill(username);
    }

    async inputPassword(password) {
        await this.fieldPassword.fill(password);
    }

    async clickRegisterButton() {
        await this.btnRegister.click();
    }

    async verifyRegisterMessage(text) {
        await expect(this.getRegisterMessage(text)).toBeVisible();
    }

    getRegisterMessage(text) {
        return this.page.getByText(text);
    }


    constructor(page) {
        this.page = page;
        this.lblHeaderRegister = page.getByRole('button', { name: 'Register' });
        this.lblSubTitleRegister= page.getByRole('heading', { name: 'Register to Book Store' });
        this.fieldFirstName = page.getByRole('textbox', { name: 'First Name' })
        this.fieldLastName = page.getByRole('textbox', { name: 'Last Name' })
        this.fieldUserName = page.getByRole('textbox', { name: 'UserName' });
        this.fieldPassword = page.getByRole('textbox', { name: 'Password' });
        this.btnRegister = page.getByRole('button', { name: 'Register' });
    }
}
module.exports = { demoqaBookRegisterPage };