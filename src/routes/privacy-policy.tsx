import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SITE_PHONE } from "@/lib/site-contact";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-32 pb-24">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 12, 2026</p>
        
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At Satellite Drive Audio (satellitedriveaudio.com), we respect your privacy and are committed to protecting any personal information you share with us.
          </p>

          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>
            We collect vehicle details (year, make, model) submitted through our compatibility form, as well as contact information (name, phone, email) provided when requesting assistance.
          </p>

          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>
            Your information is used solely to evaluate vehicle compatibility, answer your inquiries, and provide personalized guidance regarding in-car satellite radio and entertainment options.
          </p>

          <h2 className="text-xl font-bold text-foreground">3. Information Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Contact Information</h2>
          <p>
            If you have questions regarding this privacy policy, please contact us at {SITE_PHONE.display}.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
