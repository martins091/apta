import { Users, Brain, GraduationCap, Briefcase, FileSearch, Building2 } from "lucide-react";

export type CourseData = {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  duration: string;
  format: string;
  level: "Foundational" | "Intermediate" | "Advanced";
  price: string;
  summary: string;
  hero: string;
  audience: string;
  outcomes: string[];
  modules: { title: string; bullets: string[] }[];
  faqs: { q: string; a: string }[];
  icon: typeof Users;
};

export const COURSES: CourseData[] = [
  {
    slug: "privacy-foundations",
    title: "Privacy Foundations for Modern Teams",
    tag: "Most popular",
    tagline: "The plain-English privacy grounding every team member needs.",
    duration: "6 hours · 2 half-days",
    format: "Live virtual or on-site",
    level: "Foundational",
    price: "From $4,800 per cohort (up to 25 seats)",
    summary: "A clear, jargon-free grounding in data protection for cross-functional teams.",
    hero: "Privacy decisions happen in every team — not just legal. This course gives your product managers, marketers, HR leads, and customer success teams the vocabulary, instincts, and confidence to make the right calls.",
    audience: "Cross-functional teams (product, marketing, customer success, HR) and any new hire who handles personal data.",
    outcomes: [
      "Read and apply the core principles of GDPR, CCPA, and the wave of US state laws",
      "Recognise personal data and special categories in everyday workflows",
      "Spot the moments in product, marketing, and ops where privacy decisions get made",
      "Speak the same vocabulary as your legal, security, and engineering counterparts",
      "Know what to do — and who to call — when a privacy question comes up",
    ],
    modules: [
      {
        title: "Module 1 — What Privacy Really Means",
        bullets: ["From data protection to digital trust", "Personal data, special category data, and the grey zones", "How regulators actually enforce — the real cost of mistakes", "The privacy principles every team member should know"],
      },
      {
        title: "Module 2 — The Global Regulatory Map",
        bullets: ["GDPR core principles and lawful bases, demystified", "California, Colorado, Virginia, Texas — the US patchwork explained", "Cross-border data transfers and what they mean in practice", "Vendor and sub-processor obligations — why it's your problem too"],
      },
      {
        title: "Module 3 — Privacy in Daily Work",
        bullets: ["Email lists, analytics, A/B tests, and marketing pixels", "Handling customer data requests (DSARs) without panic", "Working with vendors and AI tools safely", "When to escalate and who to call"],
      },
    ],
    faqs: [
      { q: "Is this course suitable for non-technical staff?", a: "Yes — it's specifically designed for non-lawyers and non-engineers. We use everyday language and real examples drawn from marketing, product, and HR workflows." },
      { q: "Can we run this for a global team in different time zones?", a: "Yes. We regularly run split-session versions across US and EU time zones. We'll design the schedule around your team." },
      { q: "Do participants get a certificate?", a: "Participants receive a Certificate of Attendance from APTA Foundry. This course does not include a graded capstone — see GDPR Deep Dive for a certificate-ready option." },
    ],
    icon: Users,
  },
  {
    slug: "ai-governance-bootcamp",
    title: "AI Governance Bootcamp",
    tag: "New for 2026",
    tagline: "Ship AI features your privacy, security, and legal teams can actually defend.",
    duration: "8 hours · 2 days",
    format: "Live virtual or on-site",
    level: "Intermediate",
    price: "From $7,500 per cohort (up to 20 seats)",
    summary: "A hands-on workshop for teams putting LLMs, agents, and ML into production.",
    hero: "The regulation is moving. Your engineering team is moving faster. This bootcamp closes the gap — giving product and engineering leads the AI governance toolkit they need to build responsibly without slowing the roadmap.",
    audience: "Product managers, engineering leads, ML/AI practitioners, security, and privacy professionals adopting GenAI.",
    outcomes: [
      "Map AI risks against the EU AI Act, NIST AI RMF, and emerging US state rules",
      "Run a defensible model and vendor risk review in under 60 minutes",
      "Write an internal AI Acceptable Use Policy your team will actually follow",
      "Design human-in-the-loop and disclosure patterns that build user trust",
      "Identify training data risks before they become regulatory problems",
    ],
    modules: [
      {
        title: "Module 1 — The AI Regulatory Landscape",
        bullets: ["EU AI Act tiers and what they mean for product teams", "FTC, state AGs, and the new US enforcement playbook", "How privacy laws are quietly becoming AI laws", "What regulators are actually looking for — and finding"],
      },
      {
        title: "Module 2 — Risk Assessment in Practice",
        bullets: ["Mapping data flows in and out of LLMs", "Training data, retention, and the consent question", "Vendor due diligence templates you can reuse immediately", "The five AI risks most teams discover too late"],
      },
      {
        title: "Module 3 — Governance That Ships",
        bullets: ["Writing an AI AUP your engineers won't ignore", "Disclosure, opt-outs, and user-facing transparency", "Building a lightweight AI review board", "Embedding AI review into your RFC and PRD process"],
      },
    ],
    faqs: [
      { q: "Do participants need a legal background?", a: "No. This is designed for practitioners — product managers, engineers, and data scientists — not lawyers. We translate the law into decisions your team actually has to make." },
      { q: "Can we bring in our legal or compliance team alongside engineering?", a: "We encourage it. Mixed cohorts of engineering + legal + product generate the most valuable conversations. We design exercises that work across functions." },
      { q: "Is this relevant even if we only use third-party AI tools?", a: "Especially so. Third-party AI tools are where most organisations have the greatest unmanaged risk — vendor terms, data retention, confidential data exposure, and model training opt-outs." },
    ],
    icon: Brain,
  },
  {
    slug: "gdpr-deep-dive",
    title: "GDPR Deep Dive for Operators",
    tag: "Certificate-ready",
    tagline: "A four-week operator sprint through the GDPR — with a graded capstone.",
    duration: "12 hours · 4 sessions",
    format: "Live virtual cohort",
    level: "Advanced",
    price: "From $1,200 per learner (volume pricing available)",
    summary: "An operator-focused, four-week sprint through the GDPR — built for the people who actually make compliance happen.",
    hero: "Most GDPR training is built for lawyers. This one is built for the DPOs, privacy program leads, and senior product managers who have to operationalise it. Four weeks. Real work. A graded capstone. A certificate you've earned.",
    audience: "Privacy program leads, DPOs in training, in-house counsel, security engineers, and senior PMs.",
    outcomes: [
      "Confidently apply Articles 5, 6, 9, 13, 14, 28, 32, and 33 to real product decisions",
      "Build a defensible Record of Processing Activities (Article 30) from scratch",
      "Run a Data Protection Impact Assessment end-to-end",
      "Respond to data subject requests within statutory timelines",
      "Navigate cross-border transfer mechanisms (SCCs, BCRs, adequacy decisions)",
      "Complete a graded capstone and earn an APTA Foundry Certificate of Completion",
    ],
    modules: [
      {
        title: "Week 1 — Principles & Lawful Bases",
        bullets: ["Lawfulness, fairness, transparency in practice — not in theory", "Consent vs. legitimate interest — when to use which and how to document it", "Special category and children's data", "Privacy notices that actually work"],
      },
      {
        title: "Week 2 — Records, DPIAs & Vendors",
        bullets: ["Building a usable RoPA without a 200-tab spreadsheet", "DPIA workflows that ship in days, not months", "Article 28 contracts, SCCs, and transfer impact assessments", "Managing a sub-processor chain"],
      },
      {
        title: "Week 3 — Rights & Incidents",
        bullets: ["DSAR intake, identity verification, and response templates", "72-hour breach reporting — what regulators expect and how to deliver it", "Working with your security and IR teams on breach classification", "Regulator correspondence and how to get the tone right"],
      },
      {
        title: "Week 4 — Capstone & Review",
        bullets: ["Bring your own use case for live workshopping", "Graded mini-DPIA and DSAR scenarios", "Peer review and advisor feedback session", "Certificate of Completion from APTA Foundry"],
      },
    ],
    faqs: [
      { q: "Is this course a substitute for the IAPP CIPP/E certification?", a: "No — our certificate is a practical operations credential, not an IAPP certification. Many of our graduates use this course as preparation for the CIPP/E exam." },
      { q: "What's the workload between sessions?", a: "Expect 1–2 hours per week of pre-reading and preparation for each session. The capstone takes approximately 4–6 hours over the final weekend." },
      { q: "Can we run a private cohort for our organisation?", a: "Yes. Private cohorts are available for organisations with 5 or more participants. We can also customise the case studies around your specific industry and data posture." },
    ],
    icon: GraduationCap,
  },
  {
    slug: "executive-briefing",
    title: "Executive Privacy & AI Briefing",
    tag: "C-suite",
    tagline: "The three decisions your board needs to make this quarter — clearly explained.",
    duration: "90 minutes · 1 session",
    format: "On-site or live virtual",
    level: "Foundational",
    price: "From $3,500 per session",
    summary: "A focused, jargon-free briefing for boards and executive teams on privacy and AI risk.",
    hero: "Your board is being asked to sign off on AI initiatives, data strategies, and privacy budgets — without the context to evaluate them. We fix that in 90 minutes.",
    audience: "CEOs, COOs, GCs, CFOs, board members, and executive leadership teams.",
    outcomes: [
      "Understand your top-five privacy and AI risks in business terms",
      "Get a simple framework for prioritising privacy investment",
      "Know exactly what to ask your CISO, GC, and Head of Product",
      "Leave with a one-page board-ready risk summary",
      "Make informed decisions on AI initiatives and data strategy",
    ],
    modules: [
      {
        title: "Section 1 — The Landscape",
        bullets: ["Why privacy is now a board-level conversation", "Where regulators are actually looking — and fining", "AI as the next governance frontier", "What peer companies are doing and what's working"],
      },
      {
        title: "Section 2 — Your Risk Profile",
        bullets: ["Live pre-briefing on your specific industry and data posture", "Comparable enforcement actions and breach economics", "Where your current programme has gaps vs. industry peers"],
      },
      {
        title: "Section 3 — The Decisions",
        bullets: ["Three to four moves your team should make this quarter", "Investment thresholds and what 'good' looks like at your stage", "Questions to ask your internal team", "Open Q&A with your executive group"],
      },
    ],
    faqs: [
      { q: "How do you prepare the briefing for our specific organisation?", a: "Before the session, we conduct a 30-minute intake call with your primary contact to understand your industry, data posture, current programme maturity, and the key decisions the board is facing. The briefing is then tailored around those specifics." },
      { q: "Can we record the session for board members who can't attend live?", a: "Yes, with appropriate notice to all participants. We can also prepare a written briefing summary and one-page risk memo for distribution to the full board." },
      { q: "Is 90 minutes enough?", a: "For executives, yes. We've found that focused 90-minute sessions produce better engagement and retention than half-day workshops. For teams that want to go deeper, we recommend following up with the AI Governance Bootcamp for relevant team members." },
    ],
    icon: Briefcase,
  },
  {
    slug: "dsar-workshop",
    title: "DSAR Response Workshop",
    tag: "Hands-on",
    tagline: "Build a repeatable DSAR workflow your team can run without a lawyer in the room.",
    duration: "4 hours · 1 session",
    format: "Live virtual or on-site",
    level: "Intermediate",
    price: "From $3,200 per cohort (up to 20 seats)",
    summary: "A practical clinic for the people who actually answer Data Subject Access Requests.",
    hero: "DSARs are coming in faster than ever. One missed deadline or botched response can become a regulator complaint. This workshop gives your ops team a repeatable, defensible process they can run confidently.",
    audience: "Privacy ops, customer support leads, legal ops, and IT teams handling user data requests.",
    outcomes: [
      "Build a repeatable DSAR intake and triage workflow",
      "Verify identity without creating new privacy risks",
      "Coordinate cross-functional data collection in days, not weeks",
      "Write response letters that satisfy regulators and customers",
      "Handle complex requests: third-party data, manifestly unfounded claims, extensions",
    ],
    modules: [
      {
        title: "Module 1 — Intake & Identity",
        bullets: ["Channels, forms, and the magic-link approach to submission", "Identity verification proportional to the request", "Intake logging and statutory clock management", "Triage: which requests get prioritised and why"],
      },
      {
        title: "Module 2 — Internal Collection",
        bullets: ["Mapping where personal data actually lives across your systems", "Working with engineering to build self-service tooling", "Collecting from databases, SaaS tools, email, and backups", "Third-party data — what you must disclose and what you can redact"],
      },
      {
        title: "Module 3 — Response & Redaction",
        bullets: ["Templates for confirmation, fulfilment, refusal, and extension", "Redacting third-party data without losing context", "Sending securely — avoiding the common transmission risks", "Post-response logging and audit trail maintenance"],
      },
    ],
    faqs: [
      { q: "We currently process DSARs in spreadsheets and email. Is that okay?", a: "It's common, but it introduces risk — especially around statutory deadlines and audit trails. We'll show you a lightweight tooling approach that doesn't require an expensive platform." },
      { q: "What if a requester claims we haven't provided everything?", a: "We cover this in the workshop, including how to document your search methodology so you can demonstrate good faith to a regulator if a complaint follows." },
      { q: "Can we buy just the templates without the full workshop?", a: "Our templates are designed to be used in conjunction with the training — the process decisions behind them matter as much as the documents themselves. We don't sell templates in isolation." },
    ],
    icon: FileSearch,
  },
  {
    slug: "privacy-by-design",
    title: "Privacy by Design for Product & Engineering",
    tag: "Eng-friendly",
    tagline: "Bake privacy into how you build — from the first sprint to the last.",
    duration: "6 hours · 2 half-days",
    format: "Live virtual or on-site",
    level: "Intermediate",
    price: "From $5,400 per cohort (up to 30 seats)",
    summary: "A practical workshop that embeds privacy into the way your product and engineering teams already work.",
    hero: "Privacy bolted on after launch costs 10x more than privacy baked in from the start. This workshop gives your product and engineering teams the tools to make privacy-safe the default — inside your existing sprint, RFC, and design-doc processes.",
    audience: "Product managers, engineering managers, designers, and platform/security engineers.",
    outcomes: [
      "Embed privacy reviews into your existing PRD and RFC process",
      "Design data minimisation, retention, and deletion into systems from day one",
      "Build internal SDKs and tooling that make the privacy-safe path the easy path",
      "Avoid the costly rebuilds that come from privacy decisions made too late",
      "Run a five-minute privacy review for any new feature or data flow",
    ],
    modules: [
      {
        title: "Module 1 — Privacy as a System Property",
        bullets: ["Data flow diagramming for engineers — the right level of detail", "Minimisation, purpose limitation, and retention baked into schema design", "The cost of retrofitting vs. designing right the first time", "Where privacy debt hides in a typical SaaS codebase"],
      },
      {
        title: "Module 2 — Designing Reviewable Features",
        bullets: ["Privacy questions in the PRD and design doc", "The five-minute privacy review for product teams", "When to escalate to legal — and when not to", "A worked example: redesigning an analytics feature for privacy"],
      },
      {
        title: "Module 3 — Tooling & Defaults",
        bullets: ["Building internal SDKs for logging, analytics, and consent", "Deletion, anonymisation, and the right-to-be-forgotten pipeline", "Access controls, data classification, and audit logging by default", "Making privacy the path of least resistance for your engineers"],
      },
    ],
    faqs: [
      { q: "Is this workshop suitable for a team that uses agile/scrum?", a: "It's specifically designed for agile teams. We show you how to add a lightweight privacy checkpoint to your sprint planning and PRD review — not a heavyweight compliance gate." },
      { q: "Does this require any pre-reading or preparation?", a: "None required. We send an optional pre-read (a two-page data flow primer) for those who want to come prepared, but the workshop is fully self-contained." },
      { q: "Can you tailor the worked examples to our tech stack?", a: "Yes — during our scoping call, we learn your stack and build the workshop examples around your specific architecture and data flows." },
    ],
    icon: Building2,
  },
];
