import { readCSV, generateUniqueFilename, ensureDirectoryExists, saveFile } from '../src/utils/fileUtils.js';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'fs';

jest.mock('fs', () => ({
    readFileSync: jest.fn(),
    existsSync: jest.fn(),
    mkdirSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

describe('fileUtils', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should read CSV and parse correctly', () => {
        const mockCSVContent = 'year,co2\n2020,414.24\n2021,416.45';
        readFileSync.mockReturnValue(mockCSVContent);

        const data = readCSV('path/to/file.csv');
        expect(data).toEqual([['2020', '414.24'], ['2021', '416.45']]);
    });

    it('should generate a unique filename', () => {
        existsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const filename = generateUniqueFilename('scatterPlot', '.png');
        expect(filename).toBe('scatterPlot(1).png');
    });

    it('should create a directory if it does not exist', () => {
        existsSync.mockReturnValue(false);
        const dirPath = './testDir';

        ensureDirectoryExists(dirPath);

        expect(existsSync).toHaveBeenCalledWith(dirPath);
        expect(mkdirSync).toHaveBeenCalledWith(dirPath, { recursive: true });
    });

    it('should not create a directory if it already exists', () => {
        existsSync.mockReturnValue(true);
        const dirPath = './testDir';

        ensureDirectoryExists(dirPath);

        expect(existsSync).toHaveBeenCalledWith(dirPath);
        expect(mkdirSync).not.toHaveBeenCalled();
    });

    it('should save data to a file', () => {
        const filePath = './output/scatterPlot.png';
        const data = Buffer.from('image data');

        saveFile(filePath, data);

        expect(writeFileSync).toHaveBeenCalledWith(filePath, data);
    });
});