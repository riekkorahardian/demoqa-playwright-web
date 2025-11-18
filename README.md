Playwright Web Automation Framework
This repository contains an end-to-end (E2E) web automation framework built on Playwright for browser interaction and Cucumber.js for Behavior-Driven Development (BDD). This setup ensures test readability, maintainability, and clear separation of concerns using the Page Object Model (POM) pattern.🚀 

Getting Started
Prerequisites
You'll need the following software installed:Node.js: (LTS version recommended)
npm: (Node Package Manager - comes with Node.js)
Java Development Kit (JDK): (Required for the Playwright Test Runner integration, usually via Cucumber)

Installation
Clone the Repository
Install Dependencies: Install all necessary Node.js packages (Playwright, Cucumber, etc.).Bash
npm install
Install Playwright Browsers: Download the required browser binaries (Chromium, Firefox, WebKit).Bash
npx playwright install


▶️ Running Tests
Tests are executed using npm run commands defined in package.json. All commands use the cucumber-js runner.
run all test cases 
npx cucumber-js -p default

run specific test case with tags 
npx cucumber-js -p default --tags @login 
