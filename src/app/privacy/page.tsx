import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: May 3, 2026"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm max-w-none">
          <div className="space-y-8 text-muted text-sm leading-relaxed">
            {[
              {
                title: "1. Information We Collect",
                body: "We collect information you provide directly (name, email, company) when you sign up, contact us, or use our products. We also collect usage data, log data, and cookies to improve our services.",
              },
              {
                title: "2. How We Use Your Information",
                body: "We use collected information to provide and improve our products, send transactional and marketing communications (with your consent), respond to inquiries, and comply with legal obligations.",
              },
              {
                title: "3. Salesforce Data",
                body: "Our AppExchange products operate within your Salesforce org. We do not store your Salesforce data on our servers. All processing occurs within the Salesforce platform and is subject to Salesforce's data handling policies.",
              },
              {
                title: "4. Data Sharing",
                body: "We do not sell your personal data. We may share data with trusted service providers who assist in operating our platform, subject to confidentiality agreements. We may disclose data when required by law.",
              },
              {
                title: "5. Data Retention",
                body: "We retain personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting info@cloudiev.com.",
              },
              {
                title: "6. Security",
                body: "We implement industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, and regular security audits. Our products are reviewed under the Salesforce AppExchange Security Review.",
              },
              {
                title: "7. Your Rights",
                body: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at info@cloudiev.com to exercise these rights.",
              },
              {
                title: "8. Cookies",
                body: "We use essential cookies to operate our website and optional analytics cookies to understand usage. You can control cookie preferences through your browser settings.",
              },
              {
                title: "9. Contact",
                body: "For privacy-related questions, contact our team at info@cloudiev.com or write to Cloudiev, San Francisco, CA.",
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
