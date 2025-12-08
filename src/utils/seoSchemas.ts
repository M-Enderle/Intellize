/**
 * SEO Rich Results Schema Generators
 * Helper functions to generate JSON-LD structured data for various page types
 */

const SITE_URL = import.meta.env.VITE_WEBSITE_URL || "https://www.intellize.de";

export interface PersonProfile {
  name: string;
  image: string;
  jobTitle: string;
  email?: string;
  phone?: string;
  sameAs?: string[];
}

export interface OrganizationInfo {
  name: string;
  description: string;
  logo?: string;
  founder?: PersonProfile;
  contactEmail?: string;
}

/**
 * Generate Person schema with rich results including image
 * Used for founder/team member profiles
 */
export const generatePersonSchema = (person: PersonProfile) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "image": person.image.startsWith("http") ? person.image : `${SITE_URL}${person.image}`,
  "jobTitle": person.jobTitle,
  ...(person.email && { "email": person.email }),
  ...(person.phone && { "telephone": person.phone }),
  ...(person.sameAs && person.sameAs.length > 0 && { "sameAs": person.sameAs }),
  "url": SITE_URL
});

/**
 * Generate Organization schema with founder information
 */
export const generateOrganizationSchema = (org: OrganizationInfo) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": org.name,
  "description": org.description,
  "url": SITE_URL,
  ...(org.logo && { "logo": org.logo.startsWith("http") ? org.logo : `${SITE_URL}${org.logo}` }),
  ...(org.founder && {
    "founder": {
      "@type": "Person",
      "name": org.founder.name,
      "image": org.founder.image.startsWith("http") ? org.founder.image : `${SITE_URL}${org.founder.image}`,
      "jobTitle": org.founder.jobTitle
    }
  }),
  ...(org.contactEmail && {
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": org.contactEmail
    }
  }),
  "sameAs": [
    "https://www.linkedin.com/in/moritz-enderle",
    "https://github.com/M-Enderle",
    "https://twitter.com/intellize_de"
  ]
});

/**
 * Generate Article/BlogPost schema
 */
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  "image": article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
  "url": article.url.startsWith("http") ? article.url : `${SITE_URL}${article.url}`,
  ...(article.datePublished && { "datePublished": article.datePublished }),
  ...(article.dateModified && { "dateModified": article.dateModified }),
  "author": {
    "@type": "Person",
    "name": article.author || "Intellize Team",
    "image": `${SITE_URL}/images/moritz.jpg`
  },
  "publisher": {
    "@type": "Organization",
    "name": "Intellize",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/logo.svg`
    }
  }
});

/**
 * Generate Product/Service schema
 */
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  image?: string;
  url: string;
  provider?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  ...(service.image && { 
    "image": service.image.startsWith("http") ? service.image : `${SITE_URL}${service.image}`
  }),
  "url": service.url.startsWith("http") ? service.url : `${SITE_URL}${service.url}`,
  "provider": {
    "@type": "Organization",
    "name": service.provider || "Intellize"
  }
});

/**
 * Generate BreadcrumbList schema for navigation
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  path: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`
  }))
});

/**
 * Generate LocalBusiness schema for location-based services
 */
export const generateLocalBusinessSchema = (business: {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": business.name,
  "description": business.description,
  "image": business.image.startsWith("http") ? business.image : `${SITE_URL}${business.image}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.address.streetAddress,
    "addressLocality": business.address.addressLocality,
    "postalCode": business.address.postalCode,
    "addressCountry": business.address.addressCountry
  },
  "telephone": business.phone,
  "email": business.email,
  "url": SITE_URL
});

/**
 * Generate FAQPage schema
 */
export const generateFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
