import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
    locale?: string;
    siteName?: string;
    twitterHandle?: string;
    noIndex?: boolean;
    themeColor?: string;
    structuredData?: object | object[];
}

const DEFAULT_SITE_NAME = "KairoWeb";
const DEFAULT_DESCRIPTION = "Soluciones digitales innovadoras: Desarrollo Web, E-commerce, Apps Móviles y Soporte Técnico. Transformamos tus ideas en realidad digital.";
const DEFAULT_KEYWORDS = "desarrollo web, ecommerce, apps moviles, soporte tecnico, kairo web, software colombia";
const DEFAULT_OG_IMAGE = "/assets/hero-banner.png";
const DEFAULT_LOCALE = "es_CO";
const DEFAULT_THEME_COLOR = "#0F172A";

const SEO = ({
    title = "KairoWeb | Desarrollo Web & Soluciones Digitales",
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    canonical,
    locale = DEFAULT_LOCALE,
    siteName = DEFAULT_SITE_NAME,
    twitterHandle,
    noIndex = false,
    themeColor = DEFAULT_THEME_COLOR,
    structuredData
}: SEOProps) => {
    const location = useLocation();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const canonicalUrl = canonical || `${origin}${location.pathname}${location.search}`;
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const resolvedOgImage = ogImage.startsWith("http") ? ogImage : `${origin}${ogImage}`;
    const robotsContent = noIndex ? "noindex,nofollow" : "index,follow";
    const hrefLang = locale.replace("_", "-");

    const baseStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: canonicalUrl,
        logo: resolvedOgImage
    };

    const jsonLdPayload = Array.isArray(structuredData)
        ? [baseStructuredData, ...structuredData]
        : structuredData
            ? [baseStructuredData, structuredData]
            : [baseStructuredData];

    return (
        <Helmet>
            <html lang={hrefLang} />

            {/* Estándar */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robotsContent} />
            <meta name="author" content={siteName} />
            <meta name="theme-color" content={themeColor} />
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            {hrefLang && <link rel="alternate" hrefLang={hrefLang} href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={resolvedOgImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content={locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={resolvedOgImage} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
            {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

            {/* Otros */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />

            <script type="application/ld+json">
                {JSON.stringify(jsonLdPayload)}
            </script>
        </Helmet>
    );
};

export default SEO;
