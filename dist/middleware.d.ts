import { LowDBSessionStorage } from './lowdbSessionStorage';
export declare function createStorage(path: string): LowDBSessionStorage;
export declare function createMiddleware(storage: LowDBSessionStorage): import("yandex-dialogs-sdk").Middleware<import("yandex-dialogs-sdk").ISessionContext, import("yandex-dialogs-sdk").IContext>;
