import { LinearModelFormatter } from '../src/utils/formatting.js';

describe('LinearModelFormatter', () => {
    it('should format linear equation correctly with positive intercept', () => {
        const equation = LinearModelFormatter.format(0.0032, 15.67);
        expect(equation).toBe('y = 0.00320x + 15.67');
    });

    it('should format linear equation correctly with negative intercept', () => {
        const equation = LinearModelFormatter.format(0.0032, -15.67);
        expect(equation).toBe('y = 0.00320x - 15.67');
    });

    it('should format linear equation correctly with zero intercept', () => {
        const equation = LinearModelFormatter.format(0.0032, 0);
        expect(equation).toBe('y = 0.00320x');
    });

    it('should format linear equation correctly with zero slope', () => {
        const equation = LinearModelFormatter.format(0, 15.67);
        expect(equation).toBe('y = 0.00000x + 15.67');
    });

    it('should format linear equation correctly with zero slope and zero intercept', () => {
        const equation = LinearModelFormatter.format(0, 0);
        expect(equation).toBe('y = 0.00000x');
    });

    it('should format linear equation correctly with negative slope and positive intercept', () => {
        const equation = LinearModelFormatter.format(-0.0032, 15.67);
        expect(equation).toBe('y = -0.00320x + 15.67');
    });

    it('should format linear equation correctly with negative slope and negative intercept', () => {
        const equation = LinearModelFormatter.format(-0.0032, -15.67);
        expect(equation).toBe('y = -0.00320x - 15.67');
    });
});