"use client";

import Link from "next/link";
import { Cloud, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const cols = [
  {
    title: "Products",
    links: [
      { href: "/products/cloudsync-pro", label: "CloudSync Pro" },
      { href: "/products/formflow", label: "FormFlow" },
      { href: "/products/reportiq", label: "ReportIQ" },
      { href: "/products", label: "All Products" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Consulting & Strategy" },
      { href: "/services", label: "Implementation" },
      { href: "/services", label: "Development & APIs" },
      { href: "/services", label: "All Services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/partner-program", label: "Partner Program" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/pricing", label: "Pricing Table" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-12 pb-12 border-b border-primary/8">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                <Cloud className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="text-lg font-bold text-light tracking-tight">
                Cloud<span className="text-primary">iev</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5 max-w-[260px]">
              Certified Salesforce Partner building enterprise-grade AppExchange products and elite consulting solutions.
            </p>
            <div className="space-y-2.5 text-sm text-muted">
              <a href="mailto:info@cloudiev.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" /> info@cloudiev.com
              </a>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" /> +1 (555) 012-3456
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" /> San Francisco, CA
              </span>
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h4 className="text-xs font-semibold text-light uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-light uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-muted mb-4">Salesforce insights, strategy deep-dives, and updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-3.5 py-2 rounded-lg bg-white border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/40 transition-colors shadow-sm"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <TwitterIcon />, label: "Twitter" },
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <FacebookIcon />, label: "Facebook" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white border border-primary/12 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Cloudiev, Inc. All rights reserved.</p>
          <p>Salesforce® and AppExchange® are trademarks of Salesforce, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
