import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "./pages/Dashboard";
import Files from "./pages/Files";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import Deck from "./pages/Deck";
import Discussion from "./pages/Discussion";
import Mail from "./pages/Mail";
import Notes from "./pages/Notes";
import Photos from "./pages/Photos";
import Activity from "./pages/Activity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="cloudhub-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/files" element={<Files />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/deck" element={<Deck />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/activity" element={<Activity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
