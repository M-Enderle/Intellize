import { BlogPostMeta } from '../../types/types';

// We'll extract frontmatter by reading the raw module source
const contentModules = import.meta.glob('./*/index.mdx', { eager: true });

interface BlogModule {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
  stats?: { label: string; value: string; }[];
  default: React.ComponentType<any>;
}

export const BLOG_METADATA: BlogPostMeta[] = Object.values(contentModules).map((module: any) => {
  const m = module as BlogModule;
  return {
    id: m.id,
    title: m.title,
    excerpt: m.excerpt,
    date: m.date,
    tags: m.tags,
    imageUrl: m.imageUrl,
    githubLink: m.githubLink,
    stats: m.stats,
  };
});

export const loadBlogPostContent = async (id: string) => {
  const module = Object.values(contentModules).find((m: any) => m.id === id);
  if (!module) throw new Error(`Post not found: ${id}`);
  return (module as any).default;
};
