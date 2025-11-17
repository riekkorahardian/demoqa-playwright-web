const { Given, When, Then } = require('@cucumber/cucumber');
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
    //initialization
    const dialogPromise = this.page.waitForEvent('dialog');

    //action
    await profilePage.confirmDeleteAllBooks();

    //await dialog event 
    const dialog = await dialogPromise; 

    //assert dialog message
    expect(dialog.message()).toBe("No books available in your's collection!");

    //click ok dialog
    await dialog.accept();
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

