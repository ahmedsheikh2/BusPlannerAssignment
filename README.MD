## Playwright Test Automation Project
This project uses Playwright for end-to-end (E2E) testing. Playwright is a fast and reliable framework for testing modern web applications across all major browsers.

**Prerequisites**
Before you begin, ensure you have the following installed:

Node.js: Version 16 or higher. Download and install it from nodejs.org.

npm: Comes bundled with Node.js.

**Installation**
Clone the repository:

```
git clone https://github.com/your-username/your-repo.git
```
cd your-repo
Install dependencies:

Run the following command to install Playwright and other dependencies:

```
npm install
Install browsers:
```

Playwright requires browsers to run tests. Install the default browsers (Chromium, Firefox, WebKit) by running:

```
npx playwright install
```

**Running Tests**
Run All Tests
```
npx playwright test
```

**Reports**
The HTML report will be saved in the playwright-report directory. Open it with:
```
npx playwright show-report
```