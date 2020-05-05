"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowdbSessionStorage_1 = require("./lowdbSessionStorage");
const yandex_dialogs_sdk_1 = require("yandex-dialogs-sdk");
function createStorage(path) {
    const storage = new lowdbSessionStorage_1.LowDBSessionStorage(path);
    return storage;
}
exports.createStorage = createStorage;
function createMiddleware(storage) {
    return yandex_dialogs_sdk_1.sessionMiddleware(storage);
}
exports.createMiddleware = createMiddleware;
