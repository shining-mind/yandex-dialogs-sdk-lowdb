import { ISessionStorage, ISession } from 'yandex-dialogs-sdk';
import { LowdbSync } from 'lowdb';
interface Schema {
    sessions: [{
        id: string;
        session: any;
    }];
}
export declare class LowDBSessionStorage implements ISessionStorage {
    db: LowdbSync<Schema>;
    constructor(filePath: string);
    getOrCreate(id: string): Promise<ISession>;
}
export {};
