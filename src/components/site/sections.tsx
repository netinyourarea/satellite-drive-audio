import { useState } from "react";
import {
  ArrowRight,
  Compass,
  Car,
  KeyRound,
  Headphones,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  LifeBuoy,
  Quote,
  Search,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

import heroInterior from "@/assets/hero-interior.jpg";
import driverInfotainment from "@/assets/driver-infotainment.jpg";
import svcRadio from "@/assets/svc-radio.jpg";
import svcWheel from "@/assets/svc-wheel.jpg";
import svcConsole from "@/assets/svc-console.jpg";
import svcAudio from "@/assets/svc-audio.jpg";
import compatDash from "@/assets/compat-dash.jpg";
import bannerRoad from "@/assets/banner-road.jpg";
import supportPerson from "@/assets/support-person.jpg";
import techCockpit from "@/assets/tech-cockpit.jpg";
import ctaDash from "@/assets/cta-dash.jpg";

/* ---------------------------------- Hero --------------------------------- */

const stats = [
  { value: "50K+", label: "Drivers Helped" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "Mon–Sat", label: "Live Support" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}
    >
      {/* ── Full-bleed background image — NO white overlay ── */}
      <img
        src={heroInterior}
        alt="Modern vehicle interior with dashboard and infotainment display"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        style={{ objectPosition: "65% center" }}
      />

      {/* Left-side subtle gradient scrim for contrast */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, oklch(0.06 0.008 60 / 0.94) 0%, oklch(0.06 0.008 60 / 0.78) 42%, oklch(0.06 0.008 60 / 0.1) 68%, transparent 80%)",
        }}
      />
      {/* Top vignette for navbar */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-36"
        style={{
          background: "linear-gradient(to bottom, oklch(0.06 0.008 60 / 0.7), transparent)",
        }}
      />
      {/* Bottom vignette for smooth transition */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-28"
        style={{
          background: "linear-gradient(to top, var(--color-background), transparent)",
        }}
      />

      {/* ── Main Content Container ── */}
      <div
        className="mx-auto flex w-full max-w-[88rem] flex-1 items-center px-5 lg:px-10"
        style={{ paddingTop: "7.5rem", paddingBottom: "4.5rem" }}
      >
        {/* Left Side Content - Glassmorphic Card Layout */}
        <div
          className="hero-fade-up-1 relative w-full max-w-[580px] overflow-hidden rounded-[2.25rem] p-7 sm:p-9 lg:p-10"
          style={{
            background: "oklch(0.12 0.01 60 / 55%)",
            border: "1px solid oklch(1 0 0 / 14%)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 30px 70px -15px oklch(0 0 0 / 0.6), inset 0 1px 0 oklch(1 0 0 / 0.2)",
          }}
        >
          {/* Subtle accent corner glow */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 size-48 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, oklch(0.72 0.18 55) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Eyebrow Pill */}
          <div className="hero-fade-up-1 flex items-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase"
              style={{
                background: "oklch(0.72 0.18 55 / 22%)",
                border: "1px solid oklch(0.72 0.18 55 / 45%)",
                color: "oklch(0.9 0.12 70)",
              }}
            >
              <span
                className="size-2 rounded-full animate-pulse"
                style={{ background: "oklch(0.85 0.15 65)", boxShadow: "0 0 8px oklch(0.85 0.15 65)" }}
              />
              Satellite Radio &amp; Connected Drive
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="hero-fade-up-2 mt-5 font-extrabold leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", color: "#ffffff" }}
          >
            Bring More{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.92 0.12 75), oklch(0.72 0.19 55))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Entertainment
            </span>
            <br />
            to Every Drive
          </h1>

          {/* Body Paragraph */}
          <p
            className="hero-fade-up-3 mt-4 text-base leading-relaxed"
            style={{ color: "oklch(0.9 0.005 80 / 0.88)" }}
          >
            Satellite Drive Audio helps drivers explore satellite radio and connected
            entertainment options, understand what their vehicle supports, and get started — without the guesswork.
          </p>

          {/* Key Benefit Highlights */}
          <div className="hero-fade-up-3 mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              "Vehicle-Specific Guidance",
              "Plain Language Explanation",
              "Independent Support",
              "No-Obligation Consultation",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full"
                  style={{ background: "oklch(0.72 0.18 55 / 30%)", border: "1px solid oklch(0.72 0.18 55 / 50%)" }}
                >
                  <ShieldCheck className="size-3 text-amber-400" />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-fade-up-4 mt-8 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="tel:+18663814782"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.19 58), oklch(0.58 0.22 42))",
                color: "#ffffff",
                boxShadow: "0 4px 24px oklch(0.65 0.19 55 / 45%)",
              }}
            >
              Call (866) 381-4782
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+18663814782"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "oklch(1 0 0 / 12%)",
                border: "1px solid oklch(1 0 0 / 25%)",
                color: "#ffffff",
              }}
            >
              <Search className="size-4 text-amber-400" />
              Check Compatibility
            </a>
          </div>

          {/* Divider */}
          <div className="my-7 h-px w-full" style={{ background: "oklch(1 0 0 / 12%)" }} />

          {/* Bottom Stats Row inside Card */}
          <div className="hero-fade-up-5 grid grid-cols-3 gap-2 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="font-display text-lg font-extrabold sm:text-xl"
                  style={{ color: "oklch(0.9 0.12 70)" }}
                >
                  {s.value}
                </span>
                <span className="mt-0.5 text-[0.65rem] font-semibold text-white/60 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------------- About -------------------------------- */


export function AboutSplit() {
  return (
    <section id="about" className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Make Every Drive More Enjoyable
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Cars have changed. What used to be a simple AM/FM dial is now a connected system
                with satellite channels, streaming, navigation audio and steering-wheel controls —
                and most drivers never learn what their vehicle can actually do.
              </p>
              <p>
                We sit on the customer's side of that conversation. We explain how satellite radio
                and connected entertainment generally work, help you understand which options may be
                relevant for your specific year, make and model, and walk you through the steps in
                plain language.
              </p>
              <p>
                No pressure, no jargon, no assumptions about what you already know — just clear
                guidance from people who spend their days inside vehicle entertainment systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {[
                ["Vehicle-first", "Guidance shaped by your car"],
                ["Plain language", "Explained without jargon"],
                ["Independent", "Not tied to one provider"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-display text-sm font-bold text-primary">{t}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative">
            <div className="zoom-media rounded-[2rem] border border-border">
              <img
                src={driverInfotainment}
                alt="Driver inside a modern vehicle interacting with the infotainment touchscreen"
                loading="lazy"
                width={1200}
                height={1408}
                className="aspect-4/5 w-full object-cover lg:aspect-4/5"
              />
            </div>
            <div className="panel absolute -bottom-6 left-4 max-w-[16rem] p-5 sm:left-8">
              <p className="font-display text-sm font-bold">Built around your vehicle</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Every conversation starts with what you drive, not with a product list.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Services -------------------------------- */

const services = [
  {
    n: "01",
    title: "Satellite Radio Assistance",
    body: "Understand how satellite radio works, what it typically includes, and whether it fits the way you drive and listen.",
    img: svcRadio,
    alt: "Car infotainment screen showing a radio interface at night",
  },
  {
    n: "02",
    title: "Vehicle Compatibility Guidance",
    body: "Share your year, make and model and we help you interpret which entertainment options may be relevant to your vehicle.",
    img: svcWheel,
    alt: "Close-up of steering wheel audio control buttons in a modern car",
  },
  {
    n: "03",
    title: "Account & Activation Guidance",
    body: "We walk you through what the general activation process looks like and what information is usually required.",
    img: svcConsole,
    alt: "Center console rotary controller and digital display in a premium car",
  },
  {
    n: "04",
    title: "In-Car Entertainment Support",
    body: "Questions about audio settings, connected features or controls? We help you make sense of your system.",
    img: svcAudio,
    alt: "Premium car door speaker grille with ambient lighting",
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
              What We Can Help You With
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Four focused areas of assistance, each designed to remove a specific point of
              confusion from the in-car entertainment experience.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 space-y-5">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <article
                className={`zoom-media panel group grid overflow-hidden lg:grid-cols-[1fr_1.15fr] ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[220px] overflow-hidden lg:min-h-[300px]">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    width={1000}
                    height={750}
                    className="absolute inset-0 size-full object-cover"
                  />
                  {/* Clean image - no white overlay */}
                </div>
                <div className="flex flex-col justify-center gap-4 p-7 sm:p-10 lg:p-14">
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                    {s.n}
                  </span>
                  <h3 className="text-xl font-bold sm:text-2xl">{s.title}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                  <a
                    href="tel:+18663814782"
                    className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Call (866) 381-4782 <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ Compatibility ----------------------------- */

const years = Array.from({ length: 30 }, (_, i) => `${2026 - i}`);
const makes = [
  "Acura",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Hyundai",
  "Jeep",
  "Kia",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Ram",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export function Compatibility() {
  const [form, setForm] = useState({ year: "", make: "", model: "" });
  const [result, setResult] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.year || !form.make || !form.model.trim()) {
      setResult("Please add your vehicle year, make and model so we can review it properly.");
      return;
    }
    setResult(
      `Thanks — we've noted your ${form.year} ${form.make} ${form.model.trim()}. A specialist will review the entertainment options that may be relevant to this vehicle and follow up with clear guidance.`,
    );
  };

  const field =
    "w-full rounded-xl border border-input bg-background/70 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary/70 focus:ring-2 focus:ring-primary/25";

  return (
    <section id="compatibility" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={compatDash}
          alt="Modern vehicle dashboard with digital instrument cluster at night"
          loading="lazy"
          width={1408}
          height={1008}
          className="size-full object-cover"
        />
        {/* Clean background image with subtle dark vignette for form readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Compatibility</p>
              <h2 className="mt-5 text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
                Not Sure What Your Vehicle Supports?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">
                Entertainment features vary widely by year, model and trim — two identical-looking
                vehicles can be equipped very differently. Share a few basic details and we'll help
                you understand which options may be relevant to yours.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="mt-8 space-y-3">
                {[
                  "Takes under a minute — no account required",
                  "Guidance based on year, make and model",
                  "A specialist reviews and explains the result",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form onSubmit={submit} className="panel p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/15">
                  <Search className="size-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold">Vehicle Compatibility Check</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Step 1 of 1 · Basic vehicle details
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Vehicle Year
                    </span>
                    <select
                      className={field}
                      value={form.year}
                      onChange={(e) => setForm({ ...form, year: e.target.value })}
                    >
                      <option value="">Select year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Vehicle Make
                    </span>
                    <select
                      className={field}
                      value={form.make}
                      onChange={(e) => setForm({ ...form, make: e.target.value })}
                    >
                      <option value="">Select make</option>
                      {makes.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Vehicle Model
                  </span>
                  <input
                    className={field}
                    placeholder="e.g. Grand Cherokee Limited"
                    value={form.model}
                    onChange={(e) => setForm({ ...form, model: e.target.value })}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.01]"
              >
                Check Compatibility
              </button>

              {result && (
                <p className="animate-fade-in mt-5 rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm leading-relaxed text-foreground/90">
                  {result}
                </p>
              )}

              <p className="mt-4 text-[0.7rem] leading-relaxed text-muted-foreground">
                Results are general guidance only and may vary by trim and installed equipment.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- How it works ----------------------------- */

const steps = [
  {
    n: "01",
    title: "Tell us about your vehicle",
    body: "Year, make and model — that's the starting point for everything we look at.",
  },
  {
    n: "02",
    title: "Explore available options",
    body: "We outline the entertainment paths that may apply, in plain, comparable terms.",
  },
  {
    n: "03",
    title: "Get personalized guidance",
    body: "A specialist explains the steps, the requirements and what to expect along the way.",
  },
  {
    n: "04",
    title: "Enjoy the drive",
    body: "Settle in with the audio and connected features you actually wanted from the start.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Getting Started Is Simple
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 140}>
              <div className="relative lg:pr-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
                    {s.n}
                  </span>
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent lg:block" />
                </div>
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------- Banner --------------------------------- */

export function CinematicBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bannerRoad}
        alt="Modern car driving on an open mountain highway at golden hour"
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Clean vivid road image with dark vignette for crisp text contrast */}
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

      <div className="mx-auto max-w-[88rem] px-5 py-28 text-center lg:px-10 lg:py-44">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-6xl">
            Your Drive. Your Soundtrack.
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90">
            Long commutes, weekend routes, the school run — the right entertainment setup makes the
            same road feel different. We'll help you find the one that fits your vehicle.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="tel:+18663814782"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Call (866) 381-4782 <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Support -------------------------------- */

const benefits = [
  {
    icon: Compass,
    title: "Clear Guidance",
    body: "Straight answers about what's available and what it actually involves.",
  },
  {
    icon: Car,
    title: "Vehicle-Focused Support",
    body: "Advice anchored to your year, make and model — not a generic checklist.",
  },
  {
    icon: Sparkles,
    title: "Simple Experience",
    body: "One conversation, ordered steps, and no technical vocabulary to decode.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Assistance",
    body: "Someone stays with your request from the first question to the last one.",
  },
];

export function SupportSection() {
  return (
    <section id="support" className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <div className="zoom-media rounded-[2rem] border border-border">
            <img
              src={supportPerson}
              alt="Person inside a premium vehicle adjusting the infotainment system"
              loading="lazy"
              width={1200}
              height={1312}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <p className="eyebrow">Why Satellite Drive</p>
            <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Support Designed Around Your Drive
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={120 + i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/40">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/12">
                    <b.icon className="size-5 text-primary" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Technology ------------------------------- */

const labels = [
  {
    title: "Infotainment display",
    body: "The central screen where channels, sources and settings live.",
    pos: "left-[6%] top-[10%]",
  },
  {
    title: "Steering controls",
    body: "Change source or station without taking your hands off the wheel.",
    pos: "left-[6%] bottom-[10%]",
  },
  {
    title: "Audio system",
    body: "Speakers, amplification and tuning shape how everything sounds.",
    pos: "right-[6%] top-[10%]",
  },
  {
    title: "Connected features",
    body: "Streaming, navigation audio and phone integration working together.",
    pos: "right-[6%] bottom-[10%]",
  },
];

export function Technology() {
  return (
    <section id="technology" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">Technology</p>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Technology That Fits Into Your Drive
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Modern vehicle entertainment blends audio, connectivity, navigation and digital
              controls into one system. Here's how the pieces relate to each other.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-border">
            <img
              src={techCockpit}
              alt="Wide view of a modern luxury car cockpit with dashboard and infotainment display"
              loading="lazy"
              width={1600}
              height={1008}
              className="aspect-16/10 w-full object-cover"
            />
            {/* Clean cockpit image - no white overlay */}
            <div className="absolute inset-0 hidden lg:block">
              {labels.map((l) => (
                <div
                  key={l.title}
                  className={`absolute w-56 rounded-xl border border-border bg-background/80 p-4 backdrop-blur-md ${l.pos}`}
                >
                  <p className="flex items-center gap-2 font-display text-xs font-bold text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {l.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
          {labels.map((l, i) => (
            <Reveal as="li" key={l.title} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-background/50 p-5">
                <p className="font-display text-sm font-bold text-primary">{l.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

const testimonials = [
  {
    quote:
      "I had no idea whether my SUV was already set up for satellite radio. They asked for the year and trim, explained what that usually means, and I finally understood my own dashboard.",
    name: "Denise R.",
    detail: "Crossover owner · Ohio",
  },
  {
    quote:
      "What I appreciated most was that nobody rushed me. I asked the same question twice and got a patient answer both times, with the options laid out side by side.",
    name: "Marcus T.",
    detail: "Daily commuter · Texas",
  },
  {
    quote:
      "The whole thing took one short call. They told me what information I'd need, what the steps looked like, and left the decision entirely to me.",
    name: "Priya S.",
    detail: "Sedan owner · New Jersey",
  },
];

export function Testimonials() {
  return (
    <section
      id="satellite-radio"
      className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32"
    >
      <Reveal>
        <p className="eyebrow">Customer Experience</p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
          Drivers Deserve a Simpler Experience
        </h2>
      </Reveal>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 110}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/50 p-8 transition-colors duration-300 hover:border-primary/40">
              <Quote className="size-6 text-primary/70" />
              <blockquote className="mt-6 text-sm leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  {
    q: "What is satellite radio?",
    a: "Satellite radio is a subscription-based audio service delivered by satellite rather than local AM/FM towers. Because the signal is broadcast over a wide area, coverage generally stays consistent across long drives, and channel line-ups typically include music, talk, sports and news.",
  },
  {
    q: "Does my vehicle support satellite radio?",
    a: "It depends on the year, make, model and how that specific vehicle was equipped when it was built. Many newer vehicles include the necessary hardware from the factory, while others may not. Sharing your vehicle details with us is the fastest way to get a clearer picture.",
  },
  {
    q: "How can vehicle compatibility be checked?",
    a: "Use the compatibility form on this page to send us your vehicle year, make and model. A specialist reviews the details and follows up with general guidance about which entertainment options may be relevant to that vehicle.",
  },
  {
    q: "Can older vehicles use satellite radio?",
    a: "In many cases there are still options for older vehicles, though the approach can differ from a factory-equipped car. We can explain the general possibilities so you understand what may or may not apply to your situation.",
  },
  {
    q: "Is additional equipment required?",
    a: "Sometimes. Vehicles without built-in capability may require additional equipment to receive a satellite signal, while factory-equipped vehicles often do not. Requirements vary, so we look at your specific vehicle before suggesting anything.",
  },
  {
    q: "How does activation generally work?",
    a: "Activation typically involves identifying the vehicle or receiver, selecting a service option with the provider, and completing their sign-up process. We explain what the steps usually look like and what information tends to be requested.",
  },
  {
    q: "Can I get help choosing an option?",
    a: "Yes. That's the core of what we do. We compare the paths that may be available for your vehicle, describe the trade-offs in plain language, and leave the final decision with you.",
  },
  {
    q: "How do I contact support?",
    a: "Call (866) 381-4782. Our team is available Monday to Friday, 8:00 AM to 8:00 PM ET, and Saturday, 9:00 AM to 5:00 PM ET.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl">
                Questions, answered plainly
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Still unsure about something? Send us your vehicle details and we'll answer in
                context of your car.
              </p>
              <a
                href="tel:+18663814782"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Call (866) 381-4782 <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-base font-bold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Final CTA ------------------------------ */

export function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <img
        src={ctaDash}
        alt="Darkened modern car dashboard at night"
        loading="lazy"
        width={1808}
        height={912}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Clean dashboard image with subtle dark overlay for CTA readability */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="panel mx-auto max-w-4xl p-9 text-center sm:p-14">
          <Reveal>
            <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
              Ready to Explore Your In-Car Entertainment Options?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Get clear, vehicle-specific guidance and understand what may work with your car before
              you commit to anything. One conversation is usually all it takes.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+18663814782"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" /> Call (866) 381-4782
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Headphones className="size-3.5 text-primary" /> (866) 381-4782
              </span>
              <span className="inline-flex items-center gap-2">
                <KeyRound className="size-3.5 text-primary" /> No obligation
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
