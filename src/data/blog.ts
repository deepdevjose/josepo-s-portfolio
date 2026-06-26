import { blogArticles } from "./blogArticles";
import type { Locale } from "./site";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

const posts: BlogPost[] = blogArticles.map((article, index) => ({
  slug: article.slug,
  title: article.title,
  category: article.category,
  date: article.date,
  readTime: article.reading_time,
  description: article.description,
  coverImage: article.cover_image,
  tags: article.tags,
  featured: index === 0
}));

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: posts,
  es: posts,
  "zh-cn": posts
};
