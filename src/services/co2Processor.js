import { readCSV } from "../utils/fileUtils.js";
import { createCO2DataModel } from "../models/co2DataModel.js";

/**
 * Processes CO2 data from a CSV file by reading the file, parsing the content,
 * and transforming it into a CO2 data model.
 *
 * @param {string} filePath - The path to the CSV file containing the CO2 data.
 * @returns {{year: number, co2Level: number}[]} - An array of objects where each
 *                                                 object represents a year's CO2 level,
 *                                                 with `year` as a number and `co2Level` as a float.
 *
 * @example
 * // Example usage:
 * const data = processCO2Data('path/to/co2_data.csv');
 * console.log(data);
 * // Output: [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }]
 */
export const processCO2Data = (filePath) => {
    const csvData = readCSV(filePath);
    return createCO2DataModel(csvData);
};