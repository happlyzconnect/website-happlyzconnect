
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
    <div className={className}>
      <Helmet>
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      {title && <h1 className="text-2xl font-bold text-[#56C7E1] mb-4">{title}</h1>}
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};
