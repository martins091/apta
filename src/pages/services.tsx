import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, FileSearch, Layers, Shield, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  useEffect(() => {
    document.title = "Services — APTA Foundry";
    window.scrollTo(0, 0);
  }, []);

 const services = [
  {
    title: "We uncover your privacy risks",
    sub: "Privacy Audit & Gap Analysis",
    desc: "We conduct a comprehensive review of your data flows, vendor contracts, and internal policies against current regulatory frameworks (GDPR, CCPA, CPA, etc.). You receive a prioritized, risk-scored remediation roadmap.",
    href: "/services/privacy-audit",
    icon: FileSearch,
    deliverables: ["Comprehensive Data Map", "Vendor Risk Assessment", "Prioritized Remediation Roadmap", "Executive Risk Briefing"]
  },
  {
    title: "We secure your health data",
    sub: "HIPAA & Health Data",
    desc: "Whether you're a covered entity, a business associate, or a wellness app — we cut through the confusion and tell you exactly what applies to you.",
    href: "/services/hipaa",
    icon: Shield,
    deliverables: ["HIPAA Compliance Assessment", "Business Associate Agreements Review", "Privacy & Security Policies", "Breach Response Protocol"]
  },
  {
    title: "We build your privacy program",
    sub: "Privacy Program Build",
    desc: "For companies that need to starts up a privacy function from scratch. We build the engine: drafting external policies, establishing internal data handling procedures, and setting up automated DSAR workflows.",
    href: "/services/program-build",
    icon: Layers,
    deliverables: ["External Privacy Policy & Cookie Notice", "Internal Data Handling Guidelines", "DSAR Response Playbook", "Employee Training Deck"]
  },
  {
    title: "We guide your AI strategy",
    sub: "AI Governance Advisory",
    desc: "Before you connect customer data to an LLM or train your own models, we help you establish guardrails. We map the risks in your AI usage, review vendor terms, and build an Acceptable Use Policy that protects your IP and customer trust.",
    href: "/services/ai-governance",
    icon: Brain,
    deliverables: ["AI Acceptable Use Policy", "Model Risk Assessment", "Vendor Due Diligence Review", "Opt-out / Consent Strategy"]
  },
  {
    title: "We train your teams on privacy",
    sub: "Training & Workshops",
    desc: "Live, tailored sessions for product managers, marketers, and leadership. Real-world examples. No death-by-PowerPoint.",
    href: "/training",
    icon: Users,
    deliverables: ["Custom Training Modules", "Role-Based Workshops", "Training Documentation", "Certification Tracking"]
  }
];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl font-sans text-primary-foreground/80 max-w-2xl mx-auto">
            Strategic advisory and hands-on implementation for companies that take data protection seriously.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-primary/5"></div>
                     <span className="font-serif text-9xl text-primary/10 select-none">0{i+1}</span>
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-secondary font-serif italic text-xl mb-4">{service.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">{service.title}</h2>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="font-mono text-sm uppercase tracking-widest text-foreground mb-4">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground font-sans">
                          <span className="text-accent mt-1">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-8 py-6 h-auto">
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-8">Not sure what you need?</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto font-sans text-lg">
            Let's have a candid 30-minute conversation about your business goals and compliance posture. No high-pressure sales.
          </p>
          <Button asChild size="lg" className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none px-12 py-6 text-xl h-auto transition-colors">
            <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
