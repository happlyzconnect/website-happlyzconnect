
import { Helmet } from "react-helmet";

interface MetaDescriptionProps {
  description: string;
  title?: string;
  image?: string;
}

export const MetaDescription = ({ description, title, image }: MetaDescriptionProps) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
