import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";

const API_URL = 'https://apta-server.onrender.com/api';

export default function ArticleDetail() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-muted-foreground">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-4xl font-serif text-foreground">Article not found</h1>
        <Button asChild className="bg-[#5C1A2E] text-white rounded-none px-8 py-4 h-auto">
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 text-primary-foreground hover:bg-primary-foreground/10 rounded-none pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-mono text-xs uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              {article.title}
            </h1>
            
            {/* Article Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70 font-mono text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            {/* Author Bio Section */}
            {article.author && article.author.name && (
              <div className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg mb-8">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-white">
                    {article.author.name}
                  </p>
                  {article.author.role && (
                    <p className="text-sm text-primary-foreground/60">
                      {article.author.role}
                    </p>
                  )}
                </div>
              </div>
            )}
            
            {/* Featured Image */}
            {article.featuredImage && (
              <img 
                src={`https://apta-server.onrender.com${article.featuredImage}`}
                alt={article.title}
                className="w-full rounded-lg mb-8"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="prose prose-lg prose-headings:font-serif prose-p:text-muted-foreground max-w-none">
            {article.content.split('\n').map((paragraph, i) => (
              paragraph.trim() && (
                <p key={i} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            ))}
          </div>
          
          {/* Author Signature at Bottom */}
          {article.author && article.author.name && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-serif text-xl font-bold">
                    {article.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-lg">
                    {article.author.name}
                  </p>
                  {article.author.role && (
                    <p className="text-sm text-muted-foreground">
                      {article.author.role}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    APTA Foundry
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}