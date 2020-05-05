import FileSync from 'lowdb/adapters/FileSync';
import { ISessionStorage, ISession } from 'yandex-dialogs-sdk';
import low, { LowdbSync } from 'lowdb';
import { LowDBSession } from './lowdbSession';

interface Schema {
  sessions: [{
    id: string;
    session: any;
  }];
}

export class LowDBSessionStorage implements ISessionStorage {
  public db: LowdbSync<Schema>;
  constructor(filePath: string) {
    const adapter = new FileSync<Schema>(filePath);
    this.db = low(adapter);
  }
  public async getOrCreate(id: string): Promise<ISession> {
    const sessions = this.db.get('sessions');
    if (!sessions.value()) {
      this.db.defaults({ sessions: [] }).write();
    }
    const sessionData = this.db.get('sessions').find({ id });
    if (!sessionData.value()) {
      sessions.push({ id, session: {} }).write();
    }

    const session = new LowDBSession(sessionData);
    return session;
  }
}
