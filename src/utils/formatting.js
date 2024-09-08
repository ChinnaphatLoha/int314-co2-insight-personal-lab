/**
 * A utility class for formatting linear regression model equations.
 */
export class LinearModelFormatter {
    /**
     * Formats the linear regression model equation as a readable string in the form `y = mx + b`.
     *
     * @param {number} slope - The slope (m) of the linear regression line.
     * @param {number} intercept - The intercept (b) of the linear regression line.
     * @returns {string} - A formatted string representing the linear equation.
     *
     * @example
     * // Example usage:
     * const formattedEquation = LinearModelFormatter.format(0.0032, 15.67);
     * console.log(formattedEquation); // Output: 'y = 0.00320x + 15.67'
     */
    static format(slope, intercept) {
        const formattedSlope = slope.toFixed(5);
        const formattedIntercept = intercept !== 0 ? Math.abs(intercept).toFixed(2) : '';

        let sign = '';
        if (intercept > 0) {
            sign = ' + ';
        } else if (intercept < 0) {
            sign = ' - ';
        }

        return `y = ${formattedSlope}x${sign}${formattedIntercept}`;
    }
}