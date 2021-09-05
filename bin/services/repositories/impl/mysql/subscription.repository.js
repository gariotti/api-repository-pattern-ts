"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_persistence_1 = __importDefault(require("../../../../common/persistence/mysql.persistence"));
class SubscriptionMySQLRepository {
    async all() {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_subscription ORDER BY id DESC');
        return rows;
    }
    async find(id) {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_subscription WHERE id = ?', [id]);
        if (rows.length) {
            return rows[0];
        }
        return null;
    }
    async findByUserAndCode(user_id, code) {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_subscription WHERE user_id = ? and code = ?', [user_id, code]);
        if (rows.length) {
            return rows[0];
        }
        return null;
    }
    async store(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at) VALUES (?,?,?,?,?)', [entry.user_id, entry.code, entry.amount, entry.cron, now]);
    }
    async update(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('UPDATE wallet_subscription SET user_id=?, code=?, amount=?, cron=?, updated_at=? WHERE id = ?', [entry.user_id, entry.code, entry.amount, entry.cron, now, entry.id]);
    }
    async remove(id) {
        const [rows] = await mysql_persistence_1.default.execute('DELETE FROM wallet_subscription WHERE id = ?', [id]);
    }
}
exports.SubscriptionMySQLRepository = SubscriptionMySQLRepository;
//# sourceMappingURL=subscription.repository.js.map