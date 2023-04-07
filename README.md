# OJS-cypress-automation-script
This repository contains automated test scripts for testing a web application using the Cypress testing framework.

### Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/jsn2142/OJS-cypress-automation-script.git
   ```
2. Install Cypress in the repo directory in the local machine
   ```sh
   npm install cypress --save-dev
   ``` 
3. Install Cypress reporter, using Terminal install cypress-mochawesome-reporter, with command
   ```sh
   npm i --save-dev cypress-mochawesome-reporter
   ```
4. Configure Support e2e.js. Navigate to cypress/support/e2e.js, and add the import statement using the command below. [Already added to e2e.js in this repo]
   ```sh
   import 'cypress-mochawesome-reporter/register'
   ```
5. Open the Cypress Test Runner.
   ```sh
   npx cypress open
   ```
6. Click on a spec file to run the associated tests. 
7. Generate Mochaawesome reports of all the specs and video recording of all of them
   ```sh
   npx cypress run --e2e
   ```
