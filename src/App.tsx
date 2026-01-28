import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Examen from "./pages/Examen";
import Paiement from "./pages/Paiement";
import Confirmation from "./pages/Confirmation";
import FAQ from "./pages/FAQ";
import APropos from "./pages/APropos";
import Archive from "./pages/Archive";
import Confidentialite from "./pages/Confidentialite";
import CGV from "./pages/CGV";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/examen" element={<Examen />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
