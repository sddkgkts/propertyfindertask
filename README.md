Cypress Cucumber Test Framework
This guide provides detailed steps on using the Cypress Cucumber test framework to create and execute test cases using JavaScript.

Installation
To install the necessary dependencies, execute the following commands:
npm install
npx cypress open 

Tech Stack
JavaScript
BDD Framework: Cucumber
Cypress
Writing Test Cases
Follow this structured hierarchy to create and execute test scenarios:

1- Features: Navigate to e2e/features and create a .feature file. Document your test scenarios in this file.

2- Step-Definition: In integration/step-definition, write the corresponding steps for the scenarios. Import Gherkin keywords from "cypress-cucumber-preprocessor/steps".

3- Pages: Develop a page class to encapsulate actions performed on web pages, such as clicking elements or entering text into input fields.

4- Once you've completed these steps, run the command npx cypress open. Select "E2E Testing," choose your preferred browser, and then select your specific .feature file to run the test case.

5- Congratulations, you're now ready to execute your first test case!

Running Tests
Test with Mochawesome Report
To run tests with the Mochawesome report, use the command:
npm run test:cy


Test with CucumberHTML Report
For executing tests with the CucumberHTML report, use the command:
npm run TestWithReportGeneration