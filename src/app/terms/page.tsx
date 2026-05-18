import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Last updated: May 3, 2026"
        breadcrumbs={[{ label: "Terms of Use" }]}
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted text-sm leading-relaxed">
            {[
              {
                title: "1. Acceptance of Terms",
                body: "By accessing or using Cloudiev's website, products, or services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.",
              },
              {
                title: "2. Use of Products",
                body: "Cloudiev grants you a limited, non-exclusive, non-transferable license to use our AppExchange products in accordance with these terms and the applicable subscription plan. You may not reverse engineer, resell, or sublicense our products.",
              },
              {
                title: "3. Account Responsibilities",
                body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use at info@cloudiev.com.",
              },
              {
                title: "4. Subscription and Billing",
                body: "Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days' notice.",
              },
              {
                title: "5. Acceptable Use",
                body: "You agree not to use our services for unlawful purposes, to transmit malicious code, to interfere with platform integrity, or to exceed usage limits of your subscription plan.",
              },
              {
                title: "6. Intellectual Property",
                body: "All content, trademarks, and software associated with Cloudiev products are owned by Cloudiev or its licensors. These terms do not grant you any ownership rights.",
              },
              {
                title: "7. Limitation of Liability",
                body: "Cloudiev shall not be liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid by you in the 12 months preceding the claim.",
              },
              {
                title: "8. Termination",
                body: "We may terminate or suspend your account for violation of these terms. You may cancel your subscription at any time. Upon termination, your access to paid features will cease at the end of the billing period.",
              },
              {
                title: "9. Governing Law",
                body: "These terms are governed by the laws of the State of California, USA. Any disputes shall be resolved exclusively in courts located in San Francisco County, California.",
              },
              {
                title: "10. Contact",
                body: "For questions about these terms, contact us at info@cloudiev.com.",
              },
            ].map((section) => (
              <div key={section.title} className="glass rounded-xl p-6">
                <h2 className="text-light font-semibold text-base mb-3">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
