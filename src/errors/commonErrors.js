/**
 * Custom error class for division by zero errors.
 */
export class DivisionByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivisionByZeroError';
    }
}