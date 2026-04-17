export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
  createdAt: string;
}

export interface Like {
  id: number;
  postId: number;
  userId: number;
}
