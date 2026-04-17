import type { Comment } from '../types';

export const comments: Comment[] = [
  { id: 1,  postId: 1, userId: 2, body: 'Great introduction! Really helped me get started.', createdAt: '2025-04-10T09:00:00Z' },
  { id: 2,  postId: 1, userId: 3, body: 'Bookmarked this, very clear explanation.',          createdAt: '2025-04-10T11:30:00Z' },
  { id: 3,  postId: 2, userId: 1, body: 'Strict mode is a game changer indeed.',             createdAt: '2025-04-11T12:00:00Z' },
  { id: 4,  postId: 2, userId: 4, body: 'I wish I had read this when I started with TS.',    createdAt: '2025-04-11T14:45:00Z' },
  { id: 5,  postId: 3, userId: 5, body: 'Vite changed my whole dev workflow.',               createdAt: '2025-04-12T15:00:00Z' },
  { id: 6,  postId: 3, userId: 2, body: 'The HMR speed is just unbelievable.',               createdAt: '2025-04-12T17:20:00Z' },
  { id: 7,  postId: 4, userId: 3, body: 'Nested routes finally make sense to me!',           createdAt: '2025-04-13T10:10:00Z' },
  { id: 8,  postId: 5, userId: 1, body: 'I prefer Tailwind for new projects these days.',   createdAt: '2025-04-14T17:30:00Z' },
  { id: 9,  postId: 6, userId: 2, body: 'Zustand is so lightweight, love it.',              createdAt: '2025-04-15T13:00:00Z' },
  { id: 10, postId: 6, userId: 4, body: 'Context API is underrated for smaller apps.',      createdAt: '2025-04-15T14:50:00Z' },
];
