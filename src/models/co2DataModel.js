import { InvalidCSVFormatError } from '../errors/modelErrors.js';

/**
 * Converts CSV row data into a CO2 data model, mapping each row to an object
 * with `year` and `co2Level` properties.
 *
 * This function assumes that the CSV data is in the format of `[['year', 'co2Level']]`,
 * where `year` and `co2Level` are strings. The function converts these strings into 
 * numeric values and validates that they are non-negative. It throws an error if any 
 * values are invalid or negative.
 *
 * @param {string[][]} csvRows - A 2D array of CSV data where each inner array
 *                               contains a year and CO2 level as strings.
 * @returns {{year: number, co2Level: number}[]} - An array of objects where each
 *                                                 object contains `year` (as a number)
 *                                                 and `co2Level` (as a floating point number).
 *
 * @throws {InvalidCSVFormatError} - Throws an error if any row contains non-numeric values
 *                                   or if the year or CO2 level is negative.
 *
 * @example
 * // Example usage:
 * const csvRows = [['2020', '414.24'], ['2021', '416.45']];
 * const dataModel = createCO2DataModel(csvRows);
 * console.log(dataModel);
 * // Output: [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }]
 */
export const createCO2DataModel = (csvRows) => {
    // Validate that each row contains valid numeric data and is non-negative
    for (const [year, co2Level] of csvRows) {
        if (isNaN(year) || isNaN(co2Level) || parseInt(year, 10) < 0 || parseFloat(co2Level) < 0) {
            throw new InvalidCSVFormatError(`Invalid data: Year (${year}) or CO2 Level (${co2Level}) is not a valid non-negative number.`);
        }
    }

    return csvRows.map(([year, co2Level]) => ({
        year: parseInt(year, 10),
        co2Level: parseFloat(co2Level)
    }));
};