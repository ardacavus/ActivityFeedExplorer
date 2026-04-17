import type { Post } from '../types';

export const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: 'Getting Started with React',
    body: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.',
    createdAt: '2025-04-10T08:00:00Z',
  },
  {
    id: 2,
    userId: 2,
    title: 'TypeScript Tips for Beginners',
    body: 'TypeScript adds static typing to JavaScript. Start by enabling strict mode in your tsconfig for the best experience.',
    createdAt: '2025-04-11T10:30:00Z',
  },
  {
    id: 3,
    userId: 3,
    title: 'Why Vite is So Fast',
    body: 'Vite leverages native ES modules in the browser during development, skipping the bundle step entirely and dramatically improving startup time.',
    createdAt: '2025-04-12T14:15:00Z',
  },
  {
    id: 4,
    userId: 1,
    title: 'React Router v6 Basics',
    body: 'React Router v6 introduces the Routes component and nested routing patterns that make complex navigation much easier to manage.',
    createdAt: '2025-04-13T09:45:00Z',
  },
  {
    id: 5,
    userId: 4,
    title: 'CSS Modules vs Tailwind',
    body: 'Both have their place. CSS Modules give scoped styles with full CSS power; Tailwind keeps your HTML expressive and avoids context switching.',
    createdAt: '2025-04-14T16:00:00Z',
  },
  {
    id: 6,
    userId: 5,
    title: 'State Management in 2025',
    body: 'For most apps, useState and useContext are enough. Reach for Zustand or Jotai when state crosses many component boundaries.',
    createdAt: '2025-04-15T11:20:00Z',
  },
];
