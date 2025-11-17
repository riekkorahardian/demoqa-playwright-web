const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { demoqaBookProfilePage } = require('../pages/demoqaBookProfilePage');

let profilePage;

/* 
** When Scenario
**/
When('I click delete all boooks button on Demo Book QA Profile Page', async function () {
    await profilePage.clickDeleteAllBooksButton();
});


When('I click Log out button on Demo Book QA Profile Page', async function () {
    await profilePage.clickLogoutButton();
});

When('I should see no books in user profile on Demo Book QA Profile Page', async function () {
    await profilePage.confirmDeleteAllBooks();
    await profilePage.verifyDialog();
});

When('I click Go To Book Store button', async function () {
    await profilePage.clickGoToBookStoreButton();
})

/* 
** Then Scenario
**/
Then('I can redirect to Demo Book QA Profile Page as {string}', async function (username) {
    profilePage = new demoqaBookProfilePage(this.page);
    await profilePage.verifyProfileUsername(username);

});

