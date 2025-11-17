const { expect } = require('@playwright/test');

class demoqaBookDetailPage {


    async verifyBookTitleDetail(text) { 
        await expect(this.getBookTitleDetail(text)).toBeVisible();
    }

    async verifyBookAuthorDetail(text) {
        await expect(this.getBookAuthorDetail(text)).toBeVisible();
    }

    async verifyBookPublisherDetail(text) {
        await expect(this.getBookPublisherDetail(text)).toBeVisible();
    }

    getBookTitleDetail(text) {
        return this.page.getByRole('heading', { name: text });
    }

    getBookAuthorDetail(text) {
        return this.page.getByRole('text', { name: text });
    }

    getBookPublisherDetail(text) {
        return this.page.getByRole('text', { name: text });
    }

    constructor(page) {
        this.page = page;
    }
}
module.exports = { demoqaBookDetailPage };