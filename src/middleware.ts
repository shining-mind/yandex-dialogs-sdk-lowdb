import { LowDBSessionStorage } from './lowdbSessionStorage';
import { sessionMiddleware } from 'yandex-dialogs-sdk';

export function createStorage(path: string): LowDBSessionStorage {
  const storage = new LowDBSessionStorage(path);
  return storage;
}

export function createMiddleware(storage: LowDBSessionStorage) {
  return sessionMiddleware(storage);
}
