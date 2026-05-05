import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Users, Award, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/data/training";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const LEVEL_COLOR: Record<string, string> = {
  Foundational: "bg-[#1A7A8A]/10 text-[#1A7A8A] border-[#1A7A8A]/30",
  Intermediate: "bg-[#5C1A2E]/10 text-[#5C1A2E] border-[#5C1A2E]/30",
  Advanced: "bg-[#E8B84B]/15 text-[#C99A2E] border-[#E8B84B]/30",
};

export default function TrainingDetail() {
  const params = useParams<{ slug: string }>();
  const course = COURSES.find((c) => c.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) document.title = `${course.title} — APTA Foundry Training`;
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <h1 className="text-4xl font-serif text-foreground">Course not found</h1>
        <Button asChild className="bg-[#5C1A2E] text-white rounded-none px-8 py-4 h-auto">
          <Link href="/training">Back to Training</Link>
        </Button>
      </div>
    );
  }

  const currentIdx = COURSES.findIndex((c) => c.slug === params.slug);
  const nextCourse = COURSES[(currentIdx + 1) % COURSES.length];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-[#0D050A] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(92,26,46,0.6)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,122,138,0.25)_0%,_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8B84B]/50 to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fade} custom={0}>
              <Link href="/training" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-mono tracking-wide transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Courses
              </Link>
            </motion.div>
            <motion.div variants={fade} custom={1} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E8B84B] bg-[#E8B84B]/10 border border-[#E8B84B]/30 px-3 py-1">{course.tag}</span>
              <span className={`text-[11px] font-mono tracking-[0.2em] uppercase border px-3 py-1 ${LEVEL_COLOR[course.level]}`}>{course.level}</span>
            </motion.div>
            <motion.h1 variants={fade} custom={2} className="text-4xl md:text-6xl font-serif font-bold mb-5 leading-tight max-w-3xl">{course.title}</motion.h1>
            <motion.p variants={fade} custom={3} className="text-xl font-sans text-white/75 italic mb-8 max-w-2xl">{course.tagline}</motion.p>
            <motion.p variants={fade} custom={4} className="text-base font-sans text-white/65 max-w-2xl leading-relaxed">{course.hero}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick info + audience */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#1A7A8A] mb-4 flex items-center gap-3"
              >
                <span className="w-6 h-px bg-[#1A7A8A]" /> Who should attend
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-serif text-foreground mb-6"
              >
                Built for practitioners, not just lawyers.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg font-sans text-muted-foreground leading-relaxed mb-8"
              >
                {course.audience}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1A7A8A] mb-5">
                  What you'll leave with
                </p>
                <ul className="space-y-3">
                  {course.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-foreground/85 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mt-0.5 shrink-0" strokeWidth={2} />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#FAF7F2] border border-border p-7 space-y-5">
                <h3 className="text-lg font-serif text-foreground">Course details</h3>
                <ul className="space-y-4 font-mono text-xs">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-[#1A7A8A] shrink-0" />
                    <div>
                      <span className="block text-foreground font-medium">{course.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-4 h-4 text-[#1A7A8A] shrink-0" />
                    <div>
                      <span className="block text-foreground font-medium">{course.format}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Award className="w-4 h-4 text-[#1A7A8A] shrink-0" />
                    <div>
                      <span className="block text-foreground font-medium">{course.level}</span>
                    </div>
                  </li>
                </ul>
                <div className="border-t border-border pt-5">
                  <p className="text-xs font-mono text-muted-foreground mb-1">Investment</p>
                  <p className="text-sm font-sans text-foreground font-medium">{course.price}</p>
                </div>
                <Button asChild className="w-full bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none py-4 h-auto font-bold text-sm">
                  <Link href="/contact">Enrol Your Team <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" /></Link>
                </Button>
                <a
                  href="https://calendly.com/akanachuma/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-[#1A7A8A] hover:text-[#5C1A2E] transition-colors font-medium"
                >
                  <Calendar className="w-3.5 h-3.5" /> Book a scoping call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-[#0D050A]">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#E8B84B] mb-4">
              <span className="w-6 h-px bg-[#E8B84B]" /> What's covered
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-white mb-12">
              Curriculum
            </motion.h2>
            <div className="space-y-6">
              {course.modules.map((m, i) => (
                <motion.div key={i} variants={fade} custom={i} className="bg-white/4 border border-white/8 p-7 hover:bg-white/6 transition-colors group">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-8 h-8 bg-[#E8B84B]/15 flex items-center justify-center shrink-0 font-mono text-xs text-[#E8B84B] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white leading-snug">{m.title}</h3>
                  </div>
                  <ul className="pl-12 space-y-2.5">
                    {m.bullets.map((b, j) => (
                      <li key={j} className="text-sm font-sans text-white/60 flex items-start gap-2.5">
                        <span className="w-1 h-1 bg-[#E8B84B] rounded-full mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fade} custom={0} className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#1A7A8A] mb-4">
              <span className="w-6 h-px bg-[#1A7A8A]" /> Before you enrol
            </motion.p>
            <motion.h2 variants={fade} custom={1} className="text-3xl md:text-4xl font-serif text-foreground mb-10">
              Common questions
            </motion.h2>
            <div className="space-y-5">
              {course.faqs.map((faq, i) => (
                <motion.div key={i} variants={fade} custom={i} className="border border-border p-7 bg-card">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next course */}
      <section className="py-16 bg-[#FAF7F2] border-t border-border">
        <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1">Next course</p>
              <Link href={`/training/${nextCourse.slug}`} className="text-2xl font-serif font-bold text-foreground hover:text-[#5C1A2E] transition-colors flex items-center gap-2 group">
                {nextCourse.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-[#5C1A2E] text-white hover:bg-[#7A2240] rounded-none px-8 py-4 h-auto font-bold">
                <Link href="/contact">Enrol Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#5C1A2E]/30 text-[#5C1A2E] hover:bg-[#5C1A2E]/5 rounded-none px-8 py-4 h-auto">
                <Link href="/training">All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
