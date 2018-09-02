import { LowDBSessionStorage } from './lowdbSessionStorage';
import { sessionMiddleware } from 'yandex-dialogs-sdk';

export function middleware(path: string) {
  const storage = new LowDBSessionStorage(path);
  return sessionMiddleware(storage);
}
