/**
 * Custom error class for empty data input.
 */
export class EmptyDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmptyDataError';
    }
}