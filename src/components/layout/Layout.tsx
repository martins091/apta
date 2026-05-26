import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight, Linkedin,
  Shield, Layers, Brain, AlertCircle, FileSearch,
  Users, Mail,
  Building2, Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type DropItem = {
  label: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};
type NavItem = { label: string; href: string; items?: DropItem[] };

const NAV: NavItem[] = [
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About APTA Foundry", href: "/about", desc: "Our story, values, and team", icon: Shield },
      { label: "Get in Touch", href: "/contact", desc: "We'd love to hear from you", icon: Mail },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Privacy Audit & Gap Analysis", href: "/services/privacy-audit", desc: "See exactly where your gaps are", icon: FileSearch },
      { label: "HIPAA & Health Data", href: "/services/hipaa", desc: "Health data rules, made simple", icon: Shield },
      { label: "Privacy Program Build", href: "/services/program-build", desc: "We build your whole compliance setup", icon: Layers },
      { label: "AI Governance Advisory", href: "/services/ai-governance", desc: "Ship AI responsibly and confidently", icon: Brain },
      
    ],
  },
  {
    label: "Training",
    href: "/training",
    items: [
      { label: "Privacy Foundations", href: "/training/privacy-foundations", desc: "For every team, not just legal", icon: Users },
      { label: "AI Governance Bootcamp", href: "/training/ai-governance-bootcamp", desc: "For product and engineering teams", icon: Brain },
      { label: "Executive Briefing", href: "/training/executive-briefing", desc: "A clear briefing for your leadership", icon: Briefcase },
      { label: "DSAR Response Workshop", href: "/training/dsar-workshop", desc: "Handle data requests without stress", icon: FileSearch },
    ],
  },
  { label: "Resources", href: "/resources" },
  // { label: "Clarity Guide", href: "/guide" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [location] = useLocation();
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
    setMobileExpanded(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const handleDropEnter = (label: string) => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setOpenDrop(label);
  };
  const handleDropLeave = () => {
    dropTimer.current = setTimeout(() => setOpenDrop(null), 100);
  };

  const isActive = (href: string) =>
    location === href || (href !== "/" && location.startsWith(href));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">

      {/* ── HEADER ── */}
{/* ── HEADER ── */}
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-white shadow-md border-b border-gray-200 py-2"
      : "bg-white py-3 shadow-sm"
  }`}
>
  <div className="container mx-auto px-6 flex items-center justify-between">

    {/* Logo (simplified + clean) */}
    <Link href="/" className="flex items-center shrink-0 group z-50">
      <div className="px-2.5 py-1 rounded-md">
        <img
          src={`${import.meta.env.BASE_URL}brand/logo-new.png`}
          alt="APTA Foundry"
          className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden lg:flex items-center gap-0.5">
      {NAV.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.items && handleDropEnter(item.label)}
          onMouseLeave={handleDropLeave}
        >
          <Link
            href={item.href}
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
              isActive(item.href)
                ? "text-[#E8B84B]"
                : "text-gray-700 hover:text-[#5C1A2E] hover:bg-gray-50"
            }`}
          >
            {item.label}
            {item.items && (
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDrop === item.label
                    ? "rotate-180 text-[#E8B84B]"
                    : "text-gray-400"
                }`}
              />
            )}
          </Link>

          {/* Dropdown */}
          <AnimatePresence>
            {item.items && openDrop === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden"
                style={{ minWidth: "300px" }}
              >
                <div className="h-0.5 bg-gradient-to-r from-[#5C1A2E] via-[#E8B84B] to-[#1A7A8A]" />

                <div className="p-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-start gap-3 px-3 py-3 rounded-md group hover:bg-gray-50 transition"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-[#5C1A2E]/10 group-hover:bg-[#5C1A2E]/20 transition">
                        <sub.icon className="w-3.5 h-3.5 text-[#5C1A2E]" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-[#5C1A2E]">
                          {sub.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {sub.desc}
                        </p>
                      </div>

                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ))}

                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href={item.href}
                      className="flex items-center justify-center gap-2 py-2 text-xs uppercase tracking-widest text-[#1A7A8A] hover:text-[#5C1A2E]"
                    >
                      View all {item.label} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>

   {/* CTA */}
<div className="hidden lg:flex items-center gap-4">
  <Button
    asChild
    className="bg-[#E8B84B] text-[#3D0F1D] hover:bg-[#F0C968] rounded-md px-4 py-2 text-sm font-semibold shadow-md hover:shadow-[#E8B84B]/25 transition"
  >
    <a 
      href="https://calendly.com/akanachuma/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Let's Talk <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
    </a>
  </Button>
</div>

    {/* Mobile */}
    <button
      className="lg:hidden text-gray-700 p-2 hover:text-[#E8B84B]"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label="Toggle menu"
    >
      {mobileOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>
</header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0, 0.08, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col overflow-y-auto"
          >
            <div className="pt-24 pb-12 px-6 flex flex-col">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-serif text-gray-800 hover:text-[#5C1A2E] transition-colors"
                  >
                    {item.label}
                    {item.items && (
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.items && mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-3 space-y-1">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2.5 px-3 text-sm text-gray-600 hover:text-[#5C1A2E] hover:bg-[#5C1A2E]/4 rounded-sm transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                          <Link href={item.href} className="block py-2.5 px-3 text-xs font-mono tracking-widest uppercase text-[#1A7A8A] hover:text-[#5C1A2E]">
                            View all →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-8 space-y-3">
                <Button asChild className="w-full bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none py-5 text-base font-bold h-auto">
                  <Link href="/contact">Book a Call</Link>
                </Button>
                <a
                  href="https://calendly.com/akanachuma/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm text-[#1A7A8A] font-medium border border-[#1A7A8A]/30"
                >
                  Schedule via Calendly <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CONTENT ── */}
      <main className="flex-grow">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D050A] text-white/70 border-t border-white/8">
        <div className="h-0.5 bg-gradient-to-r from-[#5C1A2E] via-[#E8B84B] to-[#1A7A8A]" />
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src={`${import.meta.env.BASE_URL}brand/apta-logo.png`}
                alt="APTA Foundry"
                className="h-10 w-auto mb-6 opacity-90"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-xs">
               Apta Foundry
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/8 hover:bg-[#E8B84B]/20 flex items-center justify-center transition-colors group">
                  <Linkedin className="w-4 h-4 group-hover:text-[#E8B84B] transition-colors" />
                </a>
                <a href="mailto:hello@aptafoundry.com"
                  className="w-9 h-9 bg-white/8 hover:bg-[#E8B84B]/20 flex items-center justify-center transition-colors group">
                  <Mail className="w-4 h-4 group-hover:text-[#E8B84B] transition-colors" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#E8B84B] mb-5">Services</h4>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Audit & Gap Analysis", href: "/services/privacy-audit" },
                  { label: "HIPAA & Health Data", href: "/services/hipaa" },
                  { label: "Privacy Program Build", href: "/services/program-build" },
                  { label: "AI Governance Advisory", href: "/services/ai-governance" },
                  
                ].map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-sm text-white/50 hover:text-white/90 transition-colors leading-relaxed block">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training */}
            <div>
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#E8B84B] mb-5">Training</h4>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Foundations", href: "/training/privacy-foundations" },
                  { label: "AI Governance Bootcamp", href: "/training/ai-governance-bootcamp" },
                  { label: "GDPR Deep Dive", href: "/training/gdpr-deep-dive" },
                  { label: "Executive Briefing", href: "/training/executive-briefing" },
                  { label: "Privacy by Design", href: "/training/privacy-by-design" },
                ].map((t) => (
                  <li key={t.label}>
                    <Link href={t.href} className="text-sm text-white/50 hover:text-white/90 transition-colors leading-relaxed block">{t.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#E8B84B] mb-5">Company</h4>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Resources", href: "/resources" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/50 hover:text-white/90 transition-colors block">{l.label}</Link>
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/akanachuma/30min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E8B84B] hover:text-[#F0C968] transition-colors">
                Let's Talk <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/30">
            <p>&copy; {new Date().getFullYear()} APTA Foundry. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

