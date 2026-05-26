import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { ArrowRight, Download, User, BookOpen, Camera } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// API configuration
const API_URL = 'https://apta-server.onrender.com/api';

export default function Resources() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Resources — APTA Foundry";
    window.scrollTo(0, 0);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}/articles`);
      if (!response.ok) throw new Error('Failed to fetch articles');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCareerGuide = () => {
    setLocation('/guide');
  };

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
            {/* Privacy Career Clarity Guide - Featured Card with Button */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary to-primary/90 p-8 relative group cursor-pointer"
              onClick={handleOpenCareerGuide}
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-foreground mb-3 pr-4">Privacy Career Clarity Guide</h3>
              <p className="text-primary-foreground/70 text-sm mb-6 font-sans">
                Before you pick a cert, answer these 10 questions. Interactive workbook with certification breakdowns.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none group-hover:border-accent transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenCareerGuide();
                }}
              >
                Launch Guide →
              </Button>
            </motion.div>

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

          {loading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <Link key={article.id || i} href={`/resources/${article.slug}`}>
                  <motion.div
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
                    
                    {/* Featured Image */}
                    {article.featuredImage && (
                      <div className="mb-4 -mx-6 overflow-hidden">
                        <img 
                          src={`https://apta-server.onrender.com${article.featuredImage}`}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-sans text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    {/* Author Info with Profile Picture */}
                    {article.author && article.author.name && (
                      <div className="mb-4 flex items-center gap-3">
                        {/* Author Profile Picture */}
                        {article.author.profileImageUrl ? (
                          <div className="flex-shrink-0">
                            <img 
                              src={`https://apta-server.onrender.com${article.author.profileImageUrl}`}
                              alt={article.author.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-secondary/30"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                // Show fallback icon if image fails to load
                                const parent = e.target.parentElement;
                                if (parent && !parent.querySelector('.fallback-icon')) {
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center fallback-icon';
                                  fallback.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
                                  parent.appendChild(fallback);
                                  e.target.style.display = 'none';
                                }
                              }}
                            />
                          </div>
                        ) : (
                          /* Fallback icon when no profile image exists */
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-secondary" />
                          </div>
                        )}
                        
                        {/* Author Name & Role */}
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-medium text-foreground truncate">
                            {article.author.name}
                          </span>
                          {article.author.role && (
                            <span className="text-xs text-muted-foreground truncate">
                              {article.author.role}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-6 flex items-center justify-between text-muted-foreground font-mono text-xs uppercase tracking-wider border-t border-border">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
          
          {articles.length > 6 && (
            <div className="mt-16 text-center">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 h-auto font-sans">
                Load More Articles
              </Button>
            </div>
          )}
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