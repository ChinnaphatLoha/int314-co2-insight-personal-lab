import { processCO2Data } from '../src/services/co2Processor.js';
import * as fileUtils from '../src/utils/fileUtils.js';

jest.mock('../src/utils/fileUtils.js', () => ({
    readCSV: jest.fn()
}));

describe('processCO2Data', () => {
    it('should process valid CSV data correctly', () => {
        const csvData = [['2020', '414.24'], ['2021', '416.45']];
        fileUtils.readCSV.mockReturnValue(csvData);

        const result = processCO2Data('dummy/path.csv');
        expect(result).toEqual([
            { year: 2020, co2Level: 414.24 },
            { year: 2021, co2Level: 416.45 }
        ]);
    });

    it('should handle invalid CSV path', () => {
        fileUtils.readCSV.mockReturnValue(null);
        expect(() => processCO2Data('invalid/path.csv')).toThrow(Error);
    });
});