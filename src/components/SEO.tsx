import React from 'react';
import { Helmet } from 'react-helmet';

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
  author = "Intellize"
}) => {
  const siteUrl = import.meta.env.VITE_WEBSITE_URL || "https://www.intellize.de";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={(ogTitle || title).substring(0, 70)} />
      <meta name="twitter:description" content={(ogDescription || description).substring(0, 200)} />
      <meta name="twitter:image" content={ogImage} />

      {/* Security headers */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-Frame-Options" content="DENY" />
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
      <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default SEO;