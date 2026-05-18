"use client";

import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@cloudiev.com", href: "mailto:info@cloudiev.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 012-3456" },
  { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "San Francisco, CA" },
  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon–Fri, 9 AM – 6 PM PST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question about our products, pricing, or partnership program? We'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <form
                className="glass rounded-xl p-6 md:p-8 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text-2xl font-bold text-light mb-2">Send Us a Message</h2>
                <p className="text-sm text-muted mb-6">
                  Fill out the form and our team will get back to you within 1
                  business day.
                </p>
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
                  <label className="block text-sm text-light mb-1.5">Work Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-light mb-1.5">Company</label>
                  <input className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-light mb-1.5">Subject</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="demo">Product Demo</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-light mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your Salesforce environment and what you're looking for..."
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-primary/15 text-light text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-highlight hover:bg-highlight/90 text-white font-medium transition-all glow-button"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-light mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-light hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-light">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-light mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Existing customers can reach our support team at{" "}
                  <a href="mailto:support@cloudiev.com" className="text-primary hover:underline">
                    support@cloudiev.com
                  </a>{" "}
                  for priority assistance.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-light mb-2">Enterprise Inquiries</h3>
                <p className="text-sm text-muted leading-relaxed">
                  For organizations with 1,000+ Salesforce users, custom SLA
                  requirements, or on-premise needs, contact our enterprise team
                  directly at{" "}
                  <a href="mailto:enterprise@cloudiev.com" className="text-primary hover:underline">
                    enterprise@cloudiev.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
