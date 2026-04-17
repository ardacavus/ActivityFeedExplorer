import type { Comment } from '../types';
import { comments } from '../data/comments';

const delay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 100));

export function getComments(): Promise<Comment[]> {
  return delay(comments);
}

export function getCommentsByPost(postId: number): Promise<Comment[]> {
  return delay(comments.filter((c) => c.postId === postId));
}
