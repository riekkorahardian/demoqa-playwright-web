const { Given, When, Then } = require('@cucumber/cucumber');
const { demoqaBookPage } = require('../pages/demoqaBookPage');

let bookPage;

Given('I open the Demo Book QA Website', async function () {
    bookPage = new demoqaBookPage(this.page);
    await bookPage.navigateToWebsite();
});

When('I am on Demo Book QA Homepage', async function () {
    await bookPage.isOnDemoqaBooksPage();
});

When('I search for a book with title {string} by scrolling down the page', async function (title) {
    await bookPage.scrollAndFind(title);
});

When('I search for a book with text {string} using search feature', async function (title) {
    bookPage = new demoqaBookPage(this.page);
    await bookPage.searchBook(title);
});  

When('I click book with title {string}', async function (title) {
    await bookPage.clickBookWithTitle(title);
})

Then('I can found the book {string} on the page', async function (title) {
    await bookPage.scrollAndFind(title); 
});

Then('I can found the book with title {string} author {string} publisher {string} on the page', async function (title, author, publisher) {
    await bookPage.verifySearchResult(title, author, publisher);
});

Then('I can found the book with title {string} author {string} on the page', async function (title, author) {
    await bookPage.verifyTitleAndAuthor(title, author);
});

Then('I will not see the book with publisher {string} on the page', async function (publisher) {
    await bookPage.verifyBookPublisherNotVisible(publisher);
});

Then('I should see exactly {int} books with publisher {string} on the page', async function (count, publisher) {
    await bookPage.verifyPublisherCount(count, publisher);
});