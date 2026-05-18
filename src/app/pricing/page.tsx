"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { useState } from "react";

export default function PricingPage() {
  const [activeProduct, setActiveProduct] = useState(products[0].slug);
  const product = products.find((p) => p.slug === activeProduct)!;

  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Transparent pricing for every team size. Start free, scale as you grow. All plans include AppExchange security review."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {products.map((p) => (
              <button
                key={p.slug}
                onClick={() => setActiveProduct(p.slug)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeProduct === p.slug
                    ? "bg-primary text-white"
                    : "glass text-muted hover:text-light"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.pricing.map((tier, i) => (
              <motion.div
                key={`${product.slug}-${tier.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                <Link
                  href={tier.name === "Enterprise" ? "/contact" : `/products/${product.slug}`}
                  className={`block text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-primary/30 text-light hover:bg-primary/10"
                  }`}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Pricing Questions"
          />
          <div className="space-y-4">
            {[
              { q: "Can I switch plans at any time?", a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference." },
              { q: "Is there a free trial for paid plans?", a: "Yes, all paid plans come with a 14-day free trial. No credit card required. You get full access to all features during the trial." },
              { q: "Do you offer annual billing?", a: "Yes, annual billing is available at a 20% discount on all plans. Contact our sales team for details." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH transfers, and can issue invoices for annual Enterprise contracts." },
              { q: "Do you offer discounts for nonprofits?", a: "Yes. Qualified nonprofits receive 30% off any plan. Contact us with your organization details to apply." },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-light font-medium mb-1">{faq.q}</h3>
                    <p className="text-sm text-muted">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-muted mb-8">
            For organizations with unique requirements, volume licensing, or
            multi-product bundles, our team can create a custom proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button text-lg"
          >
            Talk to Sales <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
