"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-14 overflow-hidden bg-white">
      {/* Background: subtle dot-grid + top gradient glow */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 hero-glow" />
      {/* Accent orbs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-[70px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-muted mb-5 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 opacity-50" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors font-medium">{crumb.label}</Link>
              ) : (
                <span className="text-light font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-light tracking-tight mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-base md:text-lg text-muted max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
