import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { DEFAULT_SEO, SITE_URL } from "../../utils/seo";

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  type = "website",
  article = false,
  publishedTime,
  author = DEFAULT_SEO.author,
  schema = "person" // "person" | "website" | "article"
}) {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;

  const seoTitle = title || DEFAULT_SEO.title;
  const seoDescription = description || DEFAULT_SEO.description;
  const seoKeywords = keywords || DEFAULT_SEO.keywords;
  const seoImage = image || DEFAULT_SEO.image;

  // JSON-LD Schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aswanth Karuppannan Portfolio",
    "url": SITE_URL,
    "description": DEFAULT_SEO.description
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aswanth Karuppannan",
    "jobTitle": "Backend Developer",
    "url": SITE_URL,
    "image": seoImage,
    "sameAs": [
      "https://github.com/aswanth-ks",
      "https://www.linkedin.com/in/aswanth-karuppannan/",
      "https://www.instagram.com/_vision69_"
    ],
    "skills": [
      "Java", "Spring Boot", "React", "IoT", "AI", "Backend Development", "REST APIs", "MySQL", "MongoDB"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "MoviCloud Labs Pvt Ltd"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": seoTitle,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "description": seoDescription,
    "image": seoImage,
    "url": currentUrl
  };

  let activeSchema = personSchema;
  if (schema === "website") activeSchema = websiteSchema;
  if (schema === "article" || article) activeSchema = articleSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Aswanth Karuppannan Portfolio" />
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(activeSchema)}
      </script>
    </Helmet>
  );
}
