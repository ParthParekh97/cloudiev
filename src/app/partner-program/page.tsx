"use client";

import { motion } from "framer-motion";
import {
  Star,
  TrendingUp,
  BookOpen,
  Award,
  Check,
  Zap,
  Globe,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const tiers = [
  {
    name: "Registered",
    color: "#7A90B8",
    requirements: ["Sign partnership agreement", "Complete onboarding"],
    benefits: [
      "Partner portal access",
      "Product training materials",
      "Co-branded marketing kit",
      "Community support channel",
    ],
  },
  {
    name: "Silver",
    color: "#C0C0C0",
    requirements: ["3+ closed deals", "$50K+ annual revenue", "1 certified consultant"],
    benefits: [
      "Everything in Registered",
      "10% revenue share",
      "Lead sharing",
      "Quarterly business reviews",
      "Priority support queue",
    ],
  },
  {
    name: "Gold",
    color: "#FFD700",
    requirements: ["10+ closed deals", "$150K+ annual revenue", "3 certified consultants"],
    benefits: [
      "Everything in Silver",
      "15% revenue share",
      "Co-selling with Cloudiev AEs",
      "Joint webinars & events",
      "Dedicated partner manager",
      "Early access to new products",
    ],
    highlighted: true,
  },
  {
    name: "Platinum",
    color: "#E5E4E2",
    requirements: ["25+ closed deals", "$500K+ annual revenue", "5+ certified consultants"],
    benefits: [
      "Everything in Gold",
      "20% revenue share",
      "Executive sponsor",
      "Custom integrations",
      "AppExchange co-listing",
      "Annual partner summit invitation",
      "Joint case studies",
    ],
  },
];

const benefits = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Revenue Sharing", description: "Earn up to 20% recurring revenue on every deal you close with Cloudiev products." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Technical Enablement", description: "Access training, certifications, and sandbox environments to master our products." },
  { icon: <Award className="w-6 h-6" />, title: "Co-Selling", description: "Our account executives work alongside your team to close enterprise deals." },
  { icon: <Globe className="w-6 h-6" />, title: "Market Reach", description: "Get listed in our partner directory and featured in our marketing campaigns." },
  { icon: <Zap className="w-6 h-6" />, title: "Early Access", description: "Be the first to see new features, products, and API capabilities before public launch." },
  { icon: <Award className="w-6 h-6" />, title: "Certification Program", description: "Earn Cloudiev Partner certifications that validate your team's expertise." },
];

const testimonials = [
  { name: "David Kim", role: "Managing Partner", company: "Stratos Consulting", quote: "Partnering with Cloudiev doubled our Salesforce practice revenue in 12 months. Their products sell themselves — we just make the introductions." },
  { name: "Laura Martinez", role: "CEO", company: "CloudBridge Solutions", quote: "The co-selling support is phenomenal. Cloudiev's AEs join our calls, handle technical demos, and help us close deals faster than ever." },
];

export default function PartnerProgramPage() {
  return (
    <>
      <PageHero
        title="Partner Program"
        subtitle="Join our growing ecosystem of Salesforce consultants, integrators, and resellers. Earn revenue, grow expertise, and deliver more value to your clients."
        breadcrumbs={[{ label: "Partner Program" }]}
      />

      {/* What It Means */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <SectionHeading
                label="Salesforce Ecosystem"
                title="What Being a Partner Means"
                center={false}
              />
              <p className="text-muted leading-relaxed mb-4">
                As a Cloudiev partner, you become an extension of our team. You
                gain the tools, training, and support to recommend, implement,
                and resell our AppExchange products to your Salesforce clients.
              </p>
              <p className="text-muted leading-relaxed">
                Whether you&apos;re a boutique consultancy or a global SI, our
                partner program is designed to help you grow your Salesforce
                practice while delivering proven, enterprise-grade solutions.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Active Partners" },
                { value: "$2M+", label: "Partner Revenue" },
                { value: "95%", label: "Renewal Rate" },
                { value: "4.9/5", label: "Partner Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Benefits"
            title="Why Partner with Cloudiev"
            subtitle="Everything you need to succeed — from revenue sharing to technical enablement."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-light mb-2">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partnership Tiers"
            title="Choose Your Path"
            subtitle="Progress through tiers as your partnership grows. Each tier unlocks new benefits and higher revenue shares."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
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
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5" style={{ color: tier.color }} />
                  <h3 className="text-xl font-bold text-light">{tier.name}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">Requirements</p>
                  <ul className="space-y-1.5">
                    {tier.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: tier.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">Benefits</p>
                  <ul className="space-y-1.5">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partner Stories"
            title="What Our Partners Say"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-light leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-light">{t.name}</p>
                <p className="text-xs text-muted">{t.role}, {t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Apply"
            title="Become a Cloudiev Partner"
            subtitle="Fill out the form below and our partnerships team will be in touch within 2 business days."
          />
          <form
            className="glass rounded-xl p-6 md:p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-light mb-1.5">First Name</label>
                <input className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-light mb-1.5">Last Name</label>
                <input className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-light mb-1.5">Company Name</label>
              <input className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-light mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-light mb-1.5">Salesforce Certifications</label>
              <input placeholder="e.g., Admin, Platform Developer I" className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-light mb-1.5">Why do you want to partner with Cloudiev?</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
