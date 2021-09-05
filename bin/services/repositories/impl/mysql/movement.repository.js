"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_persistence_1 = __importDefault(require("../../../../common/persistence/mysql.persistence"));
class MovementMySQLRepository {
    async all() {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_movement ORDER BY id DESC');
        return rows;
    }
    async find(id) {
        const [rows] = await mysql_persistence_1.default.execute('SELECT * FROM wallet_movement WHERE id = ?', [id]);
        if (rows.length) {
            return rows[0];
        }
        return null;
    }
    async store(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('INSERT INTO wallet_movement(user_id, type, amount, created_at) VALUES (?,?,?,?,?)', [entry.user_id, entry.type, entry.amount, now]);
    }
    async update(entry) {
        const now = new Date();
        const [rows] = await mysql_persistence_1.default.execute('UPDATE wallet_movement SET user_id=?, type=?, amount=?, updated_at=? WHERE id = ?', [entry.user_id, entry.type, entry.amount, now, entry.id]);
    }
    async remove(id) {
        const [rows] = await mysql_persistence_1.default.execute('DELETE FROM wallet_movement WHERE id = ?', [id]);
    }
}
exports.MovementMySQLRepository = MovementMySQLRepository;
//# sourceMappingURL=movement.repository.js.map