import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly registerLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.userNameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByText('Log In');
        this.registerLink = page.getByRole('link', { name: 'Register' });
    }

    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}