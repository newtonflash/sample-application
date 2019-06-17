# Sample application with product selection using react.

Status: In progress

## What does it do

This runs a product listing page with filters to choose by size of the articles.

## Key library / Technology used

1. React for templating.
2. Sass along with BEM ( Avoiding style components) for the shake of simplicity of thie application
3. Jest/enzyme for the test cases
4. Storybook for local previewing of the components.

## Installation

```shell
    npm install
    npm start
    npm test

```

1. Run `npm install` to install the required dependencies including storybook
2. Run `npm start` to start storybook. Upon successfull build, it should open a browser to run the application
3. Run `npm test` to test the javascript used.

Note: You may have to accept the local security certificate in order to run the application on the browser.

## Assumptions

1. This application is right now built to run on the javacript that runs at the browser to create the dom.
2. As a scope of the showcase, the application creates a single component bundle via storybook for javascript.
3. Component packaging for final deployment on any production server/ integration with any cms ( js/ css/ images/ fonts) are not in the this scope.

## TODO

1. Write test cases for all the code base.
2. Add more documentation.
3. For processs improvement, add some commit/push hooks for test case qualification and code basic code linting.
4. Include circleci commands for automated builds


JUST TO UPDATE README