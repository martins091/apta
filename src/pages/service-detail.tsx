import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) document.title = `${service.title} — APTA Foundry`;
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-4xl font-serif text-foreground">Service not found</h1>
        <Button asChild className="bg-[#5C1A2E] text-white rounded-none px-8 py-4 h-auto">
          <Link href="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  const currentIdx = SERVICES.findIndex((s) => s.slug === params.slug);
  const nextService = SERVICES[(currentIdx + 1) % SERVICES.length];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-[#5C1A2E] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,122,138,0.3)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,184,75,0.15)_0%,_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fade} custom={0}>
              <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-mono tracking-wide transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Services
              </Link>
            </motion.div>
            <motion.p variants={fade} custom={1} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#E8B84B] mb-5">
              <span className="w-6 h-px bg-[#E8B84B]" /> Service
            </motion.p>
            <motion.h1 variants={fade} custom={2} className="text-4xl md:text-6xl font-serif font-bold mb-5 leading-tight max-w-3xl">
              {service.title}
            </motion.h1>
            <motion.p variants={fade} custom={3} className="text-xl font-sans text-white/80 italic mb-8 max-w-2xl">{service.subtitle}</motion.p>
            <motion.p variants={fade} custom={4} className="text-lg font-sans text-white/70 max-w-2xl leading-relaxed">{service.hero}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              {service.intro.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-lg font-sans text-foreground/85 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Quick facts sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF7F2] border border-border p-8 h-fit space-y-6"
            >
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-3">Who this is for</p>
                <ul className="space-y-2">
                  {service.whoFor.slice(0, 3).map((w, i) => (
                    <li key={i} className="text-sm font-sans text-foreground/80 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B] mt-0.5 shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border pt-6">
                <Button asChild className="w-full bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none py-4 h-auto font-bold text-sm">
                  <Link href="/contact">Lets Talk <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who this is for — full */}
      <section className="py-20 bg-[#0D050A]">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#E8B84B] mb-4">
              <span className="w-6 h-px bg-[#E8B84B]" /> Who it's for
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-white mb-10">
              This service is built for you if…
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whoFor.map((w, i) => (
                <motion.div key={i} variants={fade} custom={i} className="flex items-start gap-4 bg-white/4 border border-white/8 p-5 hover:bg-white/7 transition-colors">
                  <div className="w-8 h-8 bg-[#E8B84B]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#E8B84B]" />
                  </div>
                  <p className="font-sans text-white/80 text-sm leading-relaxed">{w}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#1A7A8A] mb-4">
              <span className="w-6 h-px bg-[#1A7A8A]" /> How it Works
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-foreground mb-12">
              The engagement process
            </motion.h2>
            <div className="relative">
              <div className="hidden md:block absolute left-[2.2rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#E8B84B] via-border to-transparent" />
              <div className="space-y-8">
                {service.process.map((p, i) => (
                  <motion.div key={i} variants={fade} custom={i} className="flex gap-8 items-start">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-[4.4rem] h-[4.4rem] bg-[#5C1A2E] text-white flex items-center justify-center font-mono text-xs tracking-widest uppercase border-4 border-background shadow-lg">
                        {p.step}
                      </div>
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-[#FAF7F2] border-y border-border">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#1A7A8A] mb-4">
              <span className="w-6 h-px bg-[#1A7A8A]" /> What you receive
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Deliverables
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((d, i) => (
                <motion.div key={i} variants={fade} custom={i} className="flex items-start gap-3 bg-white border border-border p-5 group hover:border-[#E8B84B]/40 transition-colors">
                  <div className="w-2 h-2 bg-[#E8B84B] mt-2 shrink-0" />
                  <p className="font-sans text-foreground/85 text-sm leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#1A7A8A] mb-4">
              <span className="w-6 h-px bg-[#1A7A8A]" /> Common Questions
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Frequently asked
            </motion.h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <motion.div key={i} variants={fade} custom={i} className="border border-border p-7 bg-card">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next service teaser */}
      <section className="py-16 bg-[#FAF7F2] border-t border-border">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1">Explore another service</p>
              <Link href={`/services/${nextService.slug}`} className="text-2xl font-serif font-bold text-foreground hover:text-[#5C1A2E] transition-colors flex items-center gap-2 group">
                {nextService.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none px-8 py-4 h-auto font-bold">
                <Link href="/contact">Let's Talk <Phone className="w-3.5 h-3.5 ml-1.5 inline" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-[#5C1A2E]/30 text-[#5C1A2E] hover:bg-[#5C1A2E]/5 rounded-none px-8 py-4 h-auto">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
