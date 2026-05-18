"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Tips, guides, and insights for Salesforce admins, developers, and decision-makers."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                id={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-light mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
