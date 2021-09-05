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
const subscription_service_1 = require("../services/subscription.service");
let SubscriptionController = class SubscriptionController extends base_controller_1.BaseController {
    constructor(subscriptionService) {
        super();
        this.subscriptionService = subscriptionService;
    }
    async all(req, res) {
        try {
            res.send(await this.subscriptionService.all());
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
    async find(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.subscriptionService.find(id);
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
            await this.subscriptionService.store({
                user_id: req.body.user_id,
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            });
            res.send();
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            await this.subscriptionService.update(id, {
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            });
            res.send();
        }
        catch (error) {
            this.handleException(error, res);
        }
    }
    async remove(req, res) {
        try {
            const id = parseInt(req.params.id);
            await this.subscriptionService.remove(id);
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
], SubscriptionController.prototype, "all", null);
__decorate([
    awilix_express_1.route('/:id'),
    awilix_express_1.GET(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "find", null);
__decorate([
    awilix_express_1.POST(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "store", null);
__decorate([
    awilix_express_1.route('/:id'),
    awilix_express_1.PUT(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "update", null);
__decorate([
    awilix_express_1.route('/:id'),
    awilix_express_1.DELETE(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "remove", null);
SubscriptionController = __decorate([
    awilix_express_1.route('/subscriptions'),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], SubscriptionController);
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map