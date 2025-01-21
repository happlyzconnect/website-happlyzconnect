import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
}

export const MetaTags = ({ 
  title = "HAPPLYZ Connect - Intégrateur de solutions numériques",
  description = "HAPPLYZ CONNECT intègre des solutions numériques et audiovisuelles pour entreprises et collectivités : écrans interactifs, affichage dynamique et outils connectés."
}: MetaTagsProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HAPPLYZ Connect",
    "description": description,
    "url": "https://www.happlyzconnect.com",
    "logo": "https://www.happlyzconnect.com/lovable-uploads/31538189-590f-499b-80e7-052171630c35.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "01 85 39 01 67",
      "contactType": "customer service",
      "email": "contact@happlyz.com",
      "areaServed": "FR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href="https://www.happlyzconnect.com" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};