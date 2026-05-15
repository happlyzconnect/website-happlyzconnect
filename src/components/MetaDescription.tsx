
import { Helmet } from "react-helmet";

interface MetaDescriptionProps {
  title?: string;
  description: string;
  className?: string;
  canonicalUrl?: string;
}

export const MetaDescription = ({ title, description, className, canonicalUrl }: MetaDescriptionProps) => {
  const defaultUrl = window.location.href;
  const canonical = canonicalUrl || defaultUrl;
  
  return (
    <Helmet>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};
