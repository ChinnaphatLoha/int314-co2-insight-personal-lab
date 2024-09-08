import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import { processCO2Data } from './services/co2Processor.js';
import { renderTable } from './services/tableRenderer.js';
import { calculateLinearRegression } from './services/linearRegression.js';
import { saveScatterPlot } from './services/scatterPlot.js';
import { LinearModelFormatter } from './utils/formatting.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'data', 'co2data.csv');
const outputDir = join(__dirname, 'output');

const main = async () => {
    // Process CO2 data
    const co2Data = processCO2Data(filePath);

    // Show the table
    renderTable(co2Data);

    // Generate and save scatter plot
    const scatterPlotPath = await saveScatterPlot(co2Data, outputDir);
    console.log(`Scatter plot image saved at: ${scatterPlotPath}`);

    // Calculate and log linear regression model
    const { slope, intercept } = calculateLinearRegression(co2Data);
    const formattedModel = LinearModelFormatter.format(slope, intercept);
    console.log(`Linear model: ${formattedModel}`);
};

main();