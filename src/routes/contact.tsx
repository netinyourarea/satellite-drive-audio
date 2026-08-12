import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FinalCta, Faq } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        <section className="bg-surface/40 py-16 text-center border-b border-border">
          <div className="mx-auto max-w-4xl px-5">
            <p className="eyebrow">Contact Us</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Get in Touch with Satellite Drive Audio
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Have questions about your car audio options? We're here to help.
            </p>
          </div>
        </section>
        <FinalCta />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
