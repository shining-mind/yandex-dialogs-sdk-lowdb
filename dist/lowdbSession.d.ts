import { ISession } from 'yandex-dialogs-sdk';
interface ILowdbObject {
    get(key: string): any;
    unset(key: string): any;
    set(key: string, value: any): any;
}
export declare class LowDBSession implements ISession {
    readonly id: string;
    private readonly _sessionAdapter;
    constructor(sessionAdapter: ILowdbObject);
    has(key: string): boolean;
    delete(key: string): void;
    get<TValue>(key: string): TValue;
    set<TValue>(key: string, value: TValue): void;
}
export {};
