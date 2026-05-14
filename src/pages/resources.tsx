import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Resources() {
  useEffect(() => {
    document.title = "Resources — APTA Foundry";
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      category: "AI Governance",
      title: "Drafting an Acceptable Use Policy for Generative AI",
      date: "October 12, 2024",
      readTime: "6 min read"
    },
    {
      category: "US Privacy Law",
      title: "What the CPRA's Latest Regulations Mean for B2B Startups",
      date: "September 28, 2024",
      readTime: "8 min read"
    },
  
    {
      category: "GDPR",
      title: "Demystifying Data Transfer Impact Assessments (DTIAs)",
      date: "July 02, 2024",
      readTime: "10 min read"
    },
  
    {
      category: "US Privacy Law",
      title: "Navigating Health Data Outside of HIPAA",
      date: "May 05, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl font-sans text-primary-foreground/80 max-w-2xl mx-auto">
            Practical guidance on privacy, AI governance, and compliance strategy.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Free Downloads</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Featured Guides</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Breaking Into Privacy: The 2026 Career Guide",
              "B2B SaaS GDPR Compliance Checklist",
              "5 Questions to Ask Before Hiring a Privacy Consultant"
            ].map((guide, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-primary p-8 relative group"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-8 pr-4">{guide}</h3>
                <Button variant="outline" className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none group-hover:border-accent transition-colors">
                  Download PDF
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-card border border-card-border p-6 group hover:border-secondary/50 transition-colors cursor-pointer flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-mono text-xs uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <div className="mt-auto pt-6 flex items-center justify-between text-muted-foreground font-mono text-xs uppercase tracking-wider border-t border-border">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 h-auto font-sans">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif mb-6">Stay ahead of the regulators.</h2>
          <p className="text-lg font-sans text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join 2,000+ executives and operators who receive our monthly breakdown of privacy law changes and implementation strategies. No spam, ever.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="text" 
              placeholder="First Name" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none h-14"
              required
            />
            <Input 
              type="email" 
              placeholder="Email Address" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none h-14"
              required
            />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 whitespace-nowrap font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
