"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const test_service_1 = require("./services/test.service");
const awilix_express_1 = require("awilix-express");
const subscription_repository_1 = require("./services/repositories/impl/mysql/subscription.repository");
const subscription_service_1 = require("./services/subscription.service");
const movement_repository_1 = require("./services/repositories/impl/mysql/movement.repository");
const balance_repository_1 = require("./services/repositories/impl/mysql/balance.repository");
const movement_service_1 = require("./services/movement.service");
exports.default = (app) => {
    const container = awilix_1.createContainer({ injectionMode: 'CLASSIC' });
    container.register({
        //repositories
        subscriptionRepository: awilix_1.asClass(subscription_repository_1.SubscriptionMySQLRepository).scoped(),
        balanceRepository: awilix_1.asClass(balance_repository_1.BalanceMySQLRepository).scoped(),
        movementRepository: awilix_1.asClass(movement_repository_1.MovementMySQLRepository).scoped(),
        //services
        testService: awilix_1.asClass(test_service_1.TestService).scoped(),
        subscriptionService: awilix_1.asClass(subscription_service_1.SubscriptionService).scoped(),
        movementService: awilix_1.asClass(movement_service_1.MovementService).scoped()
    });
    app.use(awilix_express_1.scopePerRequest(container));
};
//# sourceMappingURL=container.js.map