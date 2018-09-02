import { ISession } from 'yandex-dialogs-sdk';
import { AdapterSync, LowdbSync } from 'lowdb';

export class LowDBSession implements ISession {
  public readonly id: string;
  private readonly _sessionAdapter: LowdbSync<AdapterSync>;

  constructor(sessionAdapter: LowdbSync<AdapterSync>) {
    this._sessionAdapter = sessionAdapter;
  }

  public has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  public delete(key: string): void {
    this._sessionAdapter.unset(key).write();
  }

  public get<TValue>(key: string): TValue {
    return this._sessionAdapter.get(`session.${key}`).value();
  }

  public set<TValue>(key: string, value: TValue): void {
    this._sessionAdapter.set(`session.${key}`, value).write();
  }
}
