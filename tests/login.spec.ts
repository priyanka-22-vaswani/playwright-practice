import { test, expect } from './fixtures';

const cases = [
  { user: 'tomsmith', pass: 'SuperSecretPassword!', msg: 'You logged into a secure area!', tag: '@smoke' },
  { user: 'wronguser', pass: 'wrongpassword!', msg: 'Your username is invalid!', tag: '@regression' },
  { user: 'tomsmith', pass: 'wrongpassword', msg: 'Your password is invalid!', tag: '@regression' },
];

test.describe('Login', () => {
  for (const c of cases) {
    test(`shows "${c.msg}"`, { tag: c.tag }, async ({ loginPage }) => {
      await loginPage.login(c.user, c.pass);
      await expect(loginPage.flashMessage).toContainText(c.msg);
    });
  }

  test('user can log out after logging in', { tag: '@regression' }, async ({ loggedIn }) => {
    await loggedIn.logoutLink.click();
    await expect(loggedIn.flashMessage).toContainText('You logged out of the secure area!');
  });
});