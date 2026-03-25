import { test, expect } from '../../fixtures/testFixtures';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe.skip('Register a new user', () => {

    test.beforeEach(async ({ page } ) => {
    // Go to the starting url before each test.
    await page.goto('index.htm');
    });

    test.afterEach(async ({ page }) => {
    await page.close();
    });

    test( 'able to register a new user', async ({ registrationPage, loginPage, page }) => {
        await loginPage.registerLink.click();
        await registrationPage.register('user', 'user');
        await expect(page.getByRole('heading', { name: 'Welcome User' })).toBeVisible();
    });

});