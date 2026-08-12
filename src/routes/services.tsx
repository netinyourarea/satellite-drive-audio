import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Services, Compatibility, HowItWorks } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        <section className="bg-surface/40 py-16 text-center border-b border-border">
          <div className="mx-auto max-w-4xl px-5">
            <p className="eyebrow">Our Services</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Satellite Radio &amp; In-Car Entertainment Services
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Explore our four specialized areas of vehicle audio guidance.
            </p>
          </div>
        </section>
        <Services />
        <Compatibility />
        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}
