const { expect } = require('@playwright/test');

class demoqaBookPage {

    async navigateToWebsite() {
        await this.page.goto('https://demoqa.com/books', { waitUntil: 'domcontentloaded' });
    }

    async isOnDemoqaBooksPage() {
        await expect(this.lblHeader).toBeVisible();
        await expect(this.imgBookTable).toBeVisible();
        await expect(this.lblTitleBookTabel).toBeVisible();
        await expect(this.lblAuthorBookTable).toBeVisible();
        await expect(this.lblPublisherBookTable).toBeVisible();
        await expect(this.fieldSearchBook).toBeVisible();
        await expect(this.btnIconSearch).toBeVisible();
    }

    async searchBook(text) {
        await this.fieldSearchBook.fill(text);
    }

    async scrollAndFind(title) {
        const bookLocator = this.getBookTitleResult(title);
        await bookLocator.scrollIntoViewIfNeeded();
        await expect(bookLocator).toBeVisible();
    }

    async verifySearchResult(title, author, publisher) {
        const titleLocator = this.getBookTitleResult(title);
        const authorLocator = this.getBookAuthorResult(author);
        const publisherLocator = this.getBookPublisherResult(publisher);

        await expect(titleLocator).toBeVisible();
        await expect(authorLocator).toBeVisible();
        await expect(publisherLocator).toBeVisible();
    }

    async verifyTitleAndAuthor(title, author) {
        const titleLocator = this.getBookTitleResult(title);
        const authorLocator = this.getBookAuthorResult(author);

        await expect(titleLocator).toBeVisible();
        await expect(authorLocator).toBeVisible();
    }

    async verifyBookPublisherNotVisible(publisher) {
        const publisherLocator = this.getBookPublisherResult(publisher);
        await expect(publisherLocator).not.toBeVisible();
        await expect(publisherLocator).toHaveCount(0);
    }

    async verifyPublisherCount(expectedCount, publisher) {
    const publisherLocators = this.getBookPublisherResult(publisher);
    await expect(publisherLocators).toHaveCount(expectedCount, { timeout: 10000 });
    }

    async tapLoginButton() {
        await this.btnLogin.click();
    }

    async clickBookWithTitle(title) {       
        await this.getBookWithTitle(title).click();
    }

    getBookTitleResult(title) {
        return this.page.getByRole('gridcell', { name: title });
    }

    getBookAuthorResult(author) {
        return this.page.getByRole('gridcell', { name: author });
    }

    getBookPublisherResult(publisher) {
        return this.page.getByRole('gridcell', { name: publisher });
    }

    getBookWithTitle(title) {
        return this.page.getByRole('link', { name: title });
    }
    
    constructor(page) {
        this.page = page;
        this.lblHeader = page.getByRole('link').filter({ hasText: /^$/ });
        this.imgBookTable = page.getByText('Image', { exact: true });
        this.lblTitleBookTabel = page.getByText('Title');
        this.lblAuthorBookTable = page.getByText('Author');
        this.lblPublisherBookTable = page.getByText('Publisher');
        this.fieldSearchBook = page.getByRole('textbox', { name: 'Type to search' });
        this.btnIconSearch = page.locator('#basic-addon2');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }
}
module.exports = { demoqaBookPage };