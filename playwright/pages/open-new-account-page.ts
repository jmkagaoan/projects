import type { Page, Locator } from '@playwright/test';

export class OpenNewAccountPage {
    readonly page: Page;
    readonly accountTypeSelect: Locator;
    readonly fromAccountSelect: Locator;
    readonly openNewAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountTypeSelect = page.locator('#type');
        this.fromAccountSelect = page.locator('#fromAccountId');
        this.openNewAccountButton = page.locator('//input[@value="Open New Account"]');
    }

    async openNewAccount() {
        await this.fromAccountSelect.selectOption({ index: 0 });
        await this.openNewAccountButton.click();
    }
}