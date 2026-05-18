"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Zap, HeadphonesIcon, TrendingUp,
  RefreshCw, FileText, BarChart3, Star, Globe, Users,
  Award, CheckCircle, Activity, Database, Layers,
  Compass, Sliders, Cpu, Sparkles, ShieldAlert,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

const productIconMap: Record<string, React.ReactNode> = {
  RefreshCw: <RefreshCw className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
};

const serviceIconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Sliders: <Sliders className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
};

const productColors: Record<string, string> = {
  "cloudsync-pro": "#0176D3",
  formflow: "#06A59A",
  reportiq: "#9B59B6",
};

const serviceColors: Record<string, string> = {
  "salesforce-consulting": "#0176D3",
  "implementation-customization": "#06A59A",
  "custom-development-integration": "#9B59B6",
  "agentforce-ai": "#E28743",
  "managed-services": "#1E88E5",
};

/* ── Animated rotating headlines ── */
const headlines = [
  "Ship Faster on Salesforce.",
  "Tailored Consulting & Strategy.",
  "Zero Data Loss. Ever.",
  "Autonomous Agentforce AI.",
  "Seamless Enterprise Integration.",
];

function AnimatedHeadline() {
  return (
    <div className="h-9 overflow-hidden relative">
      <motion.div
        animate={{ y: [0, -36, -72, -108, -144, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
      >
        {headlines.map((h, i) => (
          <div key={i} className="h-9 flex items-center text-lg font-semibold text-accent">
            {h}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Mock product dashboard card ── */
function MockDashboard() {
  const rows = [
    { label: "Accounts", count: "12,450", pct: 98, color: "#0176D3" },
    { label: "Contacts", count: "48,230", pct: 100, color: "#06A59A" },
    { label: "Opportunities", count: "3,891", pct: 97, color: "#9B59B6" },
  ];
  return (
    <div className="w-full rounded-2xl bg-white border border-primary/12 shadow-xl shadow-primary/8 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-primary/8 bg-surface/60">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <RefreshCw className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-light">CloudSync Pro</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Live
        </span>
      </div>
      {/* Rows */}
      <div className="px-5 py-4 space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-muted">{row.label}</span>
              <span className="text-xs font-bold text-light">{row.count}</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${row.pct}%` }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: row.color }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="px-5 py-3 bg-surface/50 border-t border-primary/8 flex items-center justify-between">
        <span className="text-xs text-muted flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent" /> Last sync: 2s ago
        </span>
        <span className="text-xs font-semibold text-primary">100% synced</span>
      </div>
    </div>
  );
}

/* ── Floating stat badge ── */
function StatBadge({ icon, value, label, delay = 0 }: { icon: React.ReactNode; value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2.5 bg-white rounded-xl px-3.5 py-2.5 shadow-lg shadow-primary/10 border border-primary/10"
    >
      <div className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-light leading-none">{value}</p>
        <p className="text-xs text-muted mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

/* ── Interactive Custom Integration Pipeline Illustration ── */
function IntegrationPipeline() {
  return (
    <div className="w-full bg-white rounded-2xl border border-primary/12 p-6 shadow-xl relative overflow-hidden h-[300px] flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-[60px]" />

      <div className="flex items-center justify-between border-b border-primary/8 pb-4">
        <span className="text-xs font-bold text-light flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-primary" /> Multi-System Integration Hub
        </span>
        <span className="text-[10px] text-muted font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">
          Connected via API
        </span>
      </div>

      {/* Visual Pipeline Flows */}
      <div className="relative flex items-center justify-between py-6 flex-1 px-4">
        {/* Left Side: Third-Party Sources */}
        <div className="flex flex-col gap-4 z-10">
          <div className="px-3 py-2 rounded-xl bg-surface border border-primary/8 shadow-sm text-center min-w-[90px] flex items-center gap-1.5 text-xs font-bold text-muted hover:border-primary/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-orange-400" /> ERP (SAP)
          </div>
          <div className="px-3 py-2 rounded-xl bg-surface border border-primary/8 shadow-sm text-center min-w-[90px] flex items-center gap-1.5 text-xs font-bold text-muted hover:border-primary/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> PostgreSQL
          </div>
          <div className="px-3 py-2 rounded-xl bg-surface border border-primary/8 shadow-sm text-center min-w-[90px] flex items-center gap-1.5 text-xs font-bold text-muted hover:border-primary/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-pink-500" /> Stripe API
          </div>
        </div>

        {/* Center: Middleware Hub */}
        <div className="relative flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex flex-col items-center justify-center text-white relative group cursor-pointer border border-white/20">
            <Zap className="w-6 h-6 animate-pulse" />
            <span className="absolute -bottom-6 text-[9px] font-bold text-light uppercase tracking-wider text-center whitespace-nowrap">
              MuleSoft / Hub
            </span>
          </div>

          {/* Flow Lines */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary/20 overflow-hidden hidden md:block">
            <div className="w-6 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[flow_2s_infinite_linear]" />
          </div>
          <div className="absolute left-12 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary/20 overflow-hidden hidden md:block">
            <div className="w-6 h-full bg-gradient-to-r from-transparent via-accent to-transparent animate-[flow_2s_infinite_linear_reverse]" />
          </div>
        </div>

        {/* Right Side: Salesforce CRM Core */}
        <div className="z-10 flex flex-col gap-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200/80 shadow-md flex flex-col items-center justify-center text-center w-[120px]">
            <Database className="w-5 h-5 text-blue-500 mb-1.5" />
            <span className="text-xs font-bold text-blue-900 leading-tight">Salesforce</span>
            <span className="text-[9px] text-blue-500 font-semibold mt-0.5">Custom Schema</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/8 pt-3 flex items-center justify-between text-[10px] text-muted">
        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> OAuth 2.0 Encryption</span>
        <span className="font-semibold text-primary">Bi-Directional Sync Active</span>
      </div>
    </div>
  );
}

/* ── Data ── */
const stats = [
  { value: "3+", label: "Apps Published", icon: <Layers className="w-4 h-4" /> },
  { value: "500+", label: "CRM Customers", icon: <Users className="w-4 h-4" /> },
  { value: "98%", label: "On-Time Project Delivery", icon: <Award className="w-4 h-4" /> },
  { value: "30+", label: "Countries Served", icon: <Globe className="w-4 h-4" /> },
];

const values = [
  { icon: <Shield className="w-6 h-6" />, title: "Trust & Security Native", description: "All cloud applications and integrations built to exceed Salesforce Shield & security reviewer standards.", accent: "#0176D3" },
  { icon: <Zap className="w-6 h-6" />, title: "Outcome-Driven Consulting", description: "We don't sell billable hours. We deploy high-performing Blueprints designed for measurable ROI.", accent: "#06A59A" },
  { icon: <HeadphonesIcon className="w-6 h-6" />, title: "24/7 Managed Services", description: "Guaranteed SLA timelines with certified Salesforce administrators on demand to handle any update.", accent: "#9B59B6" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Proven Industry Verticals", description: "Tailored setups for BFSI/FinTech, Automobile, EdTech, Healthcare, and non-profits.", accent: "#0176D3" },
];

const testimonials = [
  { name: "Sarah Chen", role: "VP of Operations", company: "Meridian Health", quote: "CloudSync Pro eliminated 40 hrs of manual data entry per week. Multi-org sync runs flawlessly." },
  { name: "James Rodriguez", role: "Salesforce Admin", company: "NovaTech Industries", quote: "We went from a 6-week dev estimate to launching a partner portal in 3 days — no code needed." },
  { name: "Priya Patel", role: "CTO", company: "Apex Financial Group", quote: "ReportIQ's AI summaries alone save our exec team hours every week. Truly game-changing." },
  { name: "Michael Thompson", role: "Director of IT", company: "GreenLeaf Logistics", quote: "Passed our security review on first submission. That trust factor was critical for compliance." },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"products" | "services">("products");

  return (
    <>
      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 hero-glow" />
        {/* Soft orbs */}
        <div className="absolute top-24 -left-20 w-80 h-80 bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/6 rounded-full blur-[90px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold shadow-sm">
                  <CheckCircle className="w-3 h-3" /> AppExchange Certified ISV
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/8 border border-accent/18 text-accent text-xs font-semibold shadow-sm">
                  <Shield className="w-3 h-3" /> Salesforce Consulting Partner
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-light leading-[1.08] tracking-tight mb-3">
                Your Complete{" "}
                <span className="gradient-text">Salesforce</span> Partner
              </h1>
              <AnimatedHeadline />

              <p className="mt-5 text-lg text-muted leading-relaxed max-w-lg">
                Cloudiev delivers elite AppExchange products alongside certified consulting, seamless systems integration, and custom LWC development — native to Salesforce, optimized for growth.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-highlight hover:bg-highlight/90 text-white font-semibold transition-all glow-button text-sm shadow-md"
                >
                  Consulting Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/20 text-light hover:bg-surface hover:border-primary/35 font-semibold transition-all text-sm"
                >
                  Explore Products
                </Link>
              </div>

              {/* Mini stat row */}
              <div className="flex flex-wrap gap-3 mt-8">
                <StatBadge icon={<Users className="w-4 h-4" />} value="500+" label="Companies" delay={0.5} />
                <StatBadge icon={<Star className="w-4 h-4" />} value="98%" label="On-Time Delivery" delay={0.65} />
                <StatBadge icon={<Globe className="w-4 h-4" />} value="25+ Yrs" label="Experience" delay={0.8} />
              </div>
            </motion.div>

            {/* Right — Interactive graphics selector */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Tab Selector */}
              <div className="flex gap-2 mb-4 bg-surface p-1 rounded-xl border border-primary/8 max-w-[320px] mx-auto shadow-sm">
                <button
                  onClick={() => setActiveTab("products")}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "products" ? "bg-white text-primary shadow" : "text-muted hover:text-light"
                  }`}
                >
                  AppExchange Dashboard
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "services" ? "bg-white text-primary shadow" : "text-muted hover:text-light"
                  }`}
                >
                  Integration Pipelines
                </button>
              </div>

              {activeTab === "products" ? (
                <div>
                  <MockDashboard />
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-primary/10 px-4 py-2.5 flex items-center gap-2"
                  >
                    <Database className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs font-bold text-light leading-none">1.2M records</p>
                      <p className="text-[10px] text-muted">synced today</p>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-accent/15 px-4 py-2.5 flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-xs font-bold text-light leading-none">Zero errors</p>
                      <p className="text-[10px] text-muted">last 30 days</p>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <IntegrationPipeline />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────── */}
      <section className="border-y border-primary/8 bg-surface/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm text-muted">
            {[
              { icon: <Users className="w-4 h-4 text-primary" />, text: <><strong className="text-light">500+</strong> companies trust Cloudiev</> },
              { icon: <CheckCircle className="w-4 h-4 text-accent" />, text: <><strong className="text-light">AppExchange</strong> Security Reviewed</> },
              { icon: <Award className="w-4 h-4 text-highlight" />, text: <><strong className="text-light">ISV & Consulting Partner</strong></> },
              { icon: <Star className="w-4 h-4 text-yellow-500" />, text: <><strong className="text-light">98%</strong> Project Success SLA</> },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">{icon}<span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOUBLE PILLARS DYNAMIC TAB SECTION ───────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Ecosystem Capabilities"
            title="Two Pillars. One Seamless Salesforce Experience."
            subtitle="We build premium products and consult enterprise divisions with identical standards of excellence."
          />

          {/* Interactive Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* AppExchange Apps Pillar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-primary/10 p-8 shadow-md flex flex-col justify-between hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full">Pillar 01</span>
                <h3 className="text-2xl font-black text-light mt-4 mb-3 group-hover:text-primary transition-colors">Salesforce-Native Apps</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  Skip expensive, custom integrations. Install Cloudiev&apos;s certified AppExchange apps inside your org in under 5 minutes to unlock bi-directional sync, custom layouts, and reports instantly.
                </p>
                <div className="space-y-3 mb-8">
                  {products.map((p) => (
                    <div key={p.slug} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: productColors[p.slug] }} />
                      <span className="text-sm font-semibold text-light">{p.name}</span>
                      <span className="text-xs text-muted">— {p.tagline.split("—")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-primary/8 text-primary hover:bg-primary hover:text-white transition-all w-full text-center"
              >
                Browse Our AppExchange Apps <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Consulting & Custom Dev Pillar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-primary/10 p-8 shadow-md flex flex-col justify-between hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/8 border border-accent/15 px-3 py-1 rounded-full">Pillar 02</span>
                <h3 className="text-2xl font-black text-light mt-4 mb-3 group-hover:text-accent transition-colors">Consulting & Development</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  For complex requirements, our certified team designs high-performing roadmaps, constructs custom Lightning components (LWC), secures robust APIs, and manages Agentforce deployments.
                </p>
                <div className="space-y-3 mb-8">
                  {services.slice(0, 3).map((s) => (
                    <div key={s.slug} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: serviceColors[s.slug] }} />
                      <span className="text-sm font-semibold text-light">{s.name}</span>
                      <span className="text-xs text-muted">— {s.tagline.split("—")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-accent/8 text-accent hover:bg-accent hover:text-white transition-all w-full text-center"
              >
                Explore Consulting Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS PREVIEW ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="AppExchange"
            title="Salesforce Products Built for Enterprise"
            subtitle="Native Salesforce solutions. Install in minutes, results in days."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="flex flex-col glass rounded-2xl p-6 h-full group cursor-pointer border border-primary/5 hover:shadow-lg transition-all duration-300"
                  style={{ borderTopColor: `${productColors[product.slug]}30`, borderTopWidth: 3 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-primary/8 shadow-sm"
                    style={{ backgroundColor: `${productColors[product.slug]}12`, color: productColors[product.slug] }}
                  >
                    {productIconMap[product.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-light mb-1.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1 mb-4 text-[13px]">{product.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────── */}
      <section className="py-24 bg-surface/40 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Consulting Stack"
            title="Elite Salesforce Consulting & Development"
            subtitle="We connect data silos, deploy Einstein AI automation, and construct reliable LWC components."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col bg-white rounded-2xl border border-primary/8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                style={{ borderTopColor: `${serviceColors[service.slug]}25`, borderTopWidth: 4 }}
              >
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-primary/8 shadow-sm"
                      style={{ backgroundColor: `${serviceColors[service.slug]}10`, color: serviceColors[service.slug] }}
                    >
                      {serviceIconMap[service.icon]}
                    </div>
                    <h3 className="text-base font-bold text-light mb-1.5 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">{service.tagline}</p>
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View offering details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/20 text-light hover:bg-surface font-semibold transition-all text-sm shadow-sm"
            >
              Explore All 5 Service Lines <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CLOUDIEV ─────────────────────── */}
      <section className="py-24 bg-white border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Cloudiev"
            title="Outcome-Focused. Platform-Native."
            subtitle="Salesforce and CRM architectures configured for ultimate performance and security reviewed standard."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-primary/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-primary/8"
                  style={{ backgroundColor: `${v.accent}10`, color: v.accent }}
                >
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-light mb-1.5">{v.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNER CTA ──────────────────────── */}
      <section className="py-20 bg-surface/30 border-y border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-accent p-px shadow-xl shadow-primary/15">
            <div className="rounded-[15px] bg-white px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-3">
                  Partner Ecosystem
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-light mb-3">
                  Grow Your Business with Cloudiev
                </h2>
                <p className="text-muted leading-relaxed max-w-lg text-xs">
                  Join our partner ecosystem. Unlock co-selling, revenue sharing up to 20%, and technical enablement on every deal.
                </p>
              </div>
              <Link
                href="/partner-program"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all whitespace-nowrap shadow-md shadow-primary/25 text-sm"
              >
                Partner Program <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center border border-primary/8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mx-auto mb-3 border border-primary/8 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-[11px] text-muted font-bold tracking-tight uppercase mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────── */}
      <section className="py-24 bg-surface/30 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="Loved by Salesforce Teams Worldwide"
            subtitle="How we've helped enterprises achieve CRM success and clean architecture."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-primary/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-light text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center text-xs font-bold text-primary border border-primary/10 shadow-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-light">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─────────────────────── */}
      <section className="py-24 bg-white border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Insights"
            title="Latest from the Cloudiev Blog"
            subtitle="Tips, guides, and CRM diagnostics for professional Salesforce administrators."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  href={`/blog#${post.slug}`}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden border border-primary/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-full"
                >
                  <div className="h-36 bg-gradient-to-br from-primary/8 to-accent/5 flex items-center justify-center border-b border-primary/5">
                    <span className="text-xs font-semibold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex gap-2 text-[11px] text-muted mb-2">
                      <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-light mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-2">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────── */}
      <section className="py-28 bg-surface/30 relative overflow-hidden border-t border-primary/8">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-highlight/8 text-highlight text-xs font-semibold border border-highlight/15 mb-5">
              Transform Your Org Today
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-light leading-tight mb-5 tracking-tight">
              Ready to Optimize Your{" "}
              <span className="gradient-text-purple">Salesforce Architecture</span>?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free Salesforce health diagnostics review with our senior software architects. No billable hours, just concrete insights.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-highlight hover:bg-highlight/90 text-white font-semibold transition-all glow-button text-sm shadow-md"
              >
                Schedule Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/20 text-light hover:bg-surface font-semibold transition-all text-sm animate-pulse"
              >
                Explore Services Stack
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
