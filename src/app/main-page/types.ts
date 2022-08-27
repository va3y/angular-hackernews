export interface Comment {
  id: number;
  level: 0;
  user: string;
  time: number;
  content: string;
  comments: Comment[];
}

export interface Story {
  id: number;
  title: string;
  url: string;
  comments_count: number;
  comments: Comment[];
}
