"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_persistence_1 = __importDefault(require("../../../../common/persistence/mysql.persistence"));
class BalanceMySQLRepository {
    async all() {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_balance ORDER BY id DESC');
        return rows;
    }
    async find(id) {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_balance WHERE id = ?', [id]);
        if (rows.length) {
            return rows[0];
        }
        return null;
    }
    async findByUserId(user_id) {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_balance WHERE user_id = ?', [user_id]);
        if (rows.length) {
            return rows[0];
        }
        return null;
    }
    async store(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('INSERT INTO wallet_balance(id, user_id, amount, created_at) VALUES (?,?,?,?)', [entry.id, entry.user_id, entry.amount, now]);
    }
    async update(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('UPDATE wallet_balance SET user_id=?, amount=?, updated_at=? WHERE id = ?', [entry.user_id, entry.amount, now, entry.id]);
    }
    async remove(id) {
        const [rows] = await mysql_persistence_1.default.execute('DELETE FROM wallet_balance WHERE id = ?', [id]);
    }
}
exports.BalanceMySQLRepository = BalanceMySQLRepository;
//# sourceMappingURL=balance.repository.js.map