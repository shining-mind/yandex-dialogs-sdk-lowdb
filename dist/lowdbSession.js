"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LowDBSession {
    constructor(sessionAdapter) {
        this._sessionAdapter = sessionAdapter;
    }
    has(key) {
        return this.get(key) !== undefined;
    }
    delete(key) {
        this._sessionAdapter.unset(`session.${key}`).write();
    }
    get(key) {
        return this._sessionAdapter.get(`session.${key}`).value();
    }
    set(key, value) {
        this._sessionAdapter.set(`session.${key}`, value).write();
    }
}
exports.LowDBSession = LowDBSession;
