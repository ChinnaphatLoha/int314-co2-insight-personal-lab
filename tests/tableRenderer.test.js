import { renderTable } from '../src/services/tableRenderer.js';

describe('renderTable', () => {
    it('should render the table in the console', () => {
        const consoleSpy = jest.spyOn(console, 'table').mockImplementation(() => { });
        const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];

        renderTable(co2Data);

        expect(consoleSpy).toHaveBeenCalledWith([
            { Year: 2020, "CO2 Level (ppm)": 414.24 },
            { Year: 2021, "CO2 Level (ppm)": 416.45 }
        ]);
        consoleSpy.mockRestore();
    });
});