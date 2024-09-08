import { saveScatterPlot } from '../src/services/scatterPlot.js';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import * as fileUtils from '../src/utils/fileUtils.js';

jest.mock('chartjs-node-canvas');
jest.mock('../src/utils/fileUtils.js', () => ({
    generateUniqueFilename: jest.fn(),
    saveFile: jest.fn(),
    ensureDirectoryExists: jest.fn()
}));

describe('saveScatterPlot', () => {
    const co2Data = [{ year: 2020, co2Level: 414.24 }, { year: 2021, co2Level: 416.45 }];

    it('should generate and save the scatter plot image', async () => {
        ChartJSNodeCanvas.mockImplementation(() => ({
            renderToBuffer: jest.fn().mockResolvedValue(Buffer.from('dummy buffer'))
        }));
        fileUtils.generateUniqueFilename.mockReturnValue('scatterPlot.png');

        const result = await saveScatterPlot(co2Data, './output');
        expect(fileUtils.ensureDirectoryExists).toHaveBeenCalledWith('./output');
        expect(fileUtils.saveFile).toHaveBeenCalledWith('scatterPlot.png', expect.any(Buffer));
        expect(result).toBe('scatterPlot.png');
    });
});