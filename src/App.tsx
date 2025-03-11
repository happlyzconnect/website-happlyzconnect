
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import { useEffect } from "react";
import Index from "./pages/Index";
import References from "./pages/References";
import SolutionCategory from "./pages/SolutionCategory";
import SolutionDetail from "./pages/SolutionDetail";
import MentionsLegales from "./pages/MentionsLegales";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import Converter from "./pages/Converter";

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nos-references" element={<References />} />
          <Route path="/solutions/:category" element={<SolutionCategory />} />
          <Route path="/solutions/:category/:id" element={<SolutionDetail />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          <Route path="/convertisseur-taille-ecran" element={<Converter />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
