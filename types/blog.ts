export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  author?: string;
  readingTime?: number;
}

export interface BlogMetadata {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author?: string;
}
