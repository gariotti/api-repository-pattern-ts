"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_exception_1 = require("../common/exceptions/application.exception");
class SubscriptionService {
    constructor(subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }
    async find(id) {
        return await this.subscriptionRepository.find(id);
    }
    async all() {
        return await this.subscriptionRepository.all();
    }
    async store(entry) {
        const originalEntry = await this.subscriptionRepository.findByUserAndCode(entry.user_id, entry.code);
        if (!originalEntry) {
            await this.subscriptionRepository.store(entry);
        }
        else {
            throw new application_exception_1.ApplicationException('User subscription already exists.');
        }
    }
    async update(id, entry) {
        const originalEntry = await this.subscriptionRepository.find(id);
        if (originalEntry) {
            originalEntry.code = entry.code;
            originalEntry.amount = entry.amount;
            originalEntry.cron = entry.cron;
            await this.subscriptionRepository.update(originalEntry);
        }
        else {
            throw new application_exception_1.ApplicationException('User subscription not found.');
        }
    }
    async remove(id) {
        return await this.subscriptionRepository.remove(id);
    }
}
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map