import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/layout/Layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Training from "@/pages/training";
import TrainingDetail from "@/pages/training-detail";
import Resources from "@/pages/resources";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Cookie Consent
import CookieConsent from "@/components/CookieConsent";
import ArticleDetail from "./pages/resources/[slug]";
import PrivacyCareerGuide from "./pages/clarity-guide";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/training" component={Training} />
      <Route path="/training/:slug" component={TrainingDetail} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={ArticleDetail} />
      <Route path='/guide' component={PrivacyCareerGuide} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          
          {/* Main App Layout */}
          <Layout>
            <Router />
          </Layout>

          {/* Global UI layers (must stay OUTSIDE Layout & Router pages) */}
          <Toaster />
          <CookieConsent />

        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;