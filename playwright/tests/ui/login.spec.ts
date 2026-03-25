import { test, expect } from '../../fixtures/testFixtures';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Home page ', () => {

  test.beforeEach(async ({ page } ) => {
    // Go to the starting url before each test.
    await page.goto('index.htm');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.+
    await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);
  });

  test('able to login', async ({ page, loginPage }) => {
    await loginPage.login('user', 'user');
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  });

});