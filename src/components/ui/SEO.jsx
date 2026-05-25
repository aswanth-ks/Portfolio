import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { DEFAULT_SEO, SITE_URL, TITLE_SUFFIX } from "../../utils/seo";

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
  
  // Normalize path: ensure no trailing slash except for root
  const normalizedPath = location.pathname === "/" 
    ? "/" 
    : location.pathname.replace(/\/+$/, "");
  const currentUrl = `${SITE_URL}${normalizedPath}`;

  // Build page title with suffix pattern
  const seoTitle = title 
    ? `${title}${TITLE_SUFFIX}` 
    : DEFAULT_SEO.title;
  const seoDescription = description || DEFAULT_SEO.description;
  const seoKeywords = keywords || DEFAULT_SEO.keywords;
  const seoImage = image || DEFAULT_SEO.image;

  // Robots meta — enhanced for articles
  const robotsContent = article
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "index, follow";

  // ── JSON-LD Schemas ──────────────────────────

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aswanth Karuppannan Portfolio",
    "url": SITE_URL,
    "description": DEFAULT_SEO.description,
    "author": {
      "@type": "Person",
      "name": "Aswanth Karuppannan"
    }
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
    "knowsAbout": [
      "Java", "Spring Boot", "React", "IoT", "AI", "Backend Development", "REST APIs", "MySQL", "MongoDB"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "MoviCloud Labs Pvt Ltd"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science Engineering"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title || seoTitle,
    "author": {
      "@type": "Person",
      "name": author,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Person",
      "name": "Aswanth Karuppannan",
      "url": SITE_URL
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": publishedTime || new Date().toISOString(),
    "description": seoDescription,
    "image": seoImage,
    "url": currentUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  // ── Breadcrumb Schema ──────────────────────────

  const buildBreadcrumbs = () => {
    const segments = normalizedPath.split("/").filter(Boolean);
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      }
    ];

    let accumulated = "";
    segments.forEach((seg, i) => {
      accumulated += `/${seg}`;
      items.push({
        "@type": "ListItem",
        "position": i + 2,
        "name": seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
        "item": `${SITE_URL}${accumulated}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
  };

  // Select active schema
  let activeSchema = personSchema;
  if (schema === "website") activeSchema = websiteSchema;
  if (schema === "article" || article) activeSchema = articleSchema;

  // Only add breadcrumbs for non-home pages
  const breadcrumbSchema = normalizedPath !== "/" ? buildBreadcrumbs() : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Aswanth Karuppannan Portfolio" />
      <meta property="og:locale" content={DEFAULT_SEO.locale} />
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />

      {/* Structured Data — Primary Schema */}
      <script type="application/ld+json">
        {JSON.stringify(activeSchema)}
      </script>

      {/* Structured Data — Breadcrumbs (non-home pages) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
