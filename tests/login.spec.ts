import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  const cases = [
    { user: 'tomsmith', pass: 'SuperSecretPassword!', msg: 'You logged into a secure area!' },
    { user: 'wronguser', pass: 'wrongpassword!', msg: 'Your username is invalid!' },
    { user: 'tomsmith', pass: 'wrongpassword', msg: 'Your password is invalid!' },
  ];

  for (const c of cases) {
    test(`shows "${c.msg}"`, async () => {
      await loginPage.login(c.user, c.pass);
      await expect(loginPage.flashMessage).toContainText(c.msg);
    });
  }

  test('user can log out after logging in', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.logoutLink.click();
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});