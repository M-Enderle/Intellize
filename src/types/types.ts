export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  iconName: string;
  slug: string;
  imageUrl: string;
  imageSrcSet?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  githubLink?: string;
  Content: React.ComponentType<any>;
  imageUrl: string;
  stats?: { label: string; value: string; }[];
}

export interface Project {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  githubLink?: string;
  content: string;
  imageUrl: string;
  stats?: { label: string; value: string; }[];
}

export interface TechItem {
  name: string;
  category: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Client {
  name: string;
  website: string;
}