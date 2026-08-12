/**
 * Navigation links for SiteHeader.
 *
 * Rules:
 *  - `href` values that start with "/" are internal TanStack Router paths → use <Link to="...">
 *  - Hash-only values (e.g. "#faq") scroll within the current page
 *  - Sections living on a dedicated page AND on the homepage are mapped to their
 *    canonical dedicated page so the link always works regardless of current route.
 *
 * Section ID map (from sections.tsx):
 *  #home           → Hero            (homepage only)
 *  #about          → AboutSplit      (about-us page / homepage)
 *  #services       → Services        (services page / homepage)
 *  #compatibility  → Compatibility   (services page / homepage)
 *  #how-it-works   → HowItWorks      (services page / homepage)
 *  #satellite-radio→ Testimonials    (homepage)
 *  #faq            → Faq             (contact page / homepage)
 *  #contact        → FinalCta        (contact page / homepage)
 *  #support        → SupportSection  (homepage)
 */

export const navLinks: { label: string; href: string }[] = [
  { label: "Home",                 href: "/" },
  { label: "Services",             href: "/services/" },
  { label: "Vehicle Compatibility",href: "/services/#compatibility" },
  { label: "How It Works",         href: "/services/#how-it-works" },
  { label: "Satellite Radio",      href: "/#satellite-radio" },
  { label: "About Us",             href: "/about-us/" },
  { label: "FAQ",                  href: "/contact/#faq" },
  { label: "Contact",              href: "/contact/" },
];
