const { Given, When, Then } = require('@cucumber/cucumber');
const { demoqaBookPage } = require('../pages/demoqaBookPage');
const { demoqaBookLoginPage } = require('../pages/demoqaBookLoginPage');
const { demoqaBookProfilePage } = require('../pages/demoqaBookProfilePage');

let bookPage;
let loginPage;

Given('I am prepared login process on Demo Book QA Website', async function () {
    bookPage = new demoqaBookPage(this.page);
    loginPage = new demoqaBookLoginPage(this.page);
    await bookPage.navigateToWebsite();
});

Given('I am prepared login process directly to login page', async function () {
    loginPage = new demoqaBookLoginPage(this.page);
    await loginPage.navigateToLoginPage();
});

When('I am on Demo Book QA Homepage #login', async function () {
    await bookPage.isOnDemoqaBooksPage();
});

When('I click login button on Demo Book QA Homepage', async function () {
    await bookPage.tapLoginButton();
});

When('I am on Demo Book QA Login Page', async function () {
    await loginPage.isOnDemoqaBooksLoginPage();
});

When('I am on Demo Book QA Login Page after logout', async function () {
    await loginPage.isOnDemoqaBooksLoginPage();
});

Then('I input username {string} and password {string}', async function (username, password) {
    await loginPage.inputUserName(username);
    await loginPage.inputPassword(password);
});

Then('I tap login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I can verify login success', async function () {
    await loginPage.verifyLoginSuccess();
});

Then('I can see error message failed to login on Demo Book QA Login Page', async function () {
    await loginPage.verifyLoginFailed();
});