import { BlogPostMeta } from '../../types/types';

// Import raw content eagerly to parse frontmatter without bundling the whole component
const rawModules = import.meta.glob('./*/index.mdx', { eager: true, query: '?raw', import: 'default' });
const contentModules = import.meta.glob('./*/index.mdx');

function parseFrontmatter(raw: string): any {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const yamlBlock = match[1];
  const meta: any = {};
  
  yamlBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    
    if (!key) return;

    // Handle arrays like ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
      return;
    }

    // Handle strings
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    meta[key] = value;
  });
  
  return meta;
}

const metadataWithPath = Object.entries(rawModules).map(([path, raw]: [string, any]) => {
  const meta = parseFrontmatter(raw as string);
  return { ...meta, _path: path };
});

export const BLOG_METADATA: BlogPostMeta[] = metadataWithPath.map(({ _path, ...meta }) => meta as BlogPostMeta);

export const loadBlogPostContent = async (id: string) => {
  const item = metadataWithPath.find(m => m.id === id);
  if (!item) throw new Error(`Post not found: ${id}`);
  const module: any = await contentModules[item._path]();
  return module.default;
};
