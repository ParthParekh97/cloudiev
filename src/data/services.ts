export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "salesforce-consulting",
    name: "Salesforce Consulting & Strategy",
    tagline: "Align your CRM strategy with your business vision — built for performance and scale.",
    description:
      "Our Salesforce Consulting & Strategy service helps you untangle complex business processes, audit your existing CRM performance, and build a scalable roadmap designed to maximize your ROI. From workflow optimization to high-level system diagnostics, our certified experts provide actionable guidance.",
    icon: "Compass",
    color: "#0176D3",
    benefits: [
      { title: "CRM Health Audits", description: "Deep-dive diagnostics into your Salesforce architecture, security settings, and database health." },
      { title: "Business Process Mapping", description: "Align your organizational workflows with industry-leading Salesforce best practices." },
      { title: "Scalable Roadmapping", description: "A detailed, phased timeline mapping out migrations, features, and platform expansions." },
      { title: "ROI Maximization", description: "Identify and eliminate redundant licenses, underutilized features, and process bottlenecks." },
    ],
    process: [
      { step: "01", title: "Discovery & Diagnostics", description: "We run automated and manual health audits of your Salesforce org to identify immediate improvement areas." },
      { step: "02", title: "Strategy Formulation", description: "We map out optimized workflows, user journeys, and recommend clean platform architectures." },
      { step: "03", title: "Roadmap Delivery", description: "You receive a comprehensive, phased deployment plan with estimated efforts and ROI impacts." },
    ],
    faqs: [
      { question: "What does a Salesforce Health Check include?", answer: "Our health check evaluates your security settings, apex code coverage, governor limit usage, data storage, redundant fields, and overall system performance." },
      { question: "How long does a typical consulting engagement take?", answer: "Strategic consulting projects range from 2 to 6 weeks depending on your current Salesforce footprint and the size of your organization." },
    ],
  },
  {
    slug: "implementation-customization",
    name: "Implementation & Customization",
    tagline: "Quick, seamless, and tailored setups of Salesforce Clouds to drive rapid adoption.",
    description:
      "Deploying Salesforce shouldn't take months of uncertainty. We deliver rapid, seamless setups of Sales Cloud, Service Cloud, Marketing Cloud, and Experience Cloud tailored exactly to your unique business operations. We prioritize clean configuration over excessive custom code for ultimate stability.",
    icon: "Sliders",
    color: "#06A59A",
    benefits: [
      { title: "Multi-Cloud Expertise", description: "Seamless setups across Sales, Service, Experience, Health, and Financial Services Clouds." },
      { title: "Rapid Time-to-Value", description: "Our standardized deployment frameworks get your teams live on Salesforce in record time." },
      { title: "Adoption-First Design", description: "Intuitive user interfaces, streamlined page layouts, and workflows built to delight users." },
      { title: "Standard Configuration Focus", description: "Using native tools like Flow Builder to minimize future platform maintenance costs." },
    ],
    process: [
      { step: "01", title: "Process Definition", description: "We capture your lead-to-cash, ticketing, or partner journeys in high-fidelity workflows." },
      { step: "02", title: "Configuration & Styling", description: "Our engineers construct fields, layout pages, and configure lightning pages to match your brand." },
      { step: "03", title: "Testing & User Training", description: "We validate setups, migrate baseline data, and conduct role-specific training for high user adoption." },
    ],
    faqs: [
      { question: "Which Salesforce Clouds do you support?", answer: "We support Sales Cloud, Service Cloud, Experience Cloud (Communities), Marketing Cloud (and Account Engagement/Pardot), Health Cloud, and custom platform apps." },
      { question: "Do you focus on out-of-the-box features or custom development?", answer: "We always advocate for out-of-the-box configurations first to keep your platform low-maintenance and easily upgradable, adding custom code only where absolutely necessary." },
    ],
  },
  {
    slug: "custom-development-integration",
    name: "Custom Development & Integration",
    tagline: "Extend Salesforce beyond standard capabilities and integrate seamlessly with any external system.",
    description:
      "For organizations with complex requirements, we build custom Lightning Web Components (LWC), secure Apex integrations, and leverage middleware like MuleSoft to connect Salesforce with your ERP, payment gateways, SQL databases, and internal APIs.",
    icon: "Cpu",
    color: "#9B59B6",
    benefits: [
      { title: "Advanced LWC & Apex", description: "High-performance Lightning Web Components and clean, bulkified Apex triggers and classes." },
      { title: "Enterprise Integrations", description: "Connect Salesforce with SAP, NetSuite, legacy databases, Slack, and third-party APIs." },
      { title: "API-Led Connectivity", description: "Leverage MuleSoft, secure webhooks, or custom REST/SOAP integrations." },
      { title: "Governor Limit Protection", description: "Architected to run efficiently and remain highly performant within Salesforce limitations." },
    ],
    process: [
      { step: "01", title: "API & Data Mapping", description: "We analyze endpoints, define payload schemas, and map out secure bi-directional data pipelines." },
      { step: "02", title: "Development & Testing", description: "We write robust Apex, develop LWCs, and build comprehensive unit tests with >85% code coverage." },
      { step: "03", title: "Secure Deployment", description: "We deploy changes securely via CI/CD pipelines and configure monitoring dashboards for live integrations." },
    ],
    faqs: [
      { question: "How do you ensure integration security?", answer: "We use secure OAuth 2.0 authentication, named credentials, secure token exchange, and transit-level encryption (TLS 1.3) for all outbound and inbound calls." },
      { question: "Can you connect Salesforce to on-premise legacy databases?", answer: "Yes. Using secure gateways, MuleSoft runtime, or secure VPN connections, we can safely sync data with on-premise systems without exposing them publicly." },
    ],
  },
  {
    slug: "agentforce-ai",
    name: "Agentforce & AI Solutions",
    tagline: "Deploy autonomous AI agents in your org to automate support, sales, and analytics.",
    description:
      "Unlock the future of Salesforce with Agentforce. We build, configure, and train autonomous AI agents to interact with your customers and staff, streamline case resolutions, automate email drafts, and trigger intelligent business actions based on real-time CRM data.",
    icon: "Sparkles",
    color: "#E28743",
    benefits: [
      { title: "Autonomous AI Agents", description: "Implement Agentforce Service Agents capable of handling complex customer requests 24/7." },
      { title: "Einstein Copilot Customization", description: "Train and extend Einstein Copilot to complete standard and custom actions inside your workspace." },
      { title: "Data Cloud Integration", description: "Harmonize structured and unstructured enterprise data to power hyper-contextual AI logic." },
      { title: "Predictive Analytics", description: "Deploy custom machine learning models within CRM workflows to forecast churn and sales." },
    ],
    process: [
      { step: "01", title: "AI Action Mapping", description: "We identify standard CRM tasks suited for AI automation and define strict execution guardrails." },
      { step: "02", title: "Prompt & Agent Training", description: "We configure Agentforce agents, connect them to relevant knowledge bases, and write system prompts." },
      { step: "03", title: "Safety & Beta Testing", description: "We run strict security checks, test edge-case prompts, and launch in beta to ensure error-free accuracy." },
    ],
    faqs: [
      { question: "What is Agentforce?", answer: "Agentforce is Salesforce's next-generation platform for building autonomous AI agents that can carry out tasks across sales, service, and marketing with minimal human intervention." },
      { question: "Is my corporate data shared with public AI models?", answer: "No. Through Salesforce's Trust Layer, all customer data is fully masked, anonymized, and never used to train public LLM models." },
    ],
  },
  {
    slug: "managed-services",
    name: "Salesforce Managed Services & Support",
    tagline: "Certified Salesforce administrators and developers on tap, whenever you need them.",
    description:
      "Avoid the high cost of recruiting full-time admins. Our Salesforce Managed Services provide you with a dedicated team of certified administrators, developers, and QA engineers for day-to-day configuration, bug fixing, report generation, and release support.",
    icon: "ShieldAlert",
    color: "#1E88E5",
    benefits: [
      { title: "Dedicated SLA Support", description: "Fast, guaranteed response times starting at under 4 hours for critical issues." },
      { title: "Release Management", description: "Stay ahead of Salesforce's tri-annual updates with proactive testing and impact reviews." },
      { title: "Routine Administration", description: "On-demand user onboarding, report and dashboard building, permission sets, and page updates." },
      { title: "Continual Optimization", description: "Proactive monthly recommendations to declutter code, clean up automation, and improve speeds." },
    ],
    process: [
      { step: "01", title: "Onboarding & Audit", description: "We audit your org, document custom features, and connect our secure support ticket portal." },
      { step: "02", title: "Routine Delivery", description: "Your team submits admin/dev requests, and our certified engineers deliver them under strict SLA timelines." },
      { step: "03", title: "Monthly Review", description: "We present a comprehensive report on updates shipped, outstanding tasks, and platform health metrics." },
    ],
    faqs: [
      { question: "How does the ticket submission process work?", answer: "You can submit requests via our support email, a dedicated client portal, or directly inside your custom Slack/Teams channel." },
      { question: "Are unused hours carried over to the next month?", answer: "Yes, depending on your selected tier, a portion of unused managed services hours can roll over into the following month." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
