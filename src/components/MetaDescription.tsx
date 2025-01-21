import { Helmet } from "react-helmet";

interface MetaDescriptionProps {
  description: string;
}

export const MetaDescription = ({ description }: MetaDescriptionProps) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
    </Helmet>
  );
};