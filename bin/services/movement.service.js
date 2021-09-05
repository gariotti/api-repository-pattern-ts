"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movement_type_1 = require("../common/enums/movement-type");
const application_exception_1 = require("../common/exceptions/application.exception");
class MovementService {
    constructor(movementRepository, balanceRepository) {
        this.movementRepository = movementRepository;
        this.balanceRepository = balanceRepository;
    }
    async find(id) {
        return await this.movementRepository.find(id);
    }
    async all() {
        return await this.movementRepository.all();
    }
    async store(entry) {
        const balance = await this.balanceRepository.findByUserId(entry.user_id);
        if (entry.type === movement_type_1.MovementType.income) {
            await this.income(entry, balance);
        }
        else if (entry.type === movement_type_1.MovementType.outcome) {
            await this.outcome(entry, balance);
        }
        else {
            throw new application_exception_1.ApplicationException('Invalid movement type supplied.');
        }
    }
    async income(entry, balance) {
        if (!balance) {
            await this.balanceRepository.store({
                amount: entry.amount,
                user_id: entry.user_id
            });
        }
        else {
            balance.amount += entry.amount;
            await this.balanceRepository.update(balance);
        }
        await this.movementRepository.store(entry);
    }
    async outcome(entry, balance) {
        if (!balance || balance.amount < entry.amount) {
            throw new application_exception_1.ApplicationException('User does not have enough balance.');
        }
        else {
            balance.amount -= entry.amount;
            await this.balanceRepository.update(balance);
            await this.movementRepository.store(entry);
        }
    }
}
exports.MovementService = MovementService;
//# sourceMappingURL=movement.service.js.map