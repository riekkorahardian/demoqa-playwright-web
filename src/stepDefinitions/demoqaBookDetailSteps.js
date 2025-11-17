const { Given, When, Then } = require('@cucumber/cucumber');
const { demoqaBookPage } = require('../pages/demoqaBookPage');
const { demoqaBookDetailPage } = require('../pages/demoqaBookDetailPage');

let detailPage;

Then('I can see book detail with title {string} author {string} publisher {string} on Demo Book QA Book Detail Page', async function (title, author, publisher) {
    detailPage = new demoqaBookDetailPage(this.page);
    await detailPage.verifyBookTitleDetail(title);
    await detailPage.verifyBookAuthorDetail(author);
    await detailPage.verifyBookPublisherDetail(publisher);
});

