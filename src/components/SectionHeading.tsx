"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wide uppercase mb-4 border border-primary/12">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-light tracking-tight mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
