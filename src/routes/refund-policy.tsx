import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-32 pb-24">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 12, 2026</p>
        
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At Satellite Drive Audio, we strive to deliver transparent, helpful guidance regarding your vehicle's audio and satellite entertainment options.
          </p>

          <h2 className="text-xl font-bold text-foreground">1. Consultation Services</h2>
          <p>
            Our initial compatibility guidance and assistance conversations are provided without obligation. If you purchase any paid consulting or assistance service, refund terms will be clearly specified prior to purchase.
          </p>

          <h2 className="text-xl font-bold text-foreground">2. Customer Support</h2>
          <p>
            If you have any questions regarding a charge or service, please reach out to our team at support@satellitedriveaudio.com or call (888) 402-7719.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
