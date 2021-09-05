"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_exception_1 = require("../exceptions/application.exception");
class BaseController {
    handleException(err, res) {
        if (err instanceof application_exception_1.ApplicationException) {
            res.status(400);
            res.send(err.message);
        }
        else {
            throw new Error(err);
        }
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map