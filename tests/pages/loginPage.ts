import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('http://localhost:4000/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async isDashboardVisible() {
        return this.page.isVisible('#dashboard'); // Adjust selector if needed
    }

    async isErrorMessageVisible() {
        return this.page.isVisible('.error-message'); // Adjust selector if needed
    }
}
