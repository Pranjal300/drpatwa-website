import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: object;
}

const SEOHead = ({ title, description, canonical, ogTitle, ogDescription, schema }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Dr. Patwa Skin Care & Hair Clinic" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEOHead;
