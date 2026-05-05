import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, CheckCircle, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  useEffect(() => {
    document.title = "About — APTA Foundry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Story & Credentials</h1>
          <p className="text-xl font-sans text-primary-foreground/80 max-w-2xl mx-auto">
            Building the bridge between legal requirements and engineering realities.
          </p>
        </div>
      </section>

      {/* Two Column Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed"
            >
              <h2 className="text-4xl font-serif text-foreground mb-8">The compliance gap is widening.</h2>
              <p>
                In the early days of GDPR, companies could get by with a copied privacy policy and a generic cookie banner. Today, with dozens of active state laws, AI regulations, and aggressive enforcement, the stakes are existential.
              </p>
              <p>
                APTA Foundry was founded to bridge the gap between outside counsel—who tell you what the law says—and your engineering and product teams—who actually have to build the systems. 
              </p>
              <p>
                We don't just write memos. We build data maps, construct deletion workflows, run vendor risk assessments, and establish AI governance boards. We are the operators you call when you need to turn compliance theory into product reality.
              </p>
              <div className="pt-6">
                <img src={`${import.meta.env.BASE_URL}brand/apta-logo.png`} alt="APTA Foundry" className="h-16 w-auto opacity-80" />
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative aspect-square"
            >
              <div className="absolute inset-4 border border-accent z-0 translate-x-4 translate-y-4"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/team.png`} 
                alt="The APTA Foundry Team" 
                className="object-cover w-full h-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Our Principles</p>
            <h2 className="text-4xl font-serif text-foreground">How We Operate</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Clarity Over Complexity", desc: "We translate obscure legal requirements into clear, actionable engineering specs. No 50-page memos full of 'it depends'." },
              { icon: BrainCircuit, title: "Independence", desc: "We aren't trying to sell you an expensive SaaS compliance tool. Our advice is vendor-agnostic and tailored strictly to your needs." },
              { icon: CheckCircle, title: "Practicality", desc: "Risk can never be zero. We help you balance business velocity with defensible compliance postures. Perfect is the enemy of shipped." },
              { icon: BookOpen, title: "Rigor", desc: "We stay ahead of the regulatory curve so you don't have to. When the FTC issues new guidance, we already know what it means for your product." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-none">
                    <value.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif mb-16">Professional Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Fellow of Information Privacy", badge: "FIP", year: "2023" },
              { title: "Certified Info Privacy Pro", badge: "CIPP/US", year: "2019" },
              { title: "Certified Info Privacy Pro", badge: "CIPP/E", year: "2020" },
              { title: "AI Governance Pro", badge: "AIGP", year: "2024" }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 border-2 border-accent rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-xl">{cert.badge}</span>
                </div>
                <p className="font-sans text-sm text-primary-foreground/80 mb-2">{cert.title}</p>
                <p className="font-mono text-xs text-accent">Est. {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-background py-24 text-center border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Discuss your compliance needs.</h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-12 py-6 text-xl h-auto shadow-xl shadow-accent/20">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
