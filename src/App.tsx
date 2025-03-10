
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import References from "./pages/References";
import MentionsLegales from "./pages/MentionsLegales";
import ConditionsGenerales from "./pages/ConditionsGenerales";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nos-references" element={<References />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
