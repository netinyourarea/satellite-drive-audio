import { useState } from "react";
import {
  ArrowRight,
  Ban,
  BadgePercent,
  Check,
  Clock,
  CreditCard,
  Layers,
  Music2,
  PhoneCall,
  RadioTower,
  TrendingDown,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SITE_PHONE } from "@/lib/site-contact";

/* ------------------------------ Help topics ------------------------------- */

const helpTopics = [
  {
    id: "billing",
    icon: CreditCard,
    label: "Incorrect billing",
    headline: "Get help with a charge that looks wrong",
    body: "A renewal that landed higher than planned, or a bill that doesn't add up? We help you read it line by line.",
    points: [
      "Unexpected or higher-than-expected renewal charges",
      "Clarify monthly vs. annual pricing breakdowns",
      "Update payment method & billing dispute assistance",
    ],
    cta: "Call billing support",
  },
  {
    id: "cancel",
    icon: Ban,
    label: "Cancel subscription",
    headline: "Know your options before you cancel",
    body: "Selling the car, or simply done with a plan? We explain how ending or moving a subscription usually works.",
    points: [
      "Inquire about subscription cancellation terms",
      "Stop automatic renewal on vehicle systems",
      "Transfer service to a new car or replacement receiver",
    ],
    cta: "Call cancellation help",
  },
  {
    id: "plans",
    icon: Music2,
    label: "Know about plans",
    headline: "Find a plan that matches how you drive",
    body: "Plan names and tiers can blur together. We lay out the differences so you can choose with confidence.",
    points: [
      "Save up to 40%–50% with eligible annual rates",
      "Single vehicle, multi-car & fleet options",
      "Check promotional discount vouchers & channel line-ups",
    ],
    cta: "Call to compare plans",
  },
  {
    id: "signal",
    icon: RadioTower,
    label: "Not working / signal help",
    headline: "Get the music back when the signal drops",
    body: "“No signal”, an antenna warning or channels that won't load are often fixable. We help you narrow down the cause.",
    points: [
      "Fix “No Signal”, “Check Antenna”, or loading errors",
      "Preview Channel 184 audio test guidance",
      "Request a satellite signal refresh or radio activation",
    ],
    cta: "Call technical support",
  },
  {
    id: "parts",
    icon: Wrench,
    label: "Shop parts & hardware",
    headline: "Pick the right hardware the first time",
    body: "Antennas, power cords and docks only help if they fit your car. We check compatibility before you buy.",
    points: [
      "Magnetic car antennas & replacement power cords",
      "Bluetooth dashboard docks & mounting cradles",
      "Expert advice on compatibility for your car make/model",
    ],
    cta: "Inquire about parts",
  },
];

export function HelpTopics() {
  const fallback = helpTopics[0]!;
  const [active, setActive] = useState(fallback.id);
  const topic = helpTopics.find((t) => t.id === active) ?? fallback;

  return (
    <section id="help-topics" className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <p className="eyebrow">Select Your Issue Below</p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
          What Can We Help You With Today?
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="panel mt-12 grid overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
          <div
            role="tablist"
            aria-label="Help topics"
            className="flex gap-2 overflow-x-auto border-b border-border p-3 lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0 lg:p-5"
          >
            {helpTopics.map((t) => {
              const selected = t.id === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="help-topic-panel"
                  onClick={() => setActive(t.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-bold transition-colors duration-200 lg:w-full ${
                    selected
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/80 hover:bg-primary/10"
                  }`}
                >
                  <t.icon className="size-5 shrink-0" />
                  <span className="whitespace-nowrap">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div
            key={topic.id}
            id="help-topic-panel"
            role="tabpanel"
            className="animate-fade-in flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-14"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-primary/12">
              <topic.icon className="size-7 text-primary" />
            </span>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">{topic.headline}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {topic.body}
              </p>
            </div>
            <ul className="space-y-3">
              {topic.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${SITE_PHONE.raw}`}
              className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              {topic.cta} · {SITE_PHONE.display} <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------- Savings -------------------------------- */

const featuredSaving = {
  icon: BadgePercent,
  title: "Save Up to 40%",
  body: "Cut your annual cost with up to 40% off eligible annual plans. Terms apply.",
};

const savingsIdeas = [
  {
    icon: Users,
    title: "Bigger Family Savings",
    body: "Combine eligible systems and cut your overall subscription cost with a family plan.",
  },
  {
    icon: Trophy,
    title: "Pay Less for Sports",
    body: "Enjoy sports coverage for less. Check current promotional pricing and eligibility.",
  },
  {
    icon: TrendingDown,
    title: "Lower Your Monthly Cost",
    body: "Explore available plans that can help reduce your monthly subscription expense.",
  },
  {
    icon: Layers,
    title: "More Savings, Less Hassle",
    body: "Bundle eligible systems, lower your overall cost, and get help finding available savings.",
  },
];

export function SavingsSection() {
  return (
    <section
      id="savings"
      className="relative isolate overflow-hidden"
      style={{ background: "oklch(0.15 0.012 60)" }}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-24 -z-10 size-[28rem] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 55) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow" style={{ color: "oklch(0.85 0.15 65)" }}>
            Savings Opportunities
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
            Ways You May Lower Your Satellite Radio Cost
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
            Explore these savings options — check current eligibility and pricing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr]">
          <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div
              className="flex h-full flex-col justify-between gap-12 rounded-3xl p-8 sm:p-10"
              style={{
                background: "linear-gradient(150deg, oklch(0.72 0.19 58), oklch(0.55 0.2 40))",
                boxShadow: "0 30px 60px -20px oklch(0.65 0.19 55 / 45%)",
              }}
            >
              <featuredSaving.icon className="size-10 text-white" />
              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {featuredSaving.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                  {featuredSaving.body}
                </p>
                <a
                  href={`tel:${SITE_PHONE.raw}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform duration-200 hover:scale-[1.03]"
                >
                  Ask by phone · {SITE_PHONE.display} <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {savingsIdeas.map((s, i) => (
            <Reveal key={s.title} delay={80 + i * 80}>
              <div
                className="h-full rounded-3xl p-7"
                style={{
                  background: "oklch(1 0 0 / 6%)",
                  border: "1px solid oklch(1 0 0 / 12%)",
                }}
              >
                <span
                  className="grid size-11 place-items-center rounded-xl"
                  style={{ background: "oklch(0.72 0.18 55 / 22%)" }}
                >
                  <s.icon className="size-5" style={{ color: "oklch(0.88 0.13 70)" }} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/50">
            Offers vary. Eligibility, pricing, and duration are not guaranteed on this page. Plans
            are typically sold separately from satellite radio hardware.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Call desk ------------------------------- */

const callReasons = [
  "Call to activate your radio",
  "Call for billing issue",
  "Live cancellation help now",
  "Cancel your subscription today",
];

export function CallDesk() {
  return (
    <section id="call-desk" className="mx-auto max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
      <div
        className="relative overflow-hidden rounded-[2.25rem] p-8 sm:p-12 lg:p-16"
        style={{
          background: "linear-gradient(135deg, oklch(0.16 0.014 60), oklch(0.24 0.04 50))",
          boxShadow: "0 40px 80px -30px oklch(0 0 0 / 0.5)",
        }}
      >
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.18 55) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "oklch(0.85 0.15 65)" }}>
                Need Help?
              </p>
              <h2 className="mt-5 text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
                Call for Assistance
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                Representatives can help with common satellite radio questions — activation, signal
                issues, subscription billing, and plan options. Use the number on this page to
                speak with someone about your situation. Offers and availability may vary.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {callReasons.map((r) => (
                  <li key={r}>
                    <a
                      href={`tel:${SITE_PHONE.raw}`}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-white transition-colors duration-200 hover:bg-white/20"
                      style={{
                        background: "oklch(1 0 0 / 10%)",
                        border: "1px solid oklch(0.72 0.18 55 / 50%)",
                      }}
                    >
                      <PhoneCall className="size-3.5" style={{ color: "oklch(0.85 0.15 65)" }} />
                      {r}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div
              className="rounded-3xl p-8 text-center sm:p-10"
              style={{
                background: "oklch(0.1 0.01 60 / 70%)",
                border: "1px solid oklch(0.72 0.18 55 / 45%)",
                boxShadow: "0 0 50px oklch(0.72 0.18 55 / 20%)",
              }}
            >
              <p className="text-[0.7rem] font-bold tracking-[0.22em] text-white/60 uppercase">
                Toll-free directory number
              </p>
              <a
                href={`tel:${SITE_PHONE.raw}`}
                className="mt-4 block font-display text-3xl font-extrabold tracking-tight text-white transition-transform duration-200 hover:scale-[1.03] sm:text-4xl"
              >
                {SITE_PHONE.display}
              </a>
              <a
                href={`tel:${SITE_PHONE.raw}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.19 58), oklch(0.58 0.22 42))",
                  boxShadow: "0 4px 24px oklch(0.65 0.19 55 / 45%)",
                }}
              >
                <PhoneCall className="size-4" /> Call now
              </a>
              <p className="mt-6 flex items-start justify-center gap-2 text-xs leading-relaxed text-white/60">
                <Clock className="mt-0.5 size-3.5 shrink-0" />
                Toll-free · Common radio models · Ask about hours when you call
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
