"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  RefreshCw,
  FileText,
  BarChart3,
  Check,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { products, getProduct } from "@/data/products";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  RefreshCw: <RefreshCw className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
};

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-light font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  const relatedProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-[100px]" style={{ backgroundColor: `${product.color}15` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-muted mb-6">
            <Link href="/" className="hover:text-light transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-light transition-colors">Products</Link>
            <span className="mx-1">/</span>
            <span className="text-light">{product.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${product.color}20`, color: product.color }}
              >
                {iconMap[product.icon]}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted max-w-xl mb-6">{product.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button"
                >
                  Install on AppExchange <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-light hover:bg-primary/10 font-medium transition-all"
                >
                  Contact for Enterprise
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="rounded-xl bg-gradient-to-br from-surface to-dark border border-primary/10 p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${product.color}15`, color: product.color }}
                  >
                    {iconMap[product.icon]}
                  </div>
                  <p className="text-sm text-muted">{product.name} Dashboard</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Features"
            title={`Everything You Need in ${product.name}`}
            subtitle="Built for Salesforce teams who demand reliability, security, and performance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-light mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Up and Running in 3 Steps"
            subtitle="No consultants, no custom code, no lengthy implementations."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {product.steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold gradient-text">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-light mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Screenshots"
            title="See It in Action"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {["Dashboard Overview", "Configuration Panel", "Sync Monitor", "Analytics View"].map(
              (label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl bg-gradient-to-br from-surface to-dark border border-primary/10 p-8 aspect-video flex items-center justify-center"
                >
                  <p className="text-sm text-muted">{label}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Pricing"
            title={`${product.name} Pricing`}
            subtitle="Start free and scale as you grow. All plans include AppExchange security."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.pricing.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl p-6 ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-primary/20 to-surface border-2 border-primary/40"
                    : "glass"
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block text-xs font-medium text-primary mb-2">Most Popular</span>
                )}
                <h3 className="text-lg font-semibold text-light">{tier.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-3xl font-bold text-light">{tier.price}</span>
                  {tier.period && <span className="text-muted text-sm">{tier.period}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.name === "Enterprise" ? "/contact" : "#"}
                  className={`block text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-primary/30 text-light hover:bg-primary/10"
                  }`}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-3">
            {product.faqs.map((faq) => (
              <FAQ key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="More Products"
            title="Explore Related Products"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${p.color}20`, color: p.color }}
                >
                  {iconMap[p.icon]}
                </div>
                <h3 className="text-xl font-semibold text-light mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Ready to Get Started with {product.name}?
          </h2>
          <p className="text-muted mb-8">
            Talk to our team about enterprise pricing, custom requirements, or
            schedule a personalized demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button"
            >
              Contact Sales <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
