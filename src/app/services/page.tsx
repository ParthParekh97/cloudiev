"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Sliders,
  Cpu,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Award,
  Users,
  TrendingUp,
  Clock,
  Code,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8" />,
  Sliders: <Sliders className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  ShieldAlert: <ShieldAlert className="w-8 h-8" />,
};

const serviceColors: Record<string, string> = {
  "salesforce-consulting": "#0176D3",
  "implementation-customization": "#06A59A",
  "custom-development-integration": "#9B59B6",
  "agentforce-ai": "#E28743",
  "managed-services": "#1E88E5",
};

const engagementModels = [
  {
    name: "Fixed-Price Project",
    desc: "Best for clearly scoped implementations, migrations, and strategic roadmap consulting.",
    benefits: [
      "Guaranteed price and scope",
      "Strict project timeline & delivery dates",
      "Weekly milestone updates",
      "30-day post-launch hypercare support",
    ],
    idealFor: "New setups, large integrations, multi-cloud migrations",
  },
  {
    name: "Monthly Retainer (Managed Services)",
    desc: "A dedicated pool of administrator, developer, and QA hours to optimize your platform month after month.",
    benefits: [
      "Priority SLA response times (<4 hours)",
      "Unused hours carry over (up to 20%)",
      "Tri-annual Salesforce release audits",
      "Dedicated account delivery manager",
    ],
    idealFor: "Ongoing support, continuous enhancement, user administration",
    highlighted: true,
  },
  {
    name: "Dedicated Resources",
    desc: "Augment your internal teams with senior Salesforce developers, architects, and business analysts.",
    benefits: [
      "100% focused on your product backlog",
      "Direct communication in Slack/Teams",
      "Agile sprint participation",
      "Flexible sizing — scale up or down easily",
    ],
    idealFor: "AppExchange development, large-scale custom engineering",
  },
];

export default function ServicesPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Group all service FAQs for display
  const allFaqs = services.flatMap((s) => s.faqs);

  return (
    <>
      <PageHero
        title="Salesforce Consulting & Professional Services"
        subtitle="We align CRM strategy with your business goals. Architecting, implementing, and optimizing Salesforce solutions with speed and precision."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* ─── METRICS & STATS BAR ────────────────────────── */}
      <section className="border-b border-primary/8 bg-surface/40 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-5 h-5 text-primary" />, value: "98%", label: "On-Time Project Delivery" },
              { icon: <Users className="w-5 h-5 text-accent" />, value: "92%", label: "User Adoption & Enablement" },
              { icon: <TrendingUp className="w-5 h-5 text-highlight" />, value: "35%+", label: "Avg. Customer ROI Boost" },
              { icon: <Award className="w-5 h-5 text-yellow-500" />, value: "25+ Yrs", label: "Combined Salesforce Expertise" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-primary/5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-primary/8 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-light leading-none">{stat.value}</h4>
                  <p className="text-xs text-muted mt-1 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Expertise"
            title="End-to-End Salesforce Services"
            subtitle="From strategic advisory to custom LWC development and Agentforce AI implementations."
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col bg-white rounded-2xl border border-primary/8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                style={{ borderTopColor: `${serviceColors[service.slug]}25`, borderTopWidth: 4 }}
              >
                <div className="p-7 flex-1">
                  {/* Icon Block */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundColor: `${serviceColors[service.slug]}08`,
                      color: serviceColors[service.slug],
                      border: `1px solid ${serviceColors[service.slug]}15`,
                    }}
                  >
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2.5 mb-8 border-t border-primary/5 pt-5">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-2 text-xs">
                        <CheckCircle className="w-4 h-4 shrink-0 text-accent mt-0.5" />
                        <div>
                          <strong className="text-light">{benefit.title}: </strong>
                          <span className="text-muted">{benefit.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="px-7 py-4.5 bg-surface/50 border-t border-primary/8 flex items-center justify-between group-hover:bg-primary/5 transition-colors">
                  <span className="text-xs font-semibold text-muted group-hover:text-primary transition-colors">
                    Ready to implement?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE ───────────────────────────── */}
      <section className="py-24 bg-surface/30 border-y border-primary/8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Our Approach"
            title="The Cloudiev Success Framework"
            subtitle="We don't believe in endless billable hours. We deliver custom solutions through a transparent, high-speed 4-step framework."
          />

          <div className="relative border-l border-primary/15 ml-4 md:ml-32 mt-12 space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Diagnostics",
                desc: "We analyze your existing workflows and run deep-dive metadata health checks. No assumptions — only data-grounded strategizing.",
                icon: <Compass className="w-4 h-4 text-primary" />,
              },
              {
                step: "02",
                title: "Custom Blueprint Design",
                desc: "We draft architecture diagrams, map database custom objects, and design clean Lightning Web Component wireframes.",
                icon: <Code className="w-4 h-4 text-accent" />,
              },
              {
                step: "03",
                title: "High-Speed Execution",
                desc: "Our senior developers write clean Apex and construct Flow automations inside sandboxes, verified under strict QA testing cycles.",
                icon: <Zap className="w-4 h-4 text-highlight" />,
              },
              {
                step: "04",
                title: "Adoption & Hypercare",
                desc: "We deliver tailored user training, deploy solutions safely via Git CI/CD, and provide dedicated support to guarantee successful adoption.",
                icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Horizontal connection line on larger screens */}
                <div className="absolute -left-[1px] top-5 w-8 md:w-12 h-px bg-primary/20 hidden md:block" />

                {/* Left Step Indicator (Desktop Only) */}
                <div className="absolute top-2 -left-28 text-right hidden md:block w-20">
                  <span className="text-3xl font-extrabold gradient-text-purple leading-none">{p.step}</span>
                </div>

                {/* Dot Icon */}
                <div className="absolute left-0 top-2 -translate-x-[17px] w-8 h-8 rounded-full bg-white border border-primary/15 flex items-center justify-center shadow-sm">
                  {p.icon}
                </div>

                {/* Content Box */}
                <div className="bg-white rounded-2xl p-6 border border-primary/8 shadow-sm">
                  <h4 className="text-lg font-bold text-light mb-1.5 flex items-center gap-2">
                    <span className="text-sm font-bold text-primary bg-primary/8 border border-primary/15 px-2 py-0.5 rounded-md md:hidden">
                      {p.step}
                    </span>
                    {p.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Flexibility"
            title="Tailored Engagement Models"
            subtitle="Select the cooperation plan that matches your project scopes and technical budgeting."
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {engagementModels.map((model, idx) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl p-8 flex flex-col border transition-all duration-300 relative ${
                  model.highlighted
                    ? "border-primary shadow-xl shadow-primary/8 bg-gradient-to-b from-primary/5 via-white to-white"
                    : "border-primary/10 shadow-md bg-white hover:border-primary/25"
                }`}
              >
                {model.highlighted && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-light mb-2">{model.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{model.desc}</p>

                {/* Benefits */}
                <div className="border-t border-primary/8 pt-6 mb-8">
                  <h4 className="text-xs font-bold text-light uppercase tracking-wider mb-4">Included Key Perks</h4>
                  <ul className="space-y-3">
                    {model.benefits.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-muted">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                <div className="bg-surface/60 rounded-xl p-4 border border-primary/5 text-xs mb-8">
                  <span className="font-bold text-light block mb-1">Ideal For:</span>
                  <span className="text-muted leading-relaxed">{model.idealFor}</span>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all w-full text-center ${
                    model.highlighted
                      ? "bg-highlight hover:bg-highlight/90 text-white shadow-md shadow-highlight/25"
                      : "border border-primary/20 text-light hover:bg-surface"
                  }`}
                >
                  Discuss cooperation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ACCORDION ─────────────────────────────── */}
      <section className="py-24 bg-surface/30 border-t border-primary/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find rapid answers to standard queries on our delivery guidelines, security measures, and platforms."
          />

          <div className="mt-12 space-y-4">
            {allFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-primary/8 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-light hover:text-primary transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4.5 h-4.5 text-primary shrink-0 w-[18px] h-[18px]" />
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeFAQ === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted shrink-0"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeFAQ === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-primary/5"
                    >
                      <div className="px-6 py-4.5 text-sm text-muted leading-relaxed bg-surface/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/15 mb-5 uppercase tracking-wide">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-light leading-tight mb-5 tracking-tight">
            Ready to Build a Better{" "}
            <span className="gradient-text">Salesforce Ecosystem</span>?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get in touch with our certified architects to run a free CRM Diagnostics and build your optimization roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-highlight hover:bg-highlight/90 text-white font-semibold transition-all glow-button text-sm"
            >
              Book CRM Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/20 text-light hover:bg-surface font-semibold transition-all text-sm"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
