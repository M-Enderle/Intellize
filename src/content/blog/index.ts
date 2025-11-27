import { BlogPost } from '../../types/types';

const modules = import.meta.glob('./*/index.mdx', { eager: true });

export const BLOG_POSTS: BlogPost[] = Object.values(modules).map((module: any) => ({
  id: module.id,
  title: module.title,
  excerpt: module.excerpt,
  date: module.date,
  tags: module.tags,
  imageUrl: module.imageUrl,
  Content: module.default,
}));
