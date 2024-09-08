import { join } from 'path';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

import { generateUniqueFilename, ensureDirectoryExists, saveFile } from '../utils/fileUtils.js';

/**
 * Generates a scatter plot of CO2 data and saves it to a specified directory
 * as a PNG file with a unique filename.
 *
 * @param {{year: number, co2Level: number}[]} co2Data - An array of objects containing `year` and `co2Level`.
 * @param {string} outputDir - The directory where the scatter plot image will be saved.
 * @returns {Promise<string>} - A promise that resolves to the file path of the saved scatter plot image.
 *
 * @example
 * // Example usage:
 * const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];
 * const outputPath = await saveScatterPlot(co2Data, './output');
 * console.log(outputPath); // Output: './output/scatterPlot-unique-id.png'
 */
export const saveScatterPlot = async (co2Data, outputDir) => {
    const scatterPlotImage = await createScatterPlot(co2Data);
    const baseFilePath = join(outputDir, 'scatterPlot');
    const outputFilePath = generateUniqueFilename(baseFilePath, '.png');
    ensureDirectoryExists(outputDir);
    saveFile(outputFilePath, scatterPlotImage);
    return outputFilePath;
};

/**
 * Creates a scatter plot of CO2 data using ChartJS and returns it as a buffer.
 *
 * @param {{year: number, co2Level: number}[]} co2Data - An array of objects containing `year` and `co2Level`.
 * @returns {Promise<Buffer>} - A promise that resolves to a buffer containing the rendered scatter plot image.
 *
 * @example
 * // Example usage:
 * const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];
 * const scatterPlotBuffer = await createScatterPlot(co2Data);
 * // scatterPlotBuffer contains the image data.
 */
const createScatterPlot = async (co2Data) => {
    const chartCanvas = new ChartJSNodeCanvas({ width: 800, height: 600 });

    const data = {
        datasets: [{
            label: 'CO2 Levels over Time',
            data: co2Data.map(point => ({ x: point.year, y: point.co2Level })),
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
        }]
    };

    const config = {
        type: 'scatter',
        data,
        options: {
            scales: {
                x: { type: 'linear', position: 'bottom' },
                y: { type: 'linear' },
            }
        }
    };

    return await chartCanvas.renderToBuffer(config);
};
