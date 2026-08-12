import { useEffect, useState } from "react";
import { Menu, X, Radio } from "lucide-react";
import { navLinks } from "./nav-links";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-3">
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
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.82rem] font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-[0.82rem] font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Get Started
          </a>
        </nav>

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

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/98 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-[88rem] flex-col px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base font-medium text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 mb-3 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-primary-foreground"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
