
import { ReferenceContainer } from "@/components/references/ReferenceContainer";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { MetaDescription } from "@/components/MetaDescription";

const References = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "affichage-dynamique";
  
  useEffect(() => {
    // Ensure the URL always reflects the active tab
    if (!searchParams.get("tab")) {
      setSearchParams({ tab: "affichage-dynamique" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <>
      <MetaDescription description="Découvrez nos références et projets audiovisuels réalisés pour nos clients : affichage dynamique, salles de réunion et salles de classe." />
      <ReferenceContainer initialTab={activeTab} />
    </>
  );
};

export default References;
