/**
 * Custom error class for invalid CSV format.
 */
export class InvalidCSVFormatError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidCSVFormatError';
    }
}