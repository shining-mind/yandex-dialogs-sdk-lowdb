import FileSync from 'lowdb/adapters/FileSync';
import { SessionStorage, Session } from 'yandex-dialogs-sdk';
import low, { AdapterSync, LowdbSync } from 'lowdb';
import { LowDBSession } from './lowdbSession';

export class LowDBSessionStorage implements SessionStorage {
  public db: LowdbSync<AdapterSync>;
  constructor(filePath: string) {
    const adapter = new FileSync(filePath);
    this.db = low(adapter);
  }
  public async getOrCreate(id: string): Promise<Session> {
    const sessions = this.db.get('sessions');
    if (!sessions.values()) {
      this.db.defaults({ sessions: [] }).write();
    }
    const sessionData = this.db.get('sessions').find({ id });
    if (!sessionData.values()) {
      sessions.push({ id, session: {} }).write();
    }

    const session = new LowDBSession(sessionData);
    return session;
  }
}
