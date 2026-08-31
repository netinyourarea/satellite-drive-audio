import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SITE_PHONE } from "@/lib/site-contact";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-32 pb-24">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 12, 2026</p>
        
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Welcome to Satellite Drive Audio (satellitedriveaudio.com). By using our website and assistance services, you agree to these Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-foreground">1. Independent Service Disclaimer</h2>
          <p>
            Satellite Drive Audio is an independent assistance and guidance platform. We are not an automobile manufacturer, satellite radio broadcast service, or affiliated with any specific brand unless explicitly stated.
          </p>

          <h2 className="text-xl font-bold text-foreground">2. Guidance Purpose Only</h2>
          <p>
            All compatibility findings and service explanations are provided for general informational guidance only. Vehicle equipment can vary by trim level and manufacture date.
          </p>

          <h2 className="text-xl font-bold text-foreground">3. Contact</h2>
          <p>
            Questions? Call {SITE_PHONE.display}.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
