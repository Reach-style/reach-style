import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "@/pages/About/About";
import Benefits from "@/pages/Benefits/Benefits";
import Presentations from "@/pages/Presentations/Presentations";
import Articles from "@/pages/Articles/Articles";
import Rmmimages from "@/pages/Rmmimages/Rmmimages";
import CaseStudies from "@/pages/CaseStudies/CaseStudies";
import SalesPartners from  "@/pages/SalesPartners/SalesPartners";
import TrainingPartners from "@/pages/TrainingPartners/TrainingPartners"
import GovernmentAgencies from "@/pages/GovernmentAgencies/GovernmentAgencies"
import NonProfitOrganisations from "@/pages/NonProfitOrganisations/NonProfitOrganisations";
import SupportPartners from "@/pages/SupportPartners/SupportPartners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/presentations" element={<Presentations />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/casestudies" element={<CaseStudies />} />
                <Route path="/rmmimages" element={<Rmmimages />} />
                <Route path="/SalesPartners" element={<SalesPartners />} />
                <Route path="/TrainingPartners" element={<TrainingPartners />} />
                <Route path="/GovernmentAgencies" element={<GovernmentAgencies />} />
                <Route path="/NonProfitOrganisations" element={<NonProfitOrganisations />} />
                <Route path="/SupportPartners" element={<SupportPartners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
