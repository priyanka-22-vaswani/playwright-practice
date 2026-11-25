import { test, expect } from './fixtures';

const cases = [
  { user: 'tomsmith', pass: 'SuperSecretPassword!', msg: 'You logged into a secure area!' },
  { user: 'wronguser', pass: 'wrongpassword!', msg: 'Your username is invalid!' },
  { user: 'tomsmith', pass: 'wrongpassword', msg: 'Your password is invalid!' },
];

test.describe('Login', () => {
  for (const c of cases) {
    test(`shows "${c.msg}"`, async ({ loginPage }) => {
      await loginPage.login(c.user, c.pass);
      await expect(loginPage.flashMessage).toContainText(c.msg);
    });
  }

  test('user can log out after logging in', async ({ loggedIn }) => {
    await loggedIn.logoutLink.click();
    await expect(loggedIn.flashMessage).toContainText('You logged out of the secure area!');
  });
});