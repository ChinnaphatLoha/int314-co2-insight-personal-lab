import { EmptyDataError } from '../errors/serviceErrors.js';
import { DivisionByZeroError } from '../errors/commonErrors.js';

/**
 * Calculates the linear regression model (slope and y-intercept) for a set of CO2 data points.
 *
 * @param {{year: number, co2Level: number}[]} co2Data - An array of objects where each object 
 *                                                       contains a `year` and a `co2Level`.
 * @returns {{slope: number, intercept: number, model: (x: number) => number}} - An object containing:
 *                                                                               - `slope`: The slope of the linear regression line.
 *                                                                               - `intercept`: The y-intercept of the linear regression line.
 *                                                                               - `model`: A function that predicts the CO2 level for a given year (x).
 *                                                                                         Takes a `year` (x) as input and returns the predicted CO2 level.
 *
 * @throws {EmptyDataError} - Throws an error if the input data array is empty.
 * @throws {DivisionByZeroError} - Throws an error if a division by zero occurs during slope calculation.
 *
 * @example
 * // Example usage:
 * const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];
 * const { slope, intercept, model } = calculateLinearRegression(co2Data);
 * console.log(slope, intercept); // Output: slope and intercept values
 * console.log(model(2022)); // Output: predicted CO2 level for the year 2022
 */
export const calculateLinearRegression = (co2Data) => {
    if (co2Data.length === 0) {
        throw new EmptyDataError('The provided CO2 data array is empty.');
    }

    const n = co2Data.length;
    const sumX = co2Data.reduce((sum, point) => sum + point.year, 0);
    const sumY = co2Data.reduce((sum, point) => sum + point.co2Level, 0);
    const sumXY = co2Data.reduce((sum, point) => sum + (point.year * point.co2Level), 0);
    const sumX2 = co2Data.reduce((sum, point) => sum + (point.year * point.year), 0);

    const denominator = (n * sumX2 - sumX * sumX);
    if (denominator === 0) {
        throw new DivisionByZeroError('Division by zero occurred during slope calculation. Ensure data points are not collinear.');
    }

    const slope = (n * sumXY - sumX * sumY) / denominator;
    const intercept = (sumY - slope * sumX) / n;

    return {
        slope,
        intercept,
        model: (x) => slope * x + intercept
    };
};