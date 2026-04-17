import type { Like } from '../types';
import { likes } from '../data/likes';

const delay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 100));

export function getLikes(): Promise<Like[]> {
  return delay(likes);
}

export function getLikesByPost(postId: number): Promise<Like[]> {
  return delay(likes.filter((l) => l.postId === postId));
}

export function getLikeCount(postId: number): Promise<number> {
  return delay(likes.filter((l) => l.postId === postId).length);
}

export function isLikedByUser(postId: number, userId: number): Promise<boolean> {
  return delay(likes.some((l) => l.postId === postId && l.userId === userId));
}
