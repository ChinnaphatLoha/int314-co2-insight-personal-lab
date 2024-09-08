/**
 * Renders CO2 data as a table in the console, displaying the year and CO2 level (in ppm).
 *
 * @param {{year: number, co2Level: number}[]} co2Data - An array of objects where each object contains:
 *                                                       - `year`: The year as a number.
 *                                                       - `co2Level`: The CO2 level for that year in ppm.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];
 * renderTable(co2Data);
 * // Console output:
 * // ┌─────────┬───────┬─────────────────┐
 * // │ (index) │ Year  │ CO2 Level (ppm) │
 * // ├─────────┼───────┼─────────────────┤
 * // │    0    │ 2020  │     414.24      │
 * // │    1    │ 2021  │     416.45      │
 * // └─────────┴───────┴─────────────────┘
 */
export const renderTable = (co2Data) => {
    console.table(co2Data.map(({ year, co2Level }) => ({ Year: year, "CO2 Level (ppm)": co2Level })));
};