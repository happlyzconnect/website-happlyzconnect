
import { Helmet } from "react-helmet";

interface MetaDescriptionProps {
  title?: string;
  description: string;
  className?: string;
}

export const MetaDescription = ({ title, description, className }: MetaDescriptionProps) => {
  return (
    <div className={className}>
      <Helmet>
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
      </Helmet>
      {title && <h1 className="text-2xl font-bold text-[#56C7E1] mb-4">{title}</h1>}
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};
