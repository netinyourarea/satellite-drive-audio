import { Phone, Radio } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE_PHONE } from "@/lib/site-contact";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about-us/" },
      { label: "Services",       href: "/services/" },
      { label: "FAQ",            href: "/contact/#faq" },
      { label: "Contact",        href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",     href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-of-service/" },
      { label: "Refund Policy",      href: "/refund-policy/" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="legal" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-[88rem] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Radio className="size-5 text-primary" />
              </span>
              <span className="font-display text-base font-extrabold">SATELLITE DRIVE AUDIO</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent assistance platform helping drivers understand satellite radio and
              connected entertainment options for their vehicles.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:${SITE_PHONE.raw}`} className="hover:text-primary transition-colors">
                  {SITE_PHONE.display}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:justify-self-end">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-[0.7rem] font-bold tracking-[0.18em] text-foreground uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-background/50 p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground/90">Disclosure:</span> Satellite Drive Audio is
            an independent assistance platform. We are not an automobile manufacturer, a satellite
            radio provider, or affiliated with any specific vehicle brand or entertainment service
            provider unless explicitly stated. All third-party names, logos, and trademarks are the
            property of their respective owners and are referenced for identification purposes only.
            Compatibility information is provided for general guidance and may vary by vehicle,
            trim, and equipment.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Satellite Drive Audio. All rights reserved.</p>
          <p>Independent in-car entertainment assistance</p>
        </div>
      </div>
    </footer>
  );
}
