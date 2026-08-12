import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import {
  Hero,
  AboutSplit,
  Services,
  Compatibility,
  HowItWorks,
  CinematicBanner,
  SupportSection,
  Technology,
  Testimonials,
  Faq,
  FinalCta,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSplit />
        <Services />
        <Compatibility />
        <HowItWorks />
        <CinematicBanner />
        <SupportSection />
        <Technology />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
