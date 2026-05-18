export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "salesforce-data-sync-best-practices",
    title: "5 Best Practices for Salesforce Multi-Org Data Synchronization",
    excerpt:
      "Managing data across multiple Salesforce orgs doesn't have to be painful. Learn the five strategies that enterprise teams use to keep their data consistent, accurate, and audit-ready.",
    date: "2026-04-28",
    readTime: "6 min read",
    category: "Data Management",
  },
  {
    slug: "appexchange-security-review-guide",
    title: "How to Pass the Salesforce AppExchange Security Review on Your First Try",
    excerpt:
      "The AppExchange security review can be daunting. Here's our step-by-step guide covering CRUD/FLS checks, SOQL injection prevention, and everything else you need to pass on the first submission.",
    date: "2026-04-15",
    readTime: "8 min read",
    category: "AppExchange",
  },
  {
    slug: "experience-cloud-forms-guide",
    title: "Building Dynamic Forms in Salesforce Experience Cloud Without Code",
    excerpt:
      "Discover how no-code form builders are transforming the way teams collect data in Experience Cloud portals — with conditional logic, file uploads, and Salesforce-native storage.",
    date: "2026-04-02",
    readTime: "5 min read",
    category: "Experience Cloud",
  },
  {
    slug: "salesforce-reporting-beyond-limits",
    title: "Breaking Through Salesforce Reporting Limits: A Guide for Admins",
    excerpt:
      "Salesforce native reports are powerful — until they're not. Learn how to overcome row limits, join restrictions, and visualization gaps with modern reporting tools.",
    date: "2026-03-20",
    readTime: "7 min read",
    category: "Analytics",
  },
  {
    slug: "isv-partner-program-benefits",
    title: "Why Becoming a Salesforce ISV Partner Was Our Best Business Decision",
    excerpt:
      "From AppExchange listing to enterprise pipeline — here's how the Salesforce ISV Partner program helped us grow from a small startup to serving Fortune 500 companies.",
    date: "2026-03-08",
    readTime: "4 min read",
    category: "Partner Program",
  },
  {
    slug: "zero-downtime-salesforce-deployments",
    title: "Achieving Zero-Downtime Deployments in Multi-Org Salesforce Environments",
    excerpt:
      "Learn deployment strategies that keep your orgs running smoothly during releases — including change sets, unlocked packages, and real-time sync patterns.",
    date: "2026-02-22",
    readTime: "9 min read",
    category: "DevOps",
  },
];
