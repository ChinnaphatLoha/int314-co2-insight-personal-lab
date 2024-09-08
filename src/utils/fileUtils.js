import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Reads a CSV file from the given file path and returns the data as a 2D array.
 * Each inner array represents a row of data with trimmed cells. The header row is skipped.
 *
 * @param {string} filePath - The path to the CSV file.
 * @returns {string[][]} - A 2D array where each inner array represents a row of data from the CSV.
 *
 * @example
 * // Example usage:
 * const data = readCSV('path/to/file.csv');
 * // Example output: [['2020', '414.24'], ['2021', '416.45']]
 */
export const readCSV = (filePath) => {
    const data = readFileSync(filePath, 'utf8');
    return data.trim().split('\n').slice(1) // Skip the header
        .map(row => row.split(',').map(cell => cell.trim()));
};

/**
 * Ensures that the specified directory exists. If the directory does not exist,
 * it creates the directory (including parent directories, if needed).
 *
 * @param {string} dirPath - The path of the directory to check or create.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * ensureDirectoryExists('./output');
 * // The './output' directory is created if it doesn't exist.
 */
export const ensureDirectoryExists = (dirPath) => {
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
};

/**
 * Saves data to a specified file path.
 *
 * @param {string} filePath - The path where the file will be saved.
 * @param {Buffer|string} data - The data to write to the file.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * saveFile('./output/scatterPlot.png', imageData);
 * // The image data is saved to the specified file.
 */
export const saveFile = (filePath, data) => {
    writeFileSync(filePath, data);
};

/**
 * Generates a unique filename by appending a counter if a file with the same name already exists.
 * The function checks for existing files and ensures the new filename does not overwrite any existing files.
 *
 * @param {string} basePath - The base file path (without the extension).
 * @param {string} ext - The file extension (e.g., '.png').
 * @returns {string} - A unique file path with the provided extension.
 *
 * @example
 * // Example usage:
 * const uniqueFilename = generateUniqueFilename('./output/scatterPlot', '.png');
 * // If './output/scatterPlot.png' already exists, it will return './output/scatterPlot(1).png'.
 */
export const generateUniqueFilename = (basePath, ext) => {
    let i = 1;
    let filename = basePath;

    while (existsSync(filename + ext)) {
        filename = `${basePath}(${i})`;
        i++;
    }

    return filename + ext;
};
