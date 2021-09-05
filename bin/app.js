"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';
const dotenv = require("dotenv");
dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});
const express = require("express");
const awilix_express_1 = require("awilix-express");
const container_1 = __importDefault(require("./container"));
const app = express();
exports.app = app;
app.use(express.json());
//Container
container_1.default(app);
//Controllers
app.use(awilix_express_1.loadControllers('controllers/*.ts', { cwd: __dirname }));
//# sourceMappingURL=app.js.map