import { FileSearch, Layers, Brain, Shield, AlertCircle } from "lucide-react";

export type ServiceData = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  hero: string;
  intro: string[];
  whoFor: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  icon: typeof FileSearch;
};

export const SERVICES: ServiceData[] = [
  {
    slug: "privacy-audit",
    title: "Privacy Audit & Gap Analysis",
    subtitle: "Know exactly where your risk lies.",
    tagline: "A forensic review of your data posture — delivered in 3–4 weeks.",
    hero: "You can't fix what you haven't mapped. Our audit gives you the full picture — every data flow, every vendor, every gap — so you can act on evidence, not assumptions.",
    intro: [
      "Our Privacy Audit is a structured, evidence-based review of how your organisation collects, processes, stores, and shares personal data. We assess your current posture against the regulatory frameworks that apply to your business — GDPR, CCPA, CPA, VCDPA, HIPAA, or the emerging US state law patchwork — and deliver a plain-English report that tells you exactly what needs to change and in what order.",
      "Unlike a checkbox compliance review, our audit goes to the source: your actual data flows, your vendor contracts, your consent mechanisms, your privacy notices. We interview your technical, product, and HR leads. We review your vendor DPAs. We test your DSAR workflow. Then we score every finding by risk — so your team knows what to fix first.",
    ],
    whoFor: [
      "SaaS companies preparing for enterprise sales due diligence",
      "Health-tech and fintech startups approaching SOC 2 or ISO 27701",
      "Companies entering the EU market for the first time",
      "Businesses that have grown fast and know their data practices haven't kept up",
      "Teams that have received a regulator inquiry or customer privacy complaint",
    ],
    deliverables: [
      "Comprehensive personal data inventory and data flow map",
      "Vendor and third-party risk register with DPA coverage gaps",
      "Regulatory gap analysis mapped to applicable frameworks",
      "Risk-scored remediation roadmap (Critical / High / Medium / Low)",
      "Executive-ready findings brief (board presentation-ready)",
      "30-day post-delivery Q&A support",
    ],
    process: [
      { step: "Week 1", title: "Scoping & Kickoff", desc: "We define the regulatory scope, agree the interview schedule, and brief your stakeholders on what to expect." },
      { step: "Week 2", title: "Discovery", desc: "Stakeholder interviews across product, marketing, HR, and compliance. Document and contract review." },
      { step: "Week 3", title: "Assessment", desc: "We map your data flows, score findings against applicable frameworks, and draft the gap analysis." },
      { step: "Week 4", title: "Delivery", desc: "Final report delivered. We walk your leadership team through the findings and answer questions." },
    ],
    faqs: [
      { q: "How disruptive is the audit to our team?", a: "We try to keep it light. Typically 3–5 hours of stakeholder time spread over the first two weeks, plus document access. We work around your sprint cycles and release freeze dates." },
      { q: "Do you need access to production systems?", a: "No. We work from documentation, data flow diagrams, vendor lists, and stakeholder interviews. We don't need database access or system credentials." },
      { q: "What happens after you deliver the report?", a: "We include 30 days of Q&A support. If you'd like us to stay on for implementation, we can scope a Privacy Program Build engagement." },
    ],
    icon: FileSearch,
  },
  {
    slug: "program-build",
    title: "Privacy Program Build",
    subtitle: "Operationalise compliance across your organisation.",
    tagline: "End-to-end privacy infrastructure — built to last, not just to pass an audit.",
    hero: "Policies without systems are just documents. We build the engine: the policies, the processes, the training, and the technical controls that make your privacy program run day to day.",
    intro: [
      "A Privacy Program Build is our most comprehensive engagement. It's designed for companies that need to stand up a privacy function from the ground up — or for organisations whose program has gaps that a simple policy update won't fix.",
      "We work alongside your compliance and people teams to design and implement a complete privacy operating framework: from the external notices your customers read to the internal procedures your teams follow to the technical controls your teams build. We don't hand you a template pack and disappear — we stay until it works.",
    ],
    whoFor: [
      "Companies building a privacy function for the first time",
      "Organisations that have failed or nearly failed a privacy audit",
      "Teams preparing for GDPR Article 30 record-keeping obligations",
      "Companies that have appointed a new DPO and need to support them",
      "Businesses acquiring or being acquired where privacy due diligence is a condition",
    ],
    deliverables: [
      "External Privacy Policy, Cookie Notice, and Data Retention Schedule",
      "Internal Data Handling Guidelines and classification framework",
      "Record of Processing Activities (Article 30 RoPA)",
      "DSAR intake, verification, and response playbook with templates",
      "Data Breach Response Playbook with notification timelines",
      "Vendor due diligence checklist and standard DPA template",
      "Staff training deck and privacy awareness programme",
      "Privacy review process embedded in your product RFC / PRD workflow",
    ],
    process: [
      { step: "Phase 1", title: "Scoping & Baseline", desc: "We run a rapid baseline assessment to understand your current state, regulatory exposure, and priority gaps." },
      { step: "Phase 2", title: "Design", desc: "We design your program architecture: policies, procedures, data flows, roles, and technical requirements." },
      { step: "Phase 3", title: "Build & Implement", desc: "We draft every document, run staff training, and work with teams to embed privacy into your SDLC." },
      { step: "Phase 4", title: "Handoff & Embed", desc: "We hand off all materials, train your internal owner, and provide 90 days of support to answer questions as the program matures." },
    ],
    faqs: [
      { q: "How long does a full program build take?", a: "For most mid-market companies, 8–12 weeks from kickoff to handoff. Complex organisations with multiple jurisdictions or business lines may require 16–20 weeks." },
      { q: "Do we need a DPO in place before we start?", a: "No. Many clients don't have a DPO. We can advise on whether you need to appoint one under GDPR and can help you define the role before you hire." },
      { q: "Can you work with our existing compliance advisors?", a: "Absolutely. We regularly partner with external advisors on these engagements. We handle the operational build; they handle the formal advice." },
    ],
    icon: Layers,
  },
  {
    slug: "ai-governance",
    title: "AI Governance Advisory",
    subtitle: "Deploy AI safely and compliantly.",
    tagline: "Map the risks in your AI stack before a regulator or journalist does it for you.",
    hero: "AI is moving faster than the law — but the law is catching up fast. We help you stay ahead of both: building governance frameworks that let your team ship AI features without creating regulatory, reputational, or technical debt.",
    intro: [
      "The EU AI Act is in force. FTC enforcement actions over AI are accelerating. US state attorneys general are watching. And your customers are asking harder questions about how their data is used to train or inform AI decisions.",
      "Our AI Governance Advisory helps you assess the privacy and governance risks in your AI stack — whether you're building proprietary models, integrating third-party LLMs, or using off-the-shelf AI tools in your product. We create the frameworks your compliance and product teams need to move fast without creating liability.",
    ],
    whoFor: [
      "Product teams integrating LLMs or generative AI into customer-facing features",
      "Teams building or fine-tuning ML models on customer data",
      "Compliance teams needing to assess AI vendor contracts",
      "Companies subject to the EU AI Act's high-risk system requirements",
      "Organisations receiving inbound vendor questionnaires about AI governance",
    ],
    deliverables: [
      "AI system inventory and classification under EU AI Act risk tiers",
      "AI-specific Privacy Impact Assessment (PIA) framework",
      "AI Acceptable Use Policy (internal) with enforcement mechanisms",
      "Third-party AI vendor due diligence template and scoring matrix",
      "Training data review: consent, licensing, and retention analysis",
      "Customer-facing AI transparency notice and opt-out mechanism design",
      "Human-in-the-loop and human oversight implementation guide",
    ],
    process: [
      { step: "Week 1", title: "AI Inventory", desc: "We map every AI system, model, and tool your company uses — built, bought, or embedded in SaaS tools." },
      { step: "Week 2", title: "Risk Classification", desc: "We classify each system by risk tier (EU AI Act), data sensitivity, and jurisdictional exposure." },
      { step: "Week 3", title: "Gap Analysis", desc: "We identify governance gaps: missing policies, vendor contracts without AI clauses, training data issues." },
      { step: "Week 4", title: "Governance Package", desc: "We deliver your AUP, vendor templates, PIA framework, and customer-facing notices — ready to implement." },
    ],
    faqs: [
      { q: "We only use third-party AI tools (like ChatGPT or Copilot). Do we need AI governance?", a: "Yes. Using third-party AI tools doesn't eliminate your obligations. You're still responsible for what data you send to them, how it's retained, and whether your employees are sharing confidential or personal information." },
      { q: "Does the EU AI Act apply to us?", a: "If you sell products or services to EU customers, or your AI systems affect EU residents, you likely have obligations. The scope is broad and includes non-EU companies. We'll walk you through the classification analysis." },
      { q: "Can you help us respond to a customer questionnaire about AI?", a: "Yes. This is a common urgent need and we can typically turn around a response framework within a week." },
    ],
    icon: Brain,
  },
  {
    slug: "hipaa",
    title: "HIPAA & Health Data Advisory",
    subtitle: "Navigate digital health compliance with confidence.",
    tagline: "HIPAA, FTC Health Breach, and state health privacy laws — demystified.",
    hero: "Digital health has never been more complex. HIPAA applies to covered entities and their business associates — but the FTC's Health Breach Notification Rule and a new wave of state health-data laws now reach far beyond. We help you understand exactly what applies to you.",
    intro: [
      "Health data is the most sensitive category of personal information, and the regulatory landscape around it has changed dramatically in the last three years. The FTC's Health Breach Notification Rule now applies to health apps and wearables that aren't traditional HIPAA covered entities. States like Washington, Nevada, and Connecticut have passed standalone consumer health data laws. And HIPAA's omnibus requirements continue to trip up organisations that haven't done a formal risk assessment.",
      "We help digital health companies, health-tech startups, traditional healthcare providers, and their technology vendors understand exactly which rules apply to them — and what they need to do about it. Our advisory is practical, not theoretical: we work with your product and teams to make compliance operational.",
    ],
    whoFor: [
      "Digital health apps and wearables collecting health or wellness data",
      "HIPAA covered entities (providers, insurers, clearinghouses) with outdated risk assessments",
      "Business Associates that have outgrown their legacy BAA templates",
      "Health-tech startups preparing for partnership with covered entities",
      "Companies subject to Washington My Health MY Data Act or similar state laws",
    ],
    deliverables: [
      "HIPAA applicability analysis and covered entity / BA determination",
      "HIPAA Security Rule risk assessment (satisfies §164.308 requirement)",
      "FTC Health Breach Notification Rule applicability assessment",
      "State health privacy law gap analysis (WA, NV, CT, and others)",
      "Business Associate Agreement (BAA) template and review checklist",
      "Minimum Necessary standard implementation guide",
      "Breach response playbook with 60-day HHS notification workflow",
    ],
    process: [
      { step: "Phase 1", title: "Applicability Review", desc: "We determine which laws apply to your specific product, business model, and data flows — including state health data laws often overlooked." },
      { step: "Phase 2", title: "Risk Assessment", desc: "For HIPAA-covered operations, we complete a formal Security Rule risk assessment and identify technical, administrative, and physical safeguard gaps." },
      { step: "Phase 3", title: "Remediation", desc: "We draft or update your BAAs, workforce policies, and incident response playbook. We work with teams on minimum-necessary controls." },
      { step: "Phase 4", title: "Ongoing Support", desc: "Health data law is fast-moving. We offer retainer advisory for organisations that need ongoing counsel as state laws proliferate." },
    ],
    faqs: [
      { q: "We're a wellness app. Does HIPAA apply to us?", a: "Probably not directly — but the FTC Health Breach Notification Rule likely does if you collect health information and share it with third parties. Several states also have standalone laws that capture wellness apps explicitly." },
      { q: "What's a Business Associate Agreement and do we need one?", a: "A BAA is a contract required by HIPAA between a covered entity and any vendor that creates, receives, maintains, or transmits PHI on its behalf. If you're a SaaS vendor to hospitals, clinics, or insurers, you almost certainly need one. We can draft or review yours." },
      { q: "How often does a HIPAA risk assessment need to be done?", a: "HHS guidance says it should be ongoing and updated when there are significant changes — new systems, new data flows, acquisitions, or major product changes. Most organisations should do a formal assessment at least annually." },
    ],
    icon: Shield,
  },
  {
    slug: "regulatory-response",
    title: "Regulatory & Breach Response",
    subtitle: "Rapid support when things go wrong.",
    tagline: "Strategic guidance for breaches, regulator inquiries, and DSAR backlogs.",
    hero: "A data breach or regulatory inquiry moves fast. You need an advisor who has been in the room before — who knows what regulators actually look for, and how to communicate in a way that limits exposure and demonstrates credibility.",
    intro: [
      "When a breach is discovered or a regulator makes contact, the first 72 hours set the tone for everything that follows. The decisions you make in that window — who to notify, what to say, what remediation to announce — have consequences that last for years. We help you make those decisions well.",
      "We also support organisations that are dealing with more gradual crises: DSAR backlogs that are approaching deadline, regulator questionnaires that require careful responses, or enforcement investigations that need a coordinated communications strategy. Our team has navigated all of these, and we know how to respond in ways that demonstrate accountability without unnecessarily increasing exposure.",
    ],
    whoFor: [
      "Companies that have discovered or suspect a data breach",
      "Organisations that have received a regulator inquiry, investigation notice, or enforcement letter",
      "Teams managing a DSAR backlog approaching statutory deadlines",
      "Companies preparing a response to a data breach class action",
      "Boards and executive teams needing to understand liability and disclosure obligations",
    ],
    deliverables: [
      "Breach scope and notification obligation analysis (72-hour GDPR / state law timelines)",
      "Regulator notification drafts reviewed and communications strategy",
      "Affected individual notification templates and FAQ content",
      "DSAR triage, prioritisation, and rapid-response process",
      "Post-incident remediation roadmap and regulator undertakings support",
      "Board and executive briefing on liability exposure and disclosure obligations",
    ],
    process: [
      { step: "Hour 0–24", title: "Triage", desc: "We assess scope, identify notification obligations, and advise on containment. We work alongside your incident response teams." },
      { step: "Hour 24–72", title: "Notification", desc: "Where required, we draft and review regulator notifications. We help you say what you need to say — clearly, factually, and without unnecessary admission." },
      { step: "Week 2–4", title: "Individual Notice & Response", desc: "Where affected individuals must be notified, we manage the process. For DSARs, we triage and operate the response pipeline." },
      { step: "Ongoing", title: "Remediation & Engagement", desc: "We support you through regulator follow-up, enforcement undertakings, and the post-incident audit that most regulators require." },
    ],
    faqs: [
      { q: "We think we've had a breach but we're not sure. Should we call you?", a: "Yes — immediately. One of the most common mistakes is waiting until you're certain before seeking advice. The 72-hour clock under GDPR starts from when you become aware of a likely breach, not when you've confirmed every detail." },
      { q: "Can you work alongside our external advisors?", a: "Always. We operate as the operational privacy advisors; your external team handles formal advice. This is the standard model and we're experienced at working in that structure." },
      { q: "We have 200 overdue DSARs. Can you help?", a: "Yes. DSAR backlogs are one of the most common urgent engagements we handle. We triage by risk, set up a response pipeline, and work through the backlog systematically — while helping you build a process to prevent it happening again." },
    ],
    icon: AlertCircle,
  },
];