import type { Post } from '../types';
import { posts } from '../data/posts';

const delay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 100));

export function getPosts(): Promise<Post[]> {
  return delay([...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ));
}

export function getPostById(id: number): Promise<Post | undefined> {
  return delay(posts.find((p) => p.id === id));
}

export function getPostsByUser(userId: number): Promise<Post[]> {
  return delay(posts.filter((p) => p.userId === userId));
}
