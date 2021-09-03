# Endless

## Hosting
Currently hosting in an Amazon S3 bucket for convenience.

URL: http://endlessfrontend.s3-website.us-east-2.amazonaws.com/

Project can be run locally via npm start, use npm install to install project dependencies

## Structure
Project was bootstrapped using create-react-app. Some of the left over stuff from that is in the public folder. I've slightly modified index.html and manifest.

I'm not fast with webpack for handling the bundling/minifying and all that so letting CRA handle that.

### Linter
ESLint settings can be found in the .eslintrc.js and .eslintignore files. These setting are some I copy and pasted from a previous project. Script for running lint is "npm run lint"

### Environment
There is an .env config file. This doesn't have any secret keys, just the URL for the API, so I'm fine with adding to git.

### Tests
Test are configured using Jest. I included a couple before any development on the React components. These are mostly to test functionality on what I thought were the most important components - the Get Started button and the How It Works section.

These can be found in src/tests. "npm run test" and "npm run coverage" will run the tests and run+include coverage respectively.

I've included a requests directory with a file containing a GET request to the API. This can be run with the VSCode extension REST Client. I find this handy for quickly testing http requests.

### Static content
I've pulled the static image files from the github and seperated them. The logo and jpegs are kept under src/assets/img. I've also kept the png and psd files in a seperate directory ignored by git. The logo code was modified so it would match the color of the button.

Font was downloaded and included in src/assets/font.

I've included CSS files in a styles folder.

### Main content
App.js uses state and effect hooks to manage the latest steps retrieved from the API. API calls are done via axios and can be found in src/services.

We have three components. Header is just the logo. GetStarted contains the cover photo, the text before the button and the button. HowItWorks contains a heading and is passed a list of steps via props which it builds accordingly.

### Utilities
There is a helper function for extracting the latest steps from whats retrieved by the API, in src/utilities. 

