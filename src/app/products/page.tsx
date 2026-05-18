"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, FileText, BarChart3, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  RefreshCw: <RefreshCw className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Enterprise-grade Salesforce AppExchange products built to scale. Install in minutes, see results in days."
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`glass rounded-2xl p-8 md:p-10 flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${product.color}20`, color: product.color }}
                  >
                    {iconMap[product.icon]}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-light mb-3">
                    {product.name}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span><strong className="text-light">{f.title}</strong> — {f.description}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-highlight hover:bg-highlight/90 text-white text-sm font-medium transition-all glow-button"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-light hover:bg-primary/10 text-sm font-medium transition-all"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-xl bg-gradient-to-br from-surface to-dark border border-primary/10 p-8 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: `${product.color}15`, color: product.color }}
                      >
                        {iconMap[product.icon]}
                      </div>
                      <p className="text-sm text-muted">Product Screenshot</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Can't Find What You Need?"
            subtitle="We're always building new products. Tell us about your Salesforce challenges and we'll see how we can help."
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button text-lg"
          >
            Talk to Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
