import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Clock,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Layers,
  ShieldCheck,
  Brain,
  Building2,
  FileSearch,
  Briefcase,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

type Course = {
  id: string;
  title: string;
  tag: string;
  duration: string;
  format: string;
  level: "Foundational" | "Intermediate" | "Advanced";
  price: string;
  summary: string;
  outcomes: string[];
  audience: string;
  modules: { title: string; bullets: string[] }[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const COURSES: Course[] = [
  {
    id: "privacy-foundations",
    title: "Privacy Foundations for Modern Teams",
    tag: "Most popular",
    format: "Live virtual or on-site",
    level: "Foundational",
    summary:
      "A clear, plain-English grounding in data protection — what privacy actually is, why it matters to your business, and how the laws everyone keeps emailing you about really work in practice.",
    audience:
      "Cross-functional teams (product, marketing, customer success, HR) and any new hire who handles personal data.",
    outcomes: [
      "Read and apply the core principles of GDPR, CCPA, and the wave of US state laws",
      "Recognize personal data and special categories in everyday workflows",
      "Spot the moments in product, marketing, and ops where privacy decisions get made",
      "Speak the same vocabulary as privacy, security, and compliance counterparts",
    ],
    modules: [
      {
        title: "Module 1 — What Privacy Really Means",
        bullets: [
          "From data protection to digital trust",
          "Personal data, special category data, and the gray zones",
          "How regulators actually enforce — the real cost of mistakes",
        ],
      },
      {
        title: "Module 2 — The Global Regulatory Map",
        bullets: [
          "GDPR core principles and lawful bases, demystified",
          "California, Colorado, Virginia, Texas — the US patchwork",
          "Cross-border transfers, vendors, and sub-processors",
        ],
      },
      {
        title: "Module 3 — Privacy in Daily Work",
        bullets: [
          "Email lists, analytics, A/B tests, and marketing pixels",
          "Handling customer data requests without panic",
          "Working with vendors and AI tools safely",
        ],
      },
    ],
    icon: ShieldCheck,
  },
  {
    id: "ai-governance-bootcamp",
    title: "AI Governance Bootcamp",
    tag: "New for 2026",
    format: "Live virtual or on-site",
    level: "Intermediate",
    summary:
      "A hands-on workshop for teams putting LLMs, agents, and ML into production. Learn how to ship AI features your privacy, security, and compliance teams can actually defend.",
    audience:
      "Product managers, engineering leads, ML/AI practitioners, security and privacy professionals adopting GenAI.",
    outcomes: [
      "Map AI risks against the EU AI Act, NIST AI RMF, and emerging US state rules",
      "Run a defensible model and vendor risk review in under 60 minutes",
      "Write an internal AI Acceptable Use Policy your team will actually follow",
      "Design human-in-the-loop and disclosure patterns that build user trust",
    ],
    modules: [
      {
        title: "Module 1 — The AI Regulatory Landscape",
        bullets: [
          "EU AI Act tiers and what they mean for you",
          "FTC, state AGs, and the new US enforcement playbook",
          "How privacy laws are quietly becoming AI laws",
        ],
      },
      {
        title: "Module 2 — Risk Assessment in Practice",
        bullets: [
          "Mapping data flows in and out of LLMs",
          "Training data, retention, and the consent question",
          "Vendor due diligence templates you can reuse",
        ],
      },
      {
        title: "Module 3 — Governance That Ships",
        bullets: [
          "Writing an AI AUP your teams won't ignore",
          "Disclosure, opt-outs, and user-facing transparency",
          "Building a lightweight AI review board",
        ],
      },
    ],
    icon: Brain,
  },
  {
    id: "executive-briefing",
    title: "Executive Privacy & AI Briefing",
    tag: "C-suite",
    format: "On-site or live virtual",
    level: "Foundational",
    summary:
      "A focused, jargon-free briefing for boards and executive teams. We translate the regulatory landscape into the three or four decisions you actually have to make this quarter.",
    audience:
      "CEOs, COOs, GCs, CFOs, board members, and executive leadership teams.",
    outcomes: [
      "Understand your top-five privacy and AI risks in business terms",
      "Get a simple framework for prioritizing privacy investment",
      "Know exactly what to ask your compliance and product leaders",
      "Leave with a one-page board-ready summary",
    ],
    modules: [
      {
        title: "Section 1 — The Landscape",
        bullets: [
          "Why privacy is now a board-level conversation",
          "Where regulators are actually looking (and fining)",
          "AI as the next governance frontier",
        ],
      },
      {
        title: "Section 2 — Your Risk Profile",
        bullets: [
          "Live pre-briefing on your specific industry and data posture",
          "Comparable enforcement actions and breach economics",
        ],
      },
      {
        title: "Section 3 — The Decisions",
        bullets: [
          "Three to four moves your team should make this quarter",
          "Investment thresholds and what 'good' looks like",
          "Q&A with your executive group",
        ],
      },
    ],
    icon: Briefcase,
  },
  {
    id: "dsar-workshop",
    title: "DSAR Response Workshop",
    tag: "Hands-on",
    format: "Live virtual or on-site",
    level: "Intermediate",
    summary:
      "A practical clinic for the people who actually answer Data Subject Access Requests. We cover intake, identity verification, internal collection, redaction, and the email you wish you hadn't sent.",
    audience:
      "Privacy ops, customer support leads, legal ops, and IT teams handling user data requests.",
    outcomes: [
      "Build a repeatable DSAR intake and triage workflow",
      "Verify identity without creating new privacy risks",
      "Coordinate cross-functional data collection in days, not weeks",
      "Write response letters that satisfy regulators and customers",
    ],
    modules: [
      {
        title: "Module 1 — Intake & Identity",
        bullets: [
          "Channels, forms, and the magic-link approach",
          "Identity verification proportional to the request",
        ],
      },
      {
        title: "Module 2 — Internal Collection",
        bullets: [
          "Mapping where personal data actually lives",
          "Working with teams to build self-service tooling",
        ],
      },
      {
        title: "Module 3 — Response & Redaction",
        bullets: [
          "Templates for confirmation, fulfillment, and refusal",
          "Redacting third-party data without losing context",
        ],
      },
    ],
    icon: FileSearch,
  },
];

const FORMATS = [
  {
    icon: Users,
    title: "Live cohorts",
    desc: "Small, interactive groups led by a senior privacy advisor. Real Q&A, real worked examples.",
  },
  {
    icon: GraduationCap,
    title: "Tailored to your stack",
    desc: "Every workshop is briefed on your industry, products, and data posture before we deliver.",
  },
  {
    icon: Award,
    title: "Certificate-ready",
    desc: "Select courses include a graded capstone and a Certificate of Completion from APTA Foundry.",
  },
];

export default function Training() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Training & Workshops — APTA Foundry";
    window.scrollTo(0, 0);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Live and on-site privacy and AI governance training from APTA Foundry — GDPR, CCPA, AI Governance, DSARs, and Privacy by Design.",
      );
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Banner */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,122,138,0.35)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,184,75,0.18)_0%,_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <p className="text-accent font-mono text-xs tracking-[0.25em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-accent/60 inline-block"></span>
            Training & Workshops
            <span className="w-8 h-[1px] bg-accent/60 inline-block"></span>
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Privacy education your<br />
            <span className="italic text-primary-foreground/95">teams will actually use.</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Live, expert-led courses for executives, product teams, and privacy operators. Plain English. Real examples. No theatre.
          </p>
        </div>
      </section>

      {/* Format strip */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {FORMATS.map((f) => (
              <motion.div key={f.title} variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 bg-secondary/10 flex items-center justify-center text-secondary">
                  <f.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{f.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course catalog */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-mono text-xs tracking-[0.25em] uppercase mb-4">The Catalog</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Six courses, one standard.
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Every course is delivered live by a senior advisor and pre-briefed on your industry and data posture. Pick the one that fits the team you need to level up.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {COURSES.map((c) => (
              <motion.article
                key={c.id}
                variants={fadeInUp}
                className="group bg-card border border-border p-8 relative flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                    <c.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-foreground bg-accent px-2.5 py-1">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {c.summary}
                </p>

                <ul className="space-y-2 mb-6 font-mono text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    {/* <Clock className="w-3.5 h-3.5 text-secondary" /> */}
                    {c.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    {c.format}
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-secondary" />
                    {c.level}
                  </li>
                </ul>

                <div className="border-t border-border pt-5 flex items-center justify-between gap-4">
                  <p className="font-sans text-xs text-muted-foreground">{c.price}</p>
                  <button
                    onClick={() => setActiveId(activeId === c.id ? null : c.id)}
                    className="inline-flex items-center text-xs font-bold text-secondary group-hover:text-primary transition-colors uppercase tracking-widest font-mono"
                  >
                    {activeId === c.id ? "Hide" : "Details"}
                    <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${activeId === c.id ? "rotate-90" : "group-hover:translate-x-1"}`} />
                  </button>
                </div>

                {activeId === c.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden mt-6 pt-6 border-t border-dashed border-border"
                  >
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-secondary mb-2">Who it's for</p>
                    <p className="font-sans text-sm text-foreground mb-5 leading-relaxed">{c.audience}</p>

                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-secondary mb-3">What you'll leave with</p>
                    <ul className="space-y-2 mb-6">
                      {c.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-secondary mb-3">Curriculum</p>
                    <div className="space-y-4">
                      {c.modules.map((m) => (
                        <div key={m.title}>
                          <p className="font-serif text-sm text-foreground mb-1.5">{m.title}</p>
                          <ul className="pl-4 space-y-1 font-sans text-xs text-muted-foreground">
                            {m.bullets.map((b, i) => (
                              <li key={i} className="relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1 before:h-1 before:bg-accent">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-11 font-medium"
                    >
                      <Link href="/contact">Enroll your team</Link>
                    </Button>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-mono text-xs tracking-[0.25em] uppercase mb-4">How a Cohort Runs</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              From first call to certificate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] border-t border-dashed border-border z-0" />
            {[
              { num: "01", title: "Scope Call", desc: "We learn your team, industry, and the outcome you need from the training." },
              { num: "02", title: "Tailoring", desc: "Your advisor pre-briefs on your stack and rebuilds case studies around it." },
              { num: "03", title: "Live Delivery", desc: "Interactive sessions with worked examples, Q&A, and breakout exercises." },
              { num: "04", title: "Wrap & Materials", desc: "You keep slide decks, templates, recordings, and a written summary." },
            ].map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-xl shadow-primary/20 border-4 border-background">
                  {s.num}
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4">Training Questions, Answered</h2>
            <p className="font-sans text-muted-foreground">Quick answers to the things buyers always ask before enrolling a team.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="t-1" className="border-border">
              <AccordionTrigger className="text-lg font-serif hover:text-secondary text-left">
                Can you deliver these on-site?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed">
                Yes. Every course is available live virtual or on-site at your office, anywhere in North America, the UK, the EU, and West Africa. Travel and venue costs are passed through at cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t-2" className="border-border">
              <AccordionTrigger className="text-lg font-serif hover:text-secondary text-left">
                Do you customize content for our industry?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed">
                Always. Before delivery, we run a scoping call and pre-brief your assigned advisor on your industry, products, and data posture. Case studies and examples are rebuilt around your context — not a generic deck.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t-3" className="border-border">
              <AccordionTrigger className="text-lg font-serif hover:text-secondary text-left">
                Are the courses certified?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed">
                Our GDPR Deep Dive and AI Governance Bootcamp include a graded capstone and a signed Certificate of Completion from APTA Foundry. Certificates are not a substitute for IAPP certifications — but they pair well as preparation for them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t-4" className="border-border">
              <AccordionTrigger className="text-lg font-serif hover:text-secondary text-left">
                What's included in the price?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed">
                Live delivery, all materials, session recordings, follow-up Q&A office hours for 30 days, and a written executive summary you can share internally. Templates and worksheets are yours to keep and reuse.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t-5" className="border-border">
              <AccordionTrigger className="text-lg font-serif hover:text-secondary text-left">
                Can you put together a multi-course learning path?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed">
                Absolutely. Many clients sequence Privacy Foundations → Privacy by Design → AI Governance Bootcamp across a quarter. Tell us the goal and we'll build the path and price the bundle accordingly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,184,75,0.18)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="text-accent font-mono text-xs tracking-[0.25em] uppercase mb-4">Ready when you are</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
            Build a privacy-fluent team.
          </h2>
          <p className="font-sans text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us who needs the training and what outcome you're after. We'll come back with a tailored proposal within two business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-lg h-auto shadow-xl shadow-accent/20">
              <Link href="/contact">Request a Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 rounded-none px-10 py-6 text-lg h-auto bg-transparent">
              <a href="https://calendly.com/akanachuma/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book a Discovery Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
