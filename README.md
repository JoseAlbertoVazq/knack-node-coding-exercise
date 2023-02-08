# Knack Take Home Test

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Install dependencies
```
cd ./josealbertovazq-node-coding-exercise-master
npm install
```
- Build and run the project
```
npm start
```


# Problem to solve: 

## Remove Duplicates From Mock Knack Application Schema

Knack is a no-code platform that includes an online database. Knack users will at times, through unexpected API usage or an unknown bug, corrupt their application schemas. One common issue they may run into is having duplicate fields and/or objects in their application schema. These duplicates cannot be removed by the Knack UI and lead to TypeErrors and other problems.

The purpose of this coding exercise is to create a Node.js application that can programmatically remove all duplicate fields and objects from the given mock application schema and output a new sanitized version.

The "mock_application.json" file in this repository contains data which represents an actual Knack application schema including all currently existing properties. Your code should process the data, remove any duplicates, and output a new JSON file "clean_application.json" which retains all other properties of the Knack application.

Within a standard Knack application there is a `versions` property which has 2 collections:
1. `objects`: an array of Knack "objects" which contains "fields"
2. `scenes`: an array of Knack "scenes" which contains "views"

### Requirements
- The code should be written in JS and utilize the Node.js framework
- We expect tests (unit tests on business logic, etc. - whatever you are comfortable with)
- We expect to see documentation in the form of a README
- We're looking for code that would be easy to maintain
- We're looking for code that would scale

### Time
We understand that you are busy and programming projects can take a long time. We advise spending 2 hours on the exercise and seeing where you get. If there are still open requirements at the end of the 2 hour period, feel free to outline what it would take to complete those in TODO comments inline in the code, or a list of notes on what you'd need to do finish things up. If you want to keep working and take things over the finish line, great.

### Notes
- Leveraging 3rd party libraries/modules is perfectly fine

### How to submit your solution
- Please send us a zip or a tar of the `node-coding-exercise-master` directory which should include your application




## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **test**                 | Contains test suites
| **test/assets**          | Contains a json file for test purposes 
| index.js                 | Entry point which contains the whole logic.                                                               |
| package.json             | Contains npm dependencies as well as build scripts.
| mock_application.json    | The JSON file which we will work with

## Building the project

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on index.js. Can be invoked with `npm start`                  |
| `test`                    | Runs build and run tests using jest. Can be invoked with `npm run test`        |

## Testing
The tests are  written in [Jest](https://jestjs.io/). This tests are located in src/test folder.

```
  "jest": "^29.4.2",
```

After running tests, a /coverage folder will be created with some info about the results.

## P.S.
As the problem statement did not ask for it, the logic it is not inside a API flow using Express or anything like it. It will be more efficient for this home test scenario.

## Author
José Alberto Vázquez López
@JoseAlbertoVazq

