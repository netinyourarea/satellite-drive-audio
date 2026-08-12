import { Phone, Mail, Clock, MapPin, Radio } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Why Satellite Drive", href: "/#support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Satellite Radio Assistance", href: "/services" },
      { label: "Vehicle Compatibility Guidance", href: "/#compatibility" },
      { label: "Account & Activation Guidance", href: "/services" },
      { label: "In-Car Entertainment Support", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Satellite Radio Basics", href: "/#satellite-radio" },
      { label: "Technology Guide", href: "/#technology" },
      { label: "Compatibility Check", href: "/#compatibility" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/#faq" },
      { label: "Request Guidance", href: "/contact" },
      { label: "Service Hours", href: "/contact" },
      { label: "Feedback", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="legal" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-[88rem] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Radio className="size-5 text-primary" />
              </span>
              <span className="font-display text-base font-extrabold">SATELLITE DRIVE AUDIO</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent assistance platform helping drivers understand satellite radio and
              connected entertainment options for their vehicles.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>(888) 402-7719</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>support@satellitedriveaudio.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>2140 Meridian Way, Suite 300, Columbus, OH 43215</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Mon–Fri 8:00 AM – 8:00 PM ET · Sat 9:00 AM – 5:00 PM ET</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-[0.7rem] font-bold tracking-[0.18em] text-foreground uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </a>
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
