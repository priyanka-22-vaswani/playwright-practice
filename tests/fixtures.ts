import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loginPage: LoginPage;
  loggedIn: LoginPage;
};

export const test = base.extend<Fixtures>({
  // opens the login page
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  // opens the login page and signs in
  loggedIn: async ({ loginPage }, use) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';