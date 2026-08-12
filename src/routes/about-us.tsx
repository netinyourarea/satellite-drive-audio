import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AboutSplit, Testimonials, SupportSection } from "@/components/site/sections";

export const Route = createFileRoute("/about-us")({
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        <section className="bg-surface/40 py-16 text-center border-b border-border">
          <div className="mx-auto max-w-4xl px-5">
            <p className="eyebrow">About Satellite Drive Audio</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Vehicle-First Entertainment Guidance
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Independent support and plain-language answers for in-car satellite radio and audio systems.
            </p>
          </div>
        </section>
        <AboutSplit />
        <SupportSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
