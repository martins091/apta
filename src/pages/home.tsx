import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Calendar } from "lucide-react";
import {
  ArrowRight, CheckCircle2, ChevronRight,
  Brain, FileSearch, Layers, AlertCircle, Shield, Users, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import NetworkBackground from "@/components/NetworkBackground";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const CYCLING_WORDS = ["Complex.", "Confusing.", "Your Advantage"];

function useCountUp(target: number, duration = 2.2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return { ref, count };
}

function StatNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, count } = useCountUp(target);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordAnim, setWordAnim] = useState<"in" | "out">("in");

  useEffect(() => {
    document.title = "APTA Foundry — Privacy Consulting & AI Governance";
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWordAnim("out");
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % CYCLING_WORDS.length);
        setWordAnim("in");
      }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative h-screen min-h-[640px] flex flex-col justify-center overflow-hidden bg-[#05030A]">
        <div className="absolute inset-0 z-0">
          {/* Rich layered gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_65%_50%,_#180814_0%,_#05030A_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_80%_55%,_rgba(26,100,138,0.35)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_15%_70%,_rgba(92,14,35,0.3)_0%,_transparent_55%)]" />
          <NetworkBackground />
          {/* Edge vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.75)_100%)] pointer-events-none z-10" />
          {/* Bottom fade to next section */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05030A] to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-20 pt-28 pb-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">

            {/* Big bold headline */}
            <motion.h1
              variants={fade}
              custom={0}
              className="text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-serif font-bold leading-[1.05] tracking-tight text-white mb-4"
              style={{ textShadow: "0 4px 40px rgba(0,0,0,0.8)" }}
            >
              Privacy can be&nbsp;
            </motion.h1>

            {/* Cycling word */}
            <motion.div variants={fade} custom={1} className="h-[3.6rem] sm:h-[4.5rem] lg:h-[6rem] overflow-hidden mb-8">
              <span
                key={wordIdx}
                className={`block text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-serif font-bold leading-[1.05] tracking-tight gold-shimmer ${wordAnim === "in" ? "word-in" : "word-out"}`}
              >
                {CYCLING_WORDS[wordIdx]}
              </span>
            </motion.div>

            {/* Warm, human sub-line */}
            <motion.p
              variants={fade}
              custom={2}
              className="text-lg sm:text-xl font-sans text-white/75 max-w-xl leading-relaxed mb-8"
            >
              Apta Foundry helps organizations navigate data privacy, AI governance, and regulatory change with the clarity to act confidently and the intelligence to stay ahead.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fade} custom={3} className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#E8B84B] text-[#3D0F1D] hover:bg-[#F0C968] rounded-none px-7 py-4 text-sm font-bold h-auto shadow-lg shadow-[#E8B84B]/25 hover:shadow-[#E8B84B]/45 hover:scale-[1.02] transition-all duration-200"
              >
                <Link href="/contact">
                  Let's Talk <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/25 text-white hover:bg-white/8 hover:border-white/50 rounded-none px-7 py-4 text-sm h-auto bg-transparent transition-all duration-200"
              >
                <Link href="/services">See How We Help</Link>
              </Button>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50 pointer-events-none">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#E8B84B]/80 to-transparent"
          />
        </div>
      </section>

      {/* ─────────────── TRUST STRIP ─────────────── */}
      <section className="bg-[#0D050A] border-y border-white/6 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 items-center">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30">Trusted by teams across</span>
            {["SaaS", "HealthTech", "FinTech", "AI Companies", "Digital Agencies", "Enterprise"].map((s) => (
              <span key={s} className="text-sm font-sans text-white/45 font-medium">{s}</span>
            ))}
          </div>
        </div>
      </section>

{/* ─────────────── WHAT WE DO (simple intro) ─────────────── */}
<section className="py-28 bg-background">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* Left — photo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="aspect-[4/5] overflow-hidden relative bg-[#1A0A12]">
          <img
            src={`${import.meta.env.BASE_URL}images/headshot.png`}
            alt="Chuma Akana — Founder"
            className="object-cover w-full h-full opacity-90"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D050A]/90 via-[#0D050A]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="w-8 h-[2px] bg-[#E8B84B] mb-3" />
            <h3 className="text-2xl font-serif text-white mb-1">Chuma Akana</h3>
            <p className="font-mono text-xs text-white/55 uppercase tracking-widest">Founder & Lead Consultant</p>
          </div>
        </div>
        <div className="absolute -top-5 -left-5 w-28 h-28 border-l-2 border-t-2 border-[#E8B84B]/35 pointer-events-none" />
        <div className="absolute -bottom-5 -right-5 w-28 h-28 border-r-2 border-b-2 border-[#1A7A8A]/35 pointer-events-none" />
      </motion.div>

      {/* Right — text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.p variants={fade} custom={0} className="text-xs font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-5 flex items-center gap-3">
          <span className="w-6 h-px bg-[#1A7A8A]" /> Why Clients Choose Us
        </motion.p>
        <motion.h2 variants={fade} custom={1} className="text-4xl md:text-5xl font-serif text-foreground mb-7 leading-[1.1]">
          We know trust is the<br />
          <span className="italic text-[#5C1A2E]">foundation of business.</span>
        </motion.h2>
        <motion.p variants={fade} custom={2} className="text-lg font-sans text-muted-foreground leading-relaxed mb-5">
          Whether you're a startup that just got your first enterprise customer asking for a DPA, or a healthcare covered entity navigating HIPAA obligations — we meet you where you are.
        </motion.p>
        <motion.p variants={fade} custom={3} className="text-lg font-sans text-muted-foreground leading-relaxed mb-10">
          No generic advice that goes nowhere. Just a straightforward plan, built with your team, that actually gets done.
        </motion.p>
        <motion.div variants={fade} custom={4}>
          <ul className="space-y-3 mb-10">
            {[
              "We explain every step in plain English",
              "We work alongside your team, not around them",
              "Practical outcomes you can implement immediately",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#E8B84B] shrink-0" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Connected Links */}
        <motion.div variants={fade} custom={5} className="mb-6">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A7A8A]" /> Connect
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/chuma-akana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1A7A8A] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://calendly.com/akanachuma/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1A7A8A] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </motion.div>

        <motion.div variants={fade} custom={6} className="flex flex-wrap gap-4">
          <Button asChild className="bg-[#E8B84B] text-[#3D0F1D] hover:bg-[#F0C968] rounded-none px-7 py-5 h-auto text-sm font-bold shadow-md">
            <Link href="/contact">Let's Talk</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#5C1A2E]/30 text-[#5C1A2E] hover:bg-[#5C1A2E]/5 rounded-none px-7 py-5 h-auto text-sm font-bold">
            <Link href="/services">Our Services</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

    {/* ─────────────── SERVICES ─────────────── */}
<section className="py-28 bg-[#0D050A] relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_#180814_0%,_#0D050A_100%)]" />
  <div className="container mx-auto px-6 lg:px-16 relative z-10">
    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      <motion.p variants={fade} custom={0} className="text-xs font-mono tracking-[0.25em] uppercase text-[#E8B84B] mb-4">
        How we help
      </motion.p>
      <motion.h2 variants={fade} custom={1} className="text-4xl md:text-5xl font-serif text-white mb-5 leading-tight">
        What do you need help with?
      </motion.h2>
      <motion.p variants={fade} custom={2} className="text-lg text-white/55 font-sans leading-relaxed">
        We cover the full spectrum of privacy and data protection — from quick audits to building your entire programme from scratch.
      </motion.p>
    </motion.div>

    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
    >
      {[
        {
          title: "We uncover your privacy risks",
          sub: "Privacy Audit & Gap Analysis",
          desc: "We review everything — your data flows, vendor contracts, consent mechanisms, and policies — and tell you exactly what needs fixing and in what order.",
          href: "/services/privacy-audit",
          icon: FileSearch,
        },
        {
          title: "We help safeguard health data",
          sub: "HIPAA & Health Data",
          desc: "Whether you're a covered entity, a business associate, or a wellness app — we cut through the confusion and tell you exactly what applies to you.",
          href: "/services/hipaa",
          icon: Shield,
        },
        {
          title: "We build your privacy program",
          sub: "Privacy Program Build",
          desc: "From policies and DSAR workflows to staff training and vendor templates. We build the whole thing alongside you, then hand it over properly.",
          href: "/services/program-build",
          icon: Layers,
        },
        {
          title: "We guide your AI strategy",
          sub: "AI Governance Advisory",
          desc: "Using LLMs in your product? We help you understand the risks, write sensible policies, and make sure you're ready for where regulation is heading.",
          href: "/services/ai-governance",
          icon: Brain,
        },
        {
          title: "We train your teams on privacy",
          sub: "Training & Workshops",
          desc: "Live, tailored sessions for product managers, marketers, and leadership. Real-world examples. No death-by-PowerPoint.",
          href: "/training",
          icon: Users,
        },
      ].map((s, i) => (
        <motion.div
          key={i}
          variants={fade}
          custom={i}
          className="group bg-[#0D050A] p-9 relative overflow-hidden hover:bg-[#160910] transition-all duration-300 cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E8B84B] to-[#1A7A8A] group-hover:w-full transition-all duration-500" />
          <div className="w-11 h-11 bg-white/4 group-hover:bg-[#E8B84B]/10 flex items-center justify-center mb-6 transition-colors duration-300">
            <s.icon className="w-5 h-5 text-[#E8B84B]" strokeWidth={1.5} />
          </div>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#1A7A8A] mb-2">{s.sub}</p>
          <h3 className="text-lg font-serif font-bold text-white mb-3 leading-snug">{s.title}</h3>
          <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">{s.desc}</p>
          <Link href={s.href} className="inline-flex items-center text-xs font-mono tracking-[0.2em] uppercase text-[#1A7A8A] group-hover:text-[#E8B84B] transition-colors duration-300">
            Find out more <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
      {/* ─────────────── STATS ─────────────── */}
      <section className="py-20 bg-[#5C1A2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,184,75,0.18)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,122,138,0.22)_0%,_transparent_55%)]" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:divide-x divide-white/10">
            {[
              { value: 30, suffix: "+", label: "US states with active privacy laws" },
              { value: 10, prefix: "$", suffix: ".2M", label: "Average cost of a US data breach" },
              { value: 95, suffix: "%", label: "of breaches are preventable" },
              { value: 100, suffix: "%", label: "focused on practical outcomes" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center px-6 py-4"
              >
                <p className="text-5xl md:text-6xl font-serif font-black text-[#E8B84B] mb-3 tabular-nums">
                  <StatNumber target={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                </p>
                <p className="font-sans text-sm text-white/65 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <motion.p variants={fade} custom={0} className="text-xs font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-4">
              How it works
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-4xl md:text-5xl font-serif text-foreground mb-5">
              Simple from start to finish
            </motion.h2>
            <motion.p variants={fade} custom={2} className="text-lg text-muted-foreground font-sans">
              We hate unnecessary complexity as much as you do. Here's exactly how working with us looks.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />
            {[
              { num: "01", title: "A free conversation", desc: "Tell us what's going on. No sales pitch, no agenda — just an honest chat about where you are and what you need." },
              { num: "02", title: "We look at everything", desc: "We map your data, review your vendors, and find the gaps. We work around your team's time — this won't slow you down." },
              { num: "03", title: "A clear action plan", desc: "You get a plain-English roadmap. Every item is prioritised by risk, not alphabetically by legal clause." },
              { num: "04", title: "We build it with you", desc: "We stay alongside your team through implementation — writing policies, training staff, and answering questions as they come up." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-[#5C1A2E] text-white flex items-center justify-center text-2xl font-serif font-black mb-7 shadow-xl shadow-[#5C1A2E]/30 group-hover:bg-[#7A2240] transition-colors duration-300 border-4 border-background">
                  {s.num}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIAL ─────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#E8B84B] fill-[#E8B84B]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed italic mb-8">
              "For the first time, our board actually understood our data risk posture — and more importantly, they understood what we were going to do about it. APTA Foundry made what felt like an impossible task feel very doable."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-px bg-[#E8B84B]" />
              <div>
                <p className="font-serif font-bold text-foreground">Chief Operating Officer</p>
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-0.5">Series B Health-Tech Startup</p>
              </div>
              <div className="w-10 h-px bg-[#E8B84B]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-4">FAQ</p>
              <h2 className="text-4xl font-serif text-foreground mb-5 leading-tight">Questions people usually ask us</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Still not sure? Just reach out — we're pretty friendly.
              </p>
              <Button asChild className="bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none px-6 py-4 h-auto text-sm font-bold">
                <Link href="/contact">Ask us directly <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" /></Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "We're a small startup. Is this for us?",
                    a: "Absolutely. In fact, getting things right early is much cheaper than retrofitting privacy later. We have engagement formats that are specifically designed for early-stage and growth-stage companies. We work with your budget, not against it.",
                  },
                  {
                    q: "How long does a privacy audit actually take?",
                    a: "For most mid-sized companies, a gap analysis takes 3 to 4 weeks — that includes stakeholder interviews, reviewing your data flows and vendor contracts, and producing your prioritised roadmap. We keep it tight because we know your team is busy.",
                  },
                  {
                    q: "We only have US customers. Why would GDPR matter?",
                    a: "Even without EU customers, you may still be in scope if you monitor EU residents' behaviour online, or if your product is accessible in Europe. Beyond GDPR, the US now has 20+ state privacy laws that impose real obligations — California, Colorado, Texas, Virginia, and growing.",
                  },
                  {
                    q: "Can you help us with AI tools we're already using?",
                    a: "Yes, and this comes up a lot. Using ChatGPT, Copilot, or other AI tools inside your company creates privacy risks most teams haven't considered — employee data, confidential documents, customer information. We help you put sensible guardrails in place fast.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-base font-serif hover:text-[#1A7A8A] text-left py-5">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-5">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="relative py-32 bg-[#0D050A] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_50%,_#180814_0%,_#0D050A_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,_rgba(232,184,75,0.14)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="text-xs font-mono tracking-[0.3em] uppercase text-[#E8B84B] mb-6">
              Ready when you are
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
              Let's sort your privacy out —<br />
              <span className="italic text-white/75">together.</span>
            </motion.h2>
            <motion.p variants={fade} custom={2} className="text-xl text-white/55 font-sans max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute call. We'll listen first, and by the end you'll know exactly what your next step should be.
            </motion.p>
            <motion.div variants={fade} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#E8B84B] text-[#3D0F1D] hover:bg-[#F0C968] rounded-none px-14 py-8 text-xl h-auto font-bold shadow-2xl shadow-[#E8B84B]/25 hover:shadow-[#E8B84B]/50 hover:scale-[1.02] transition-all">
                <Link href="/contact">Let's Talk <ArrowRight className="w-5 h-5 ml-2 inline" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/8 rounded-none px-14 py-8 text-xl h-auto bg-transparent transition-all">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
