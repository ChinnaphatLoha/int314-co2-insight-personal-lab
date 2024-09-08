import { createCO2DataModel } from '../src/models/co2DataModel';
import { InvalidCSVFormatError } from '../src/errors/modelErrors.js';

describe('createCO2DataModel', () => {
    it('should correctly convert CSV row data to CO2 data model', () => {
        const csvRows = [['2020', '414.24'], ['2021', '416.45']];
        const result = createCO2DataModel(csvRows);

        expect(result).toEqual([
            { year: 2020, co2Level: 414.24 },
            { year: 2021, co2Level: 416.45 }
        ]);
    });

    it('should handle empty input', () => {
        const csvRows = [];
        const result = createCO2DataModel(csvRows);
        expect(result).toEqual([]);
    });

    it('should handle invalid data format gracefully', () => {
        const csvRows = [['invalidYear', 'invalidCO2']];
        expect(() => createCO2DataModel(csvRows)).toThrow(InvalidCSVFormatError);
    });

    it('should handle negative values gracefully', () => {
        const csvRows = [['-2020', '414.24'], ['2021', '-416.45']];
        expect(() => createCO2DataModel(csvRows)).toThrow(InvalidCSVFormatError);
    });
});