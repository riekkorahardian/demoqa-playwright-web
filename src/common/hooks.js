// tests/support/hooks.js (Contoh Sederhana)
const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(30000);

let browser;
let page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false }); // Ubah ke false untuk melihat browser
});

AfterAll(async function () {
  await browser.close();
});

// Memberikan objek 'page' ke setiap Step Definition
Before(async function () {
  page = await browser.newPage();
  this.page = page; // Penting: Menyimpan 'page' ke Cucumber World (this)
});

After(async function () {
  await page.close();
});