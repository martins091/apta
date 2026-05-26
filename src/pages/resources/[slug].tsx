import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, Clock, Camera } from "lucide-react";

const API_URL = 'https://apta-server.onrender.com/api';

export default function ArticleDetail() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    async function loadArticle() {
      try {
        const response = await fetch(`${API_URL}/articles/${params.slug}`);
        if (!response.ok) {
          if (response.status === 404) setArticle(null);
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();
        setArticle(data);
        document.title = `${data.title} — APTA Foundry`;
      } catch (error) {
        console.error('Error:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
    window.scrollTo(0, 0);
  }, [params.slug]);

  // Helper function to render markdown content with basic formatting
  const renderContent = (content) => {
    if (!content) return null;
    
    // Split by double newlines for paragraphs
    const paragraphs = content.split(/\n\n+/);
    
    return paragraphs.map((paragraph, idx) => {
      // Check for headers (## Heading)
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">{paragraph.slice(3)}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-xl font-serif font-semibold mt-6 mb-3 text-foreground">{paragraph.slice(4)}</h3>;
      }
      
      // Check for bullet points
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const lines = paragraph.split('\n');
        const items = lines.filter(line => line.startsWith('- ')).map(line => line.slice(2));
        if (items.length > 0) {
          return (
            <ul key={idx} className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        }
      }
      
      // Check for numbered lists
      if (paragraph.match(/^\d+\./m)) {
        const lines = paragraph.split('\n');
        const items = lines.filter(line => line.match(/^\d+\./)).map(line => line.replace(/^\d+\.\s*/, ''));
        if (items.length > 0) {
          return (
            <ol key={idx} className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          );
        }
      }
      
      // Regular paragraph
      return <p key={idx} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-4xl font-serif text-foreground">Article not found</h1>
        <p className="text-muted-foreground">The article you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-[#5C1A2E] text-white rounded-none px-8 py-4 h-auto">
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Category and Title */}
      <section className="bg-primary text-primary-foreground pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 text-primary-foreground hover:bg-primary-foreground/10 rounded-none pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-mono text-xs uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Article Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70 font-mono text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            {/* Author Bio Section with Profile Picture */}
            {article.author && article.author.name && (
              <div className="flex items-center gap-4 p-5 bg-primary-foreground/10 rounded-xl mb-8 border border-primary-foreground/20">
                {/* Author Profile Picture */}
                {article.author.profileImageUrl && !imageError ? (
                  <img 
                    src={`https://apta-server.onrender.com${article.author.profileImageUrl}`}
                    alt={article.author.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-accent" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-serif font-bold text-white text-lg">
                    {article.author.name}
                  </p>
                  {article.author.role && (
                    <p className="text-sm text-primary-foreground/70">
                      {article.author.role}
                    </p>
                  )}
                  <p className="text-xs text-primary-foreground/50 mt-1">
                    APTA Foundry Contributor
                  </p>
                </div>
              </div>
            )}
            
            {/* Featured Image */}
            {article.featuredImage && (
              <div className="rounded-xl overflow-hidden mb-8 shadow-xl">
                <img 
                  src={`https://apta-server.onrender.com${article.featuredImage}`}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Excerpt as pull quote */}
          {article.excerpt && (
            <div className="mb-10 pb-6 border-b border-border">
              <p className="text-xl font-serif italic text-secondary/80 leading-relaxed">
                "{article.excerpt}"
              </p>
            </div>
          )}
          
          {/* Main Content */}
          <div className="prose prose-lg prose-headings:font-serif prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-secondary max-w-none">
            {renderContent(article.content)}
          </div>
          
          {/* Author Signature Section with Profile Picture at Bottom */}
          {article.author && article.author.name && (
            <div className="mt-16 pt-8 border-t-2 border-border">
              <div className="bg-muted/20 rounded-xl p-6">
                <div className="flex items-center gap-5">
                  {/* Author Profile Picture (bottom) */}
                  {article.author.profileImageUrl && !imageError ? (
                    <img 
                      src={`https://apta-server.onrender.com${article.author.profileImageUrl}`}
                      alt={article.author.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center';
                          fallback.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-secondary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
                          parent.appendChild(fallback);
                          e.target.style.display = 'none';
                        }
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-serif text-2xl font-bold">
                        {article.author.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <p className="font-serif font-bold text-foreground text-xl">
                      {article.author.name}
                    </p>
                    {article.author.role && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {article.author.role}
                      </p>
                    )}
                    <div className="flex gap-3 mt-3">
                      <Button variant="outline" size="sm" className="rounded-full text-xs" asChild>
                        <Link href="/resources">More from this author →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Share Section */}
          <div className="mt-12 pt-6 text-center border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} APTA Foundry. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}