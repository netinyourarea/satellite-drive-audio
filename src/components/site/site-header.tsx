import { useEffect, useState } from "react";
import { Menu, X, Radio } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { navLinks } from "./nav-links";

/**
 * After a route change that includes a hash, scroll the target element into view.
 * TanStack Router doesn't scroll to hash by default, so we handle it here.
 */
function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // e.g. "#faq" or ""
    if (!hash) return;

    // Give the page time to render before scrolling
    const id = hash.replace("#", "");
    const attempt = (retries: number) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (retries > 0) {
        setTimeout(() => attempt(retries - 1), 120);
      }
    };
    setTimeout(() => attempt(8), 100);
  }, [location.hash, location.pathname]);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useHashScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Close mobile drawer and, if hash present, scroll to it */
  const handleNavClick = (href: string) => {
    setOpen(false);

    // If clicking the same page's hash link, scroll immediately
    const [path, hash] = href.split("#");
    const currentPath = location.pathname.replace(/\/$/, "") || "/";
    const targetPath  = (path || "/").replace(/\/$/, "") || "/";

    if (hash && currentPath === targetPath) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkClass = (active = false) =>
    `text-[0.82rem] font-medium transition-colors ${
      active
        ? scrolled
          ? "text-primary font-semibold"
          : "text-amber-300 font-semibold"
        : scrolled
        ? "text-muted-foreground hover:text-foreground"
        : "text-white/80 hover:text-white"
    }`;

  /** Determine if a nav link should be "active" */
  const isActive = (href: string) => {
    const [path] = href.split("#");
    if (!path || path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.replace(/\/$/, ""));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        {/* Logo / brand */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-xl ring-1 transition-colors ${
              scrolled
                ? "bg-primary/15 ring-primary/30 text-primary"
                : "bg-amber-500/20 ring-amber-400/40 text-amber-400"
            }`}
          >
            <Radio className="size-5" />
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-[0.95rem] font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              SATELLITE DRIVE AUDIO
            </span>
            <span
              className={`block truncate text-[0.65rem] tracking-[0.18em] uppercase transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              In-Car Entertainment Assistance
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => handleNavClick(l.href)}
              className={linkClass(isActive(l.href))}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact/"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary px-5 py-2.5 text-[0.82rem] font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`grid size-11 shrink-0 place-items-center rounded-xl border transition-colors xl:hidden ${
            scrolled
              ? "border-border bg-surface text-foreground"
              : "border-white/20 bg-white/10 text-white backdrop-blur-md"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="animate-fade-in border-t border-border bg-background/98 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-[88rem] flex-col px-5 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`border-b border-border/60 py-3.5 text-base font-medium ${
                  isActive(l.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact/"
              onClick={() => setOpen(false)}
              className="mt-5 mb-3 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-primary-foreground"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
