"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Compass,
  Cpu,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  { year: "2022", title: "Founded", description: "Cloudiev was founded with a mission to build best-in-class Salesforce AppExchange products and consult enterprise orgs." },
  { year: "2023", title: "First Product Launch", description: "CloudSync Pro launched on AppExchange and reached 100 customers, establishing our deep technical reputation." },
  { year: "2024", title: "ISV Partner & Services Expansion", description: "Achieved Salesforce ISV Partner status and expanded into high-end Custom Development, Integrations, and multi-cloud setups." },
  { year: "2025", title: "500+ Customers & Summit Clients", description: "Crossed 500 product customers and secured over 50 enterprise consulting contracts across 30+ countries." },
  { year: "2026", title: "AI-Led Transformation (Agentforce)", description: "Building autonomous AI Agentforce agents and custom LWC blueprints for state-of-the-art corporate environments." },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-Founder", bio: "15+ years in enterprise SaaS and CRM architecture. Former Salesforce product lead." },
  { name: "Emily Zhang", role: "CTO & Co-Founder", bio: "Ex-Google engineer. Salesforce Certified Technical Architect (CTA) & Platform Developer II." },
  { name: "Carlos Rivera", role: "VP of Services & Delivery", bio: "Built and scaled CRM systems for Fortune 500 brands. Expert in MuleSoft and ERP connectivity." },
  { name: "Sophia Johnson", role: "VP of Customer Success", bio: "10+ years helping enterprise divisions adopt Salesforce and maximize CRM licensing ROI." },
];

const values = [
  { icon: <Target className="w-6 h-6" />, title: "Outcome Obsessed", description: "We deliver concrete business outcomes and platform blueprints, not endless billable consulting hours." },
  { icon: <Shield className="w-6 h-6" />, title: "Security Always", description: "Every custom trigger, LWC component, and AppExchange release is built to exceed strict Salesforce security standards." },
  { icon: <Compass className="w-6 h-6" />, title: "CRM Optimization", description: "We believe in clean data architecture and using standard native configurations first to minimize maintenance." },
  { icon: <Cpu className="w-6 h-6" />, title: "Technical Excellence", description: "Our team consists of certified architects and developers capable of executing complex integrations." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Cloudiev"
        subtitle="We are Salesforce-native technical architects building premium products and consulting enterprise orgs for ultimate growth."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-350"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/8 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-light mb-3">Our Mission</h3>
              <p className="text-muted leading-relaxed text-sm">
                To build high-performance, secure AppExchange applications and deliver elite custom development and integration services that solve real bottlenecks for Salesforce divisions without bloat or operational downtime.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 border border-accent/5 hover:border-accent/20 hover:shadow-xl transition-all duration-350"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 border border-accent/8 shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-light mb-3">Our Vision</h3>
              <p className="text-muted leading-relaxed text-sm">
                To become the most trusted hybrid partner in the Salesforce ecosystem — globally renowned both for out-of-the-box AppExchange software and high-speed enterprise consulting that drives CRM adoption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface/50 border-y border-primary/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="From Product Builders to Ecosystem Leader"
            subtitle="How we've scaled both our software products and consulting lines of business."
          />
          <div className="space-y-8 mt-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 animate-fade"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/15 shadow-sm">
                    <span className="text-sm font-bold gradient-text">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-light">{item.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="How We Work"
            subtitle="The strict engineering and operational standards that dictate our consulting deliverables and application code."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 text-center border border-primary/8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/8 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-light mb-2">{v.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface/50 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Meet the Architects Behind Cloudiev"
            subtitle="Our leadership team consists of senior technical consultants holding multiple advanced Salesforce credentials."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 text-center border border-primary/8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 border border-primary/10 shadow-inner">
                  <span className="text-2xl font-black gradient-text">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-light">{member.name}</h3>
                <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-xs text-muted leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-primary/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-light mb-4 tracking-tight">
            Ready to Partner with Experts?
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Whether you want to implement custom Salesforce Lightning components, deploy autonomous AI agents, or connect a legacy ERP, our certified architects are ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-highlight hover:bg-highlight/90 text-white font-semibold transition-all glow-button text-sm shadow-md"
            >
              Book Strategic CRM Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/20 text-light hover:bg-surface font-semibold transition-all text-sm"
            >
              Explore Services Stack
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
