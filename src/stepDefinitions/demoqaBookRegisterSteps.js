const { Given, When, Then } = require('@cucumber/cucumber');
const { demoqaBookLoginPage } = require('../pages/demoqaBookLoginPage');
const { demoqaBookRegisterPage } = require('../pages/demoqaBookRegisterPage');
const { demoqaBookPage } = require('../pages/demoqaBookPage');

let bookPage;
let loginPage;
let registerPage;

Given('I am prepared register process on Demo Book QA Website', async function () {
    bookPage = new demoqaBookPage(this.page);
    loginPage = new demoqaBookLoginPage(this.page);
    registerPage = new demoqaBookRegisterPage(this.page);
    await bookPage.navigateToWebsite();
});

When('I am on Demo Book QA Homepage #register', async function () {
    await bookPage.isOnDemoqaBooksPage();
});

When('I click login button on Demo Book QA Homepage #register', async function () {
    await bookPage.tapLoginButton();
});

When('I click on new user button', async function () {
    await loginPage.clickNewUserButton();
}); 

When('I am on Demo Book QA Login Page #register', async function () {
    await loginPage.isOnDemoqaBooksLoginPage();
});

When('I am on Demo Book QA Register Page', async function () {
    await registerPage.isOnDemoqaBookRegisterPage();
});     

When('I input first name {string}', async function (firstname) {
await registerPage.inputFirstName(firstname);
});

When('I input last name {string}', async function (lastname) {
await registerPage.inputLastName(lastname);
});

When('I input username {string}', async function (username) {
    await registerPage.inputUserName(username);
});

When('I input password {string}', async function (password) {
    await registerPage.inputPassword(password);
});

When('I tap register button', async function () {
    await registerPage.clickRegisterButton();
});

Then('I can see error message {string} on Demo Book QA Register Page', async function (text) {
    await registerPage.verifyRegisterMessage(text);
});
