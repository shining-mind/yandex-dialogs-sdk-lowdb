import { Session } from 'yandex-dialogs-sdk';

interface LowdbObject {
  get(key: string): any;
  unset(key: string): any;
  set(key: string, value: any): any;
}
export class LowDBSession implements Session {
  public readonly id: string;
  private readonly _sessionAdapter: LowdbObject;

  constructor(sessionAdapter: LowdbObject) {
    this._sessionAdapter = sessionAdapter;
    this.id = 'lowdb'
  }

  public has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  public delete(key: string): void {
    this._sessionAdapter.unset(`session.${key}`).write();
  }

  public get<TValue>(key: string): TValue {
    return this._sessionAdapter.get(`session.${key}`).value();
  }

  public set<TValue>(key: string, value: TValue): void {
    this._sessionAdapter.set(`session.${key}`, value).write();
  }
}
