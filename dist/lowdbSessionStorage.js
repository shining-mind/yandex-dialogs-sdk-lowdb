"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
const lowdb_1 = __importDefault(require("lowdb"));
const lowdbSession_1 = require("./lowdbSession");
class LowDBSessionStorage {
    constructor(filePath) {
        const adapter = new FileSync_1.default(filePath);
        this.db = lowdb_1.default(adapter);
    }
    async getOrCreate(id) {
        const sessions = this.db.get('sessions');
        if (!sessions.value()) {
            this.db.defaults({ sessions: [] }).write();
        }
        const sessionData = this.db.get('sessions').find({ id });
        if (!sessionData.value()) {
            sessions.push({ id, session: {} }).write();
        }
        const session = new lowdbSession_1.LowDBSession(sessionData);
        return session;
    }
}
exports.LowDBSessionStorage = LowDBSessionStorage;
