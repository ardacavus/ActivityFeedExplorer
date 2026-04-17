import type { User } from '../types';
import { users } from '../data/users';

const delay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 100));

export function getUsers(): Promise<User[]> {
  return delay(users);
}

export function getUserById(id: number): Promise<User | undefined> {
  return delay(users.find((u) => u.id === id));
}
