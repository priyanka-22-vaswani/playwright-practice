[![Playwright Tests](https://github.com/priyanka-22-vaswani/playwright-practice/actions/workflows/playwright.yml/badge.svg)](https://github.com/priyanka-22-vaswani/playwright-practice/actions/workflows/playwright.yml)

# Playwright TypeScript Test Framework

UI and API tests written with Playwright and TypeScript. They run on Chromium, Firefox and WebKit, and run automatically on every push through GitHub Actions.

## What's in it

- **Page Object Model:** locators and actions live in page classes, and tests only describe behaviour.
- **Custom fixtures:** reusable setup (open the login page, sign in) handed to tests, instead of repeated `beforeEach` code.
- **Data-driven tests:** one test body runs against several login cases.
- **API tests:** GET, POST, PUT and DELETE checks using Playwright's request fixture, with no browser needed.
- **Cross-browser and parallel:** Chromium, Firefox and WebKit, running in parallel workers.
- **Trace viewer:** a step-by-step replay with screenshots for debugging failures.
- **CI:** GitHub Actions runs the suite on every push and pull request.

## Tech stack

TypeScript · Playwright · Node.js · GitHub Actions

## Project structure

```
pages/            LoginPage (page object)
tests/
├── fixtures.ts   custom fixtures
├── login.spec.ts UI tests
└── api.spec.ts   API tests
playwright.config.ts
.github/workflows/playwright.yml
```

## How to run

```
npm ci
npx playwright install
npx playwright test
```

Run in one browser only: `npx playwright test --project=chromium`

Open the report: `npx playwright show-report`

Record traces: `npx playwright test --trace on`

## Test targets

UI tests run against [the-internet.herokuapp.com](https://the-internet.herokuapp.com). API tests run against [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com). Both are public practice sites.