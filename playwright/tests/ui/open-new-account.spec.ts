import {test, expect} from '../../fixtures/testFixtures';

test.describe('Open a new account', () => {

    test.beforeEach(async ({ page } ) => {
    // Go to the starting url before each test.
    await page.goto('overview.htm');
    });

    test.afterEach(async ({ page }) => {
    await page.close();
    });

    test('able to open a new account', async ({ openNewAccountPage, page }) => {
        await page.getByRole('link', { name: 'Open New Account' }).click();
        await openNewAccountPage.openNewAccount();
        await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
    });

});