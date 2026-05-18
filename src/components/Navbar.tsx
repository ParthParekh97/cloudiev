"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Cloud, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      { href: "/products/cloudsync-pro", label: "CloudSync Pro", desc: "Real-time org-to-org sync" },
      { href: "/products/formflow", label: "FormFlow", desc: "No-code form builder" },
      { href: "/products/reportiq", label: "ReportIQ", desc: "Advanced analytics" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services", label: "Salesforce Consulting", desc: "Strategy & CRM audits" },
      { href: "/services", label: "Implementation & Setup", desc: "Tailored multi-cloud setup" },
      { href: "/services", label: "Development & Integration", desc: "LWC, Apex, APIs & MuleSoft" },
      { href: "/services", label: "Agentforce & AI solutions", desc: "Autonomous AI agents" },
      { href: "/services", label: "Managed Services & Support", desc: "Certified admin hours on tap" },
    ],
  },
  { label: "Partner Program", href: "/partner-program" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
              <Cloud className="text-white w-[18px] h-[18px]" />
            </div>
            <span className="text-lg font-bold text-light tracking-tight">
              Cloud<span className="text-primary">iev</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-muted hover:text-light rounded-md hover:bg-surface transition-colors">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-primary/10 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-4 py-3 hover:bg-surface transition-colors group"
                          >
                            <span className="text-sm font-medium text-light group-hover:text-primary transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-muted mt-0.5">{child.desc}</span>
                          </Link>
                        ))}
                        <div className="border-t border-primary/8 px-4 py-2.5">
                          <Link href={link.href} className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            View all {link.label.toLowerCase()} →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-muted hover:text-light rounded-md hover:bg-surface transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-muted hover:text-light transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-highlight hover:bg-highlight/90 text-white text-sm font-semibold transition-all glow-button"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-light hover:bg-surface transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-primary/8 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-muted hover:text-light hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-2.5 rounded-lg bg-highlight text-white text-sm font-semibold glow-button"
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
