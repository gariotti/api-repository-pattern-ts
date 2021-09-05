"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationException extends Error {
    constructor(message = 'An unexpected error ocurred') {
        super(message);
    }
}
exports.ApplicationException = ApplicationException;
//# sourceMappingURL=application.exception.js.map