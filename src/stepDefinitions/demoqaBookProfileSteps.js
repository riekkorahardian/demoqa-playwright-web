const { Given, When, Then } = require('@cucumber/cucumber');
const { demoqaBookProfilePage } = require('../pages/demoqaBookProfilePage');

let profilePage;


When('I click delete all boooks button on Demo Book QA Profile Page', async function () {
    await profilePage.clickDeleteAllBooksButton();
});

When('I confirm delete all books on the confirmation dialog', async function () {
    await profilePage.confirmDeleteAllBooks();
});

When('I click Log out button on Demo Book QA Profile Page', async function () {
    await profilePage.clickLogoutButton();
});

When('I should see no books in user profile on Demo Book QA Profile Page', async function () {
    await profilePage.validateAndAcceptDialog(this.page);
});

When('I click Go To Book Store button', async function () {
    await profilePage.clickGoToBookStoreButton();
})

Then('I can redirect to Demo Book QA Profile Page as {string}', async function (username) {
    profilePage = new demoqaBookProfilePage(this.page);
    await profilePage.verifyProfileUsername(username);

});

