const { expect } = require('@playwright/test');

class demoqaBookProfilePage {

    async verifyProfileUsername(username) {
        const usernameLocator = this.getUsernameProfile(username);
        await expect(usernameLocator).toBeVisible();
    }

    async clickLogoutButton() {
        await this.btnLogout.click();
    }

    async clickDeleteAllBooksButton() {
        await this.btnDeleteAllBooks.click();
    }

    async clickGoToBookStoreButton() {
        await this.btnGoToBookStore.click();
    }

    async confirmDeleteAllBooks() {
        await expect(this.lblHeaderDeleteConfirmation).toBeVisible();
        await expect(this.lblDeleteConfirmation).toBeVisible();
    }

    getUsernameProfile(username) {
        return this.page.getByText(username);
    }

    async verifyDialog() {        
        
        const dialogPromise = this.page.waitForEvent('dialog');
    
        //action
        await this.btnOkDeleteConfirmation.click();
    
        //await dialog event 
        const dialog = await dialogPromise; 
    
        //assert dialog message
        expect(dialog.message()).toBe("No books available in your's collection!");
    
        //click ok dialog
        await dialog.accept();
    }

    constructor(page) {
        this.page = page;
        this.lblHeader = page.getByRole('link').filter({ hasText: /^$/ });
        this.imgBookTable = page.getByText('Image', { exact: true });
        this.btnGoToBookStore = page.getByRole('button', { name: 'Go To Book Store' });
        this.btnLogout = page.getByRole('button', { name: 'Log out' });
        this.btnDeleteAllBooks = page.getByRole('button', { name: 'Delete All Books' });
        this.lblHeaderDeleteConfirmation = page.getByLabel('Delete All Books').getByText('Delete All Books', { exact: true });
        this.lblDeleteConfirmation = page.getByText('Do you want to delete all');
        this.btnOkDeleteConfirmation = page.getByRole('button', { name: 'OK' });
    }
}
module.exports = { demoqaBookProfilePage };