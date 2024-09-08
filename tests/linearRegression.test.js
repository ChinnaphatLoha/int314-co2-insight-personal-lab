import { calculateLinearRegression } from '../src/services/linearRegression.js';
import { DivisionByZeroError } from '../src/errors/commonErrors.js';
import { EmptyDataError } from '../src/errors/serviceErrors.js';

describe('calculateLinearRegression', () => {
    it('should calculate the correct slope and intercept', () => {
        const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];
        const { slope, intercept, model } = calculateLinearRegression(co2Data);

        expect(slope).toBeCloseTo(2.21, 2);
        expect(intercept).toBeCloseTo(-4049.96, 2);
        expect(model(2022)).toBeCloseTo(418.66, 2);
    });

    it('should handle empty data', () => {
        const co2Data = [];
        expect(() => calculateLinearRegression(co2Data)).toThrow(EmptyDataError);
    });

    it('should handle data that causes division by zero', () => {
        // Data with identical x values to simulate collinearity (denominator = 0)
        const co2Data = [
            { year: 2020, co2Level: 414.24 },
            { year: 2020, co2Level: 416.45 } // Same year
        ];
        expect(() => calculateLinearRegression(co2Data)).toThrow(DivisionByZeroError);
    });
});