# CO2 Insight

Welcome to **CO2 Insight** – a Node.js application designed to process, analyze, and visualize CO2 level data from CSV files. With CO2 Insight, you can transform raw CO2 data into visualizations, including tables and scatter plots, while leveraging linear regression models.

## Table of Contents

- [CO2 Insight](#co2-insight)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Testing](#testing)
  - [Project Modules](#project-modules)
    - [Main Application](#main-application)
    - [Models](#models)
    - [Services](#services)
    - [Utilities](#utilities)
    - [Errors](#errors)
  - [Configuration](#configuration)
    - [Babel](#babel)
    - [Jest](#jest)
  - [License](#license)

## Project Structure

Here's a snapshot of the project's directory layout:

```text
.babelrc
.gitignore
jest.config.js
package.json
src/
    data/
        co2data.csv
    errors/
        commonErrors.js
        modelErrors.js
        serviceErrors.js
    models/
        co2DataModel.js
    services/
        co2Processor.js
        linearRegression.js
        scatterPlot.js
        tableRenderer.js
    utils/
        fileUtils.js
        formatting.js
    main.js
tests/
    co2DataModel.test.js
    co2Processor.test.js
    fileUtils.test.js
    formatting.test.js
    linearRegression.test.js
    scatterPlot.test.js
    tableRenderer.test.js
```

## Installation

To get started with CO2 Insight, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ChinnaphatLoha/int314-co2-insight-personal-lab.git
   cd int314-co2-insight-personal-lab
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

To run CO2 Insight, use the following command:

```sh
npm start
```

This command will process the CO2 data from `src/data/co2data.csv`, render it in a table, generate a scatter plot, and calculate a linear regression model.

## Scripts

- `npm start`: Launches the main application.
- `npm test`: Executes the test suite.
- `npm run test:coverage`: Runs tests and generates a coverage report.

## Testing

CO2 Insight uses Jest for testing. Test files are located in the `tests` directory, covering various modules and functionalities.

To run the tests, use:

```sh
npm test
```

## Project Modules

### Main Application

- [`src/main.js`](src/main.js): Entry point of the application. Handles CO2 data processing, table rendering, scatter plot generation, and linear regression modeling.

### Models

- [`src/models/co2DataModel.js`](src/models/co2DataModel.js): Contains the `createCO2DataModel` function to convert CSV row data into CO2 data models.

### Services

- [`src/services/co2Processor.js`](src/services/co2Processor.js): Processes CO2 data from CSV files.
- [`src/services/linearRegression.js`](src/services/linearRegression.js): Calculates linear regression models.
- [`src/services/scatterPlot.js`](src/services/scatterPlot.js): Generates and saves scatter plot images.
- [`src/services/tableRenderer.js`](src/services/tableRenderer.js): Renders CO2 data in table format.

### Utilities

- [`src/utils/fileUtils.js`](src/utils/fileUtils.js): Provides utility functions for file operations, such as reading CSV files and saving data.
- [`src/utils/formatting.js`](src/utils/formatting.js): Includes formatting utilities, including the `LinearModelFormatter`.

### Errors

- [`src/errors/modelErrors.js`](src/errors/modelErrors.js): Defines custom errors related to data models.
- [`src/errors/serviceErrors.js`](src/errors/serviceErrors.js): Contains custom errors related to services.
- [`src/errors/commonErrors.js`](src/errors/commonErrors.js): Includes common errors used throughout the application.

## Configuration

### Babel

The project uses Babel for JavaScript transpilation. Configuration is in the `.babelrc` file:

```json
{
    "presets": ["@babel/preset-env"]
}
```

### Jest

Jest configuration is in the `jest.config.js` file:

```js
export default {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    collectCoverage: true,
    coverageReporters: ['text'],
};
```

## License

This project is licensed under the [MIT License](LICENSE).
