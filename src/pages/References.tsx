import { ReferenceContainer } from "@/components/references/ReferenceContainer";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "@/components/navigation/Navigation";

const References = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "affichage-dynamique";

  return <ReferenceContainer initialTab={activeTab} />;
};

export default References;
