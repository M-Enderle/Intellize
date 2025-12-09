import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaData {
  [key: string]: any;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  keywords?: string;
  author?: string;
  schema?: SchemaData;
  pageSchema?: SchemaData;
}

const SEO: React.FC<SEOProps> = ({
  title = "Intellize - Automatisierung & Data Science",
  description = "Intellize: Automatisierung mit Python & N8N, Server Management und AI Implementierung für kleine Unternehmen und Privatpersonen.",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = `${import.meta.env.VITE_WEBSITE_URL || 'https://www.intellize.de'}/images/og-image.svg`,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite = "@intellize_de",
  keywords,
  author = "Intellize",
  pageSchema,
}) => {
  const siteUrl = import.meta.env.VITE_WEBSITE_URL || "https://www.intellize.de";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  // Use jpg for og:image if no custom image provided
  const finalOgImage = ogImage === `${siteUrl}/images/og-image.svg` 
    ? `${siteUrl}/images/moritz.jpg`
    : ogImage;

  // Base Organization Schema
  const baseOrganization = {
    "@type": "Organization",
    "name": "Intellize",
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/logo.png`,
      "width": 512,
      "height": 512
    },
    "founder": {
      "@type": "Person",
      "name": "Moritz Enderle",
      "image": `${siteUrl}/images/moritz.jpg`,
      "jobTitle": "Founder & CEO"
    },
    "sameAs": [
      "https://www.linkedin.com/in/moritz-enderle",
      "https://github.com/M-Enderle",
      "https://twitter.com/intellize_de"
    ]
  };

  // Default Page Schema
  const defaultPageSchema: SchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullCanonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Intellize",
      "url": siteUrl,
      "publisher": baseOrganization
    }
  };

  // Use provided page schema or default
  const finalPageSchema = pageSchema ? {
    "@context": "https://schema.org",
    ...pageSchema,
    "url": pageSchema.url || fullCanonical,
    "isPartOf": pageSchema.isPartOf || {
      "@type": "WebSite",
      "name": "Intellize",
      "url": siteUrl,
      "publisher": baseOrganization
    }
  } : defaultPageSchema;

  const schemas: SchemaData[] = [finalPageSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Intellize" />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={(ogTitle || title).substring(0, 70)} />
      <meta name="twitter:description" content={(ogDescription || description).substring(0, 200)} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* JSON-LD Structured Data for Rich Results */}
      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}

      {/* Security headers */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
      <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default SEO;