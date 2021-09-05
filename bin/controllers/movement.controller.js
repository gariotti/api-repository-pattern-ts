"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_express_1 = require("awilix-express");
const base_controller_1 = require("../common/controllers/base.controller");
const movement_service_1 = require("../services/movement.service");
let MovementController = class MovementController extends base_controller_1.BaseController {
    constructor(movementService) {
        super();
        this.movementService = movementService;
    }
    async all(req, res) {
        try {
            res.send(await this.movementService.all());
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
    async find(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.movementService.find(id);
            if (result) {
                res.send(result);
            }
            else {
                res.status(404);
                res.send();
            }
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
    async store(req, res) {
        try {
            await this.movementService.store({
                user_id: req.body.user_id,
                type: req.body.type,
                amount: req.body.amount
            });
            res.send();
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
};
__decorate([
    awilix_express_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovementController.prototype, "all", null);
__decorate([
    awilix_express_1.route('/:id'),
    awilix_express_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovementController.prototype, "find", null);
__decorate([
    awilix_express_1.POST(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MovementController.prototype, "store", null);
MovementController = __decorate([
    awilix_express_1.route('/movements'),
    __metadata("design:paramtypes", [movement_service_1.MovementService])
], MovementController);
exports.MovementController = MovementController;
//# sourceMappingURL=movement.controller.js.map