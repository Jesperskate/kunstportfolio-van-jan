
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import BronzeStatues from "./pages/BronzeStatues";
import OutdoorSculptures from "./pages/OutdoorSculptures";
import Paintings from "./pages/Paintings";
import AboutJan from "./pages/AboutJan";
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
          <Route path="/bronzen-beelden" element={<BronzeStatues />} />
          <Route path="/buitenbeelden" element={<OutdoorSculptures />} />
          <Route path="/schilderijen" element={<Paintings />} />
          <Route path="/over-jan" element={<AboutJan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
