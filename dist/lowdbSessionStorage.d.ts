import { ISessionStorage, ISession } from 'yandex-dialogs-sdk';
export declare class LowDBSessionStorage implements ISessionStorage {
    private db;
    constructor(filePath: string);
    getOrCreate(id: string): Promise<ISession>;
}
