import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false }); // Set true for CI
    context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
    await browser.close();
});

Given('I open the login page', async function () {
    await page.goto('http://localhost:4000'); // Update with your actual login URL
});

When('I enter valid credentials', async function () {
    await page.fill('#loginEmail', 'sridhar@test.com'); // Use actual selector
    await page.fill('#loginPassword', '123'); // Use actual selector
});

When('I enter invalid credentials', async function () {
    await page.fill('#loginEmail', 'sridhar@test.com'); // Use actual selector
    await page.fill('#loginPassword', '12345'); // Use actual selector
});

When('I click on the login button', async function () {
    await page.click('#loginButton'); // Update with actual selector
});

Then('I should see the JWT Token', async function () {
    await page.waitForSelector('#jwtToken'); // Update with actual selector
});

Then('I should see an error message', async function () {
    await page.waitForSelector('#loginMessage'); // Use actual selector for error message
    const errorMessage = await page.textContent('.message');
    console.log('Error message displayed:', errorMessage);
});
