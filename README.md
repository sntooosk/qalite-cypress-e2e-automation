# QALite Cypress E2E Automation

## Overview
This project is an end-to-end (E2E) test automation framework built using [Cypress](https://www.cypress.io/). It is designed to test web applications efficiently and reliably, leveraging the power of Cypress for fast, easy, and reliable testing.

## Project Structure
The project is organized as follows:

```
.
├── browserstack.json          # Configuration for BrowserStack integration
├── commitlint.config.js       # Commit message linting configuration
├── cypress.config.js          # Cypress configuration file
├── package.json               # Project dependencies and scripts
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Gherkin feature files for BDD
│   │   │   ├── Login.feature
│   │   │   ├── Organization.feature
│   │   │   └── Profile.feature
│   ├── fixtures/              # Test data (e.g., JSON files)
│   │   └── users.json
│   ├── support/               # Custom commands, utilities, and page objects
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── pages/
│   │   │   ├── BasePage.js
│   │   │   ├── Login/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   │   ├── Organization/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   │   ├── Profile/
│   │   │   │   ├── elements.js
│   │   │   │   └── index.js
│   │   ├── steps/
│   │   │   └── steps.js
│   │   ├── utils/
│   │   │   └── generators.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/quality-digital/qalite-cypress-e2e-automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qalite-cypress-e2e-automation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run All Tests
To execute all tests, run:
```bash
npx cypress run
```

### Open Cypress Test Runner
To open the interactive Cypress Test Runner, run:
```bash
npx cypress open
```

### Run Tests in a Specific Browser
To run tests in a specific browser (e.g., Chrome):
```bash
npx cypress run --browser chrome
```

## Folder Details

### `cypress/e2e/features`
Contains Gherkin `.feature` files for Behavior-Driven Development (BDD).

### `cypress/fixtures`
Holds test data files (e.g., JSON files) used in tests.

### `cypress/support/pages`
Contains page object models (POMs) for modular and reusable test code.

### `cypress/support/steps`
Includes step definitions for BDD-style tests.

### `cypress/support/utils`
Utility functions and helpers for the test framework.

## BrowserStack Integration
The `browserstack.json` file contains configuration for running tests on BrowserStack. Ensure you have the necessary credentials and configurations set up before running tests on BrowserStack.

## Commit Guidelines
This project uses [CommitLint](https://commitlint.js.org/) to enforce commit message conventions. Refer to the `commitlint.config.js` file for the rules.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and concise messages.
4. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any questions or support, please contact the repository owner or create an issue in the repository.