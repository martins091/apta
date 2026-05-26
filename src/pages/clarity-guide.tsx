import React, { useState } from 'react';

const PrivacyCareerGuide: React.FC = () => {
  // State to store user answers
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="font-sans antialiased bg-[#E8E4DF] py-20 print:py-0">
      {/* PAGE 1 — CLARITY QUESTIONS */}
      <div className="w-[794px] min-h-[1123px] mx-auto mb-8 bg-white shadow-xl flex flex-col relative overflow-hidden print:shadow-none print:mb-0 print:break-after-page">
        {/* Page Header */}
        <div className="bg-[#5C1A2E] flex flex-col">
          <div className="w-full h-1.5 bg-[#E8B84B]"></div>
          <div className="px-[52px] pt-8 pb-7 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-[4px] uppercase text-[#2BA8BC] mb-1.5">Privacy Career Clarity Guide</div>
              <div className="font-serif text-[28px] font-bold text-white leading-tight">
                Before you pick a cert,<br />answer <em className="text-[#E8B84B] not-italic">these questions.</em>
              </div>
            </div>
            <div className="font-mono text-[11px] text-white/30 tracking-[2px] pb-1">PAGE 01 / 03</div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 px-[52px] py-9">
          {/* Intro Box */}
          <div className="bg-[#F7EEF1] border-l-4 border-[#5C1A2E] rounded-r-lg px-[22px] py-[18px] mb-6">
            <p className="text-sm text-[#7A2440] font-normal leading-relaxed m-0">
              Most people jump straight to "which certification should I get?" That's the wrong first question. The right first question is: <strong className="font-bold text-[#1C1C1C]">what do you actually want from a privacy career?</strong> This guide will help you get clear — so every decision you make from here is intentional, not reactive.
            </p>
          </div>

          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">Part One: Know Where You Are</h2>

          {/* Question Cards */}
          <div className="my-5 space-y-3">
            {[
              { id: 'q1', title: 'What is your current professional background?', subtitle: 'Your existing skills are not irrelevant — they are your starting point. Legal, HR, IT, compliance, and marketing backgrounds all map to different privacy entry points.', color: '#2BA8BC' },
              { id: 'q2', title: 'Have you worked with privacy in any capacity — even informally?', subtitle: 'Many people have more privacy experience than they realise. GDPR compliance, data handling, consent forms, vendor due diligence — these all count.', color: '#E8B84B' },
              { id: 'q3', title: 'Why do you want to move into privacy — and why now?', subtitle: 'This matters more than you think. Motivation shapes consistency. And "because it pays well" is a valid answer — but knowing your real reason helps you stay the course when it gets hard.', color: '#5C1A2E' }
            ].map((q, idx) => (
              <div key={q.id} className="bg-[#FAF7F2] rounded-xl p-5 pt-[22px] border-t-[3px]" style={{ borderTopColor: q.color }}>
                <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: q.color }}>Question {String(idx + 1).padStart(2, '0')}</div>
                <div className="font-serif text-[15px] font-bold text-[#1C1C1C] leading-tight mb-2">{q.title}</div>
                <div className="text-xs text-[#555555] font-light italic leading-relaxed mb-2">{q.subtitle}</div>
                <textarea
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full bg-white border border-dashed border-[#CCC] rounded-md p-2.5 text-[11px] text-[#1C1C1C] focus:outline-none focus:border-[#2BA8BC] resize-vertical min-h-[60px]"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
          </div>

          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">Part Two: Know Where You're Going</h2>

          <div className="my-5 space-y-3">
            {[
              { id: 'q4', title: 'What does your ideal privacy role actually look like day to day?', subtitle: 'Do you want to be in courtrooms and contracts? Building programs and policies? Advising on AI systems? Speaking to boards? Each answer points to a different specialisation — and a different certification path.', color: '#2BA8BC' },
              { id: 'q5', title: 'What salary do you need — and what salary do you want?', subtitle: 'There\'s a difference between the number that pays your bills and the number that reflects your worth. Know both. Privacy roles start from $70K and reach $250K+ — where you land depends heavily on the path you choose.', color: '#E8B84B' },
              { id: 'q6', title: 'Do you want to work in-house, at a consultancy, or independently?', subtitle: 'In-house means stability and depth. Consultancy means breadth and variety. Independent means freedom and risk. Each model suits a different personality — and each favours different certifications and skill stacks.', color: '#5C1A2E' }
            ].map((q, idx) => (
              <div key={q.id} className="bg-[#FAF7F2] rounded-xl p-5 pt-[22px] border-t-[3px]" style={{ borderTopColor: q.color }}>
                <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: q.color }}>Question {String(idx + 4).padStart(2, '0')}</div>
                <div className="font-serif text-[15px] font-bold text-[#1C1C1C] leading-tight mb-2">{q.title}</div>
                <div className="text-xs text-[#555555] font-light italic leading-relaxed mb-2">{q.subtitle}</div>
                <textarea
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full bg-white border border-dashed border-[#CCC] rounded-md p-2.5 text-[11px] text-[#1C1C1C] focus:outline-none focus:border-[#2BA8BC] resize-vertical min-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Page Footer */}
        <div className="bg-[#5C1A2E] px-[52px] py-2 flex justify-between items-center border-t-2 border-[#E8B84B]">
          <span className="text-[9px] text-white/30 tracking-[1px]">Privacy Career Clarity Guide · 2026</span>
          <span className="text-[9px] font-mono text-[#2BA8BC]">calendly.com/akanachuma/30min</span>
        </div>
      </div>

      {/* PAGE 2 — DEEPER QUESTIONS + CERT OVERVIEW */}
      <div className="w-[794px] min-h-[1123px] mx-auto mb-8 bg-white shadow-xl flex flex-col relative overflow-hidden print:shadow-none print:mb-0 print:break-after-page">
        <div className="bg-[#5C1A2E] flex flex-col">
          <div className="w-full h-1.5 bg-[#E8B84B]"></div>
          <div className="px-[52px] pt-8 pb-7 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-[4px] uppercase text-[#2BA8BC] mb-1.5">Privacy Career Clarity Guide</div>
              <div className="font-serif text-[28px] font-bold text-white leading-tight">
                The certifications — <em className="text-[#E8B84B] not-italic">plainly explained.</em>
              </div>
            </div>
            <div className="font-mono text-[11px] text-white/30 tracking-[2px] pb-1">PAGE 02 / 03</div>
          </div>
        </div>

        <div className="flex-1 px-[52px] py-9">
          <div className="my-5 space-y-3">
            {[
              { id: 'q7', title: 'Is your focus US-based, European, or global?', subtitle: 'This single answer narrows your first certification immediately. US market → CIPP/US. EU clients or GDPR obligations → CIPP/E. Both → start with whichever is most relevant to your current employer or target roles.', color: '#2BA8BC' },
              { id: 'q8', title: 'Are you more drawn to legal and policy work — or to building and managing programs?', subtitle: 'Legal and policy work → CIPP credentials are your foundation. Building and managing programs → CIPM is your next step. Both answers are valid. Knowing which excites you more tells you a great deal about where your career will thrive.', color: '#E8B84B' },
              { id: 'q9', title: 'Does AI governance interest you — or does it feel like noise?', subtitle: 'If it genuinely interests you, AIGP is one of the highest-ROI credentials in compliance right now. If it feels like a distraction, that\'s okay — get grounded in CIPP first. You can always layer it later. Never chase a credential you won\'t use.', color: '#5C1A2E' }
            ].map((q, idx) => (
              <div key={q.id} className="bg-[#FAF7F2] rounded-xl p-5 pt-[22px] border-t-[3px]" style={{ borderTopColor: q.color }}>
                <div className="font-mono text-[10px] font-bold tracking-[2px] uppercase mb-1.5" style={{ color: q.color }}>Question {String(idx + 7).padStart(2, '0')}</div>
                <div className="font-serif text-[15px] font-bold text-[#1C1C1C] leading-tight mb-2">{q.title}</div>
                <div className="text-xs text-[#555555] font-light italic leading-relaxed mb-2">{q.subtitle}</div>
                <textarea
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full bg-white border border-dashed border-[#CCC] rounded-md p-2.5 text-[11px] text-[#1C1C1C] focus:outline-none focus:border-[#2BA8BC] resize-vertical min-h-[60px]"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
          </div>

          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">The Four Certifications — No Jargon</h2>
          <p className="text-[13.5px] text-[#333] font-light leading-relaxed mb-3">Here is what each certification actually covers, who it is for, and what it opens up. Read all four before deciding anything.</p>

          <div className="grid grid-cols-2 gap-3.5 my-4">
            {/* CARD 1 - CIPP/US */}
            <div className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#5C1A2E] px-[18px] pt-[14px] pb-3">
                <div className="font-mono text-lg font-bold text-[#E8B84B] mb-0.5">CIPP/US</div>
                <div className="text-[10px] text-white/60 font-light leading-tight">Certified Information Privacy Professional — United States</div>
              </div>
              <div className="px-[18px] pt-[14px] pb-[18px]">
                <div className="inline-block bg-[#F7EEF1] text-[#5C1A2E] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wide">Start Here — US Market</div>
                <div className="text-xs text-[#444] font-light leading-relaxed mb-2.5">Covers US federal and state privacy laws — CCPA, HIPAA, COPPA, FERPA, and the 20+ state frameworks now in force. It teaches you what the law says and how it applies to real organisations.</div>
                <div className="text-[11px] font-bold text-[#1C1C1C] mb-1 uppercase tracking-wide">Best For</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Anyone targeting US-based employers</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Career changers from legal or compliance</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-3">→ Professionals working with US consumer data</div>
                <div className="bg-[#FAF7F2] rounded-md p-2 flex items-center gap-2">
                  <div className="font-serif text-base font-bold text-[#5C1A2E]">$80K+</div>
                  <div className="text-[10px] text-[#555555] font-light leading-tight">Starting salary with this credential</div>
                </div>
              </div>
            </div>

            {/* CARD 2 - CIPP/E */}
            <div className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#1A7A8A] px-[18px] pt-[14px] pb-3">
                <div className="font-mono text-lg font-bold text-white mb-0.5">CIPP/E</div>
                <div className="text-[10px] text-white/60 font-light leading-tight">Certified Information Privacy Professional — Europe</div>
              </div>
              <div className="px-[18px] pt-[14px] pb-[18px]">
                <div className="inline-block bg-[#E6F4F6] text-[#1A7A8A] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wide">Start Here — EU/Global</div>
                <div className="text-xs text-[#444] font-light leading-relaxed mb-2.5">The most internationally recognised privacy credential in the world. Deep coverage of GDPR — lawful bases, data subject rights, transfers, DPO obligations, and enforcement. Essential if your work touches European data at all.</div>
                <div className="text-[11px] font-bold text-[#1C1C1C] mb-1 uppercase tracking-wide">Best For</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Anyone working with EU personal data</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Aspiring DPOs — GDPR requires it</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-3">→ Professionals in UK, EU, or multinational companies</div>
                <div className="bg-[#FAF7F2] rounded-md p-2 flex items-center gap-2">
                  <div className="font-serif text-base font-bold text-[#5C1A2E]">$85K+</div>
                  <div className="text-[10px] text-[#555555] font-light leading-tight">Starting salary with this credential</div>
                </div>
              </div>
            </div>

            {/* CARD 3 - CIPM */}
            <div className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#0E5C6A] px-[18px] pt-[14px] pb-3">
                <div className="font-mono text-lg font-bold text-[#2BA8BC] mb-0.5">CIPM</div>
                <div className="text-[10px] text-white/60 font-light leading-tight">Certified Information Privacy Manager</div>
              </div>
              <div className="px-[18px] pt-[14px] pb-[18px]">
                <div className="inline-block bg-[#E6F4F6] text-[#1A7A8A] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wide">Second Credential — Program Leaders</div>
                <div className="text-xs text-[#444] font-light leading-relaxed mb-2.5">Shifts from knowing the law to running the program. Covers how to build, implement, and manage a privacy program across a real organisation — policies, training, vendor management, and governance structures.</div>
                <div className="text-[11px] font-bold text-[#1C1C1C] mb-1 uppercase tracking-wide">Best For</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Professionals moving into management</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Anyone building a privacy program from scratch</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-3">→ Those targeting Privacy Manager or DPO titles</div>
                <div className="bg-[#FAF7F2] rounded-md p-2 flex items-center gap-2">
                  <div className="font-serif text-base font-bold text-[#5C1A2E]">$120K+</div>
                  <div className="text-[10px] text-[#555555] font-light leading-tight">Typical salary with CIPP + CIPM stack</div>
                </div>
              </div>
            </div>

            {/* CARD 4 - AIGP */}
            <div className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#9A6E00] px-[18px] pt-[14px] pb-3">
                <div className="font-mono text-lg font-bold text-[#E8B84B] mb-0.5">AIGP</div>
                <div className="text-[10px] text-white/60 font-light leading-tight">AI Governance Professional</div>
              </div>
              <div className="px-[18px] pt-[14px] pb-[18px]">
                <div className="inline-block bg-[#FDF6E3] text-[#9A6E00] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wide">Highest Salary Premium — 2026</div>
                <div className="text-xs text-[#444] font-light leading-relaxed mb-2.5">Covers AI governance frameworks, the EU AI Act, risk assessment for AI systems, and how to govern AI responsibly inside an organisation. The fastest-growing credential in compliance right now — and the one commanding the biggest salary premium.</div>
                <div className="text-[11px] font-bold text-[#1C1C1C] mb-1 uppercase tracking-wide">Best For</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Privacy pros adding AI governance to their profile</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-1">→ Those targeting dual privacy + AI governance roles</div>
                <div className="text-[11.5px] text-[#555] font-light pl-3.5 relative leading-relaxed mb-3">→ Professionals in tech, financial services, healthcare</div>
                <div className="bg-[#FAF7F2] rounded-md p-2 flex items-center gap-2">
                  <div className="font-serif text-base font-bold text-[#5C1A2E]">$169K+</div>
                  <div className="text-[10px] text-[#555555] font-light leading-tight">Median salary — privacy + AI governance combined</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#5C1A2E] px-[52px] py-2 flex justify-between items-center border-t-2 border-[#E8B84B]">
          <span className="text-[9px] text-white/30 tracking-[1px]">Privacy Career Clarity Guide · 2026</span>
          <span className="text-[9px] font-mono text-[#2BA8BC]">calendly.com/akanachuma/30min</span>
        </div>
      </div>

      {/* PAGE 3 — YOUR PATH + NEXT STEP */}
      <div className="w-[794px] min-h-[1123px] mx-auto mb-8 bg-white shadow-xl flex flex-col relative overflow-hidden print:shadow-none print:mb-0">
        <div className="bg-[#5C1A2E] flex flex-col">
          <div className="w-full h-1.5 bg-[#E8B84B]"></div>
          <div className="px-[52px] pt-8 pb-7 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-[4px] uppercase text-[#2BA8BC] mb-1.5">Privacy Career Clarity Guide</div>
              <div className="font-serif text-[28px] font-bold text-white leading-tight">
                Now find <em className="text-[#E8B84B] not-italic">your path.</em>
              </div>
            </div>
            <div className="font-mono text-[11px] text-white/30 tracking-[2px] pb-1">PAGE 03 / 03</div>
          </div>
        </div>

        <div className="flex-1 px-[52px] py-9">
          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">The Certification Decision Guide</h2>
          <p className="text-[13.5px] text-[#333] font-light leading-relaxed mb-3">Use your answers from pages 1 and 2. Match your situation to the recommendation below. If more than one applies, start with the first match.</p>

          <div className="my-5 space-y-2.5">
            {[
              { condition: "You are US-based and targeting US employers or clients", result: "Start with CIPP/US" },
              { condition: "Your work involves EU data, GDPR, or you want DPO eligibility", result: "Start with CIPP/E" },
              { condition: "You already have a CIPP and want to move into program leadership", result: "Add CIPM next" },
              { condition: "You want the highest salary premium and AI genuinely interests you", result: "Add AIGP third" },
              { condition: "You are a technologist or engineer transitioning into privacy", result: "Consider CIPT alongside CIPP" },
              { condition: "You serve both US and EU clients or work in a global company", result: "Get both CIPP/US + CIPP/E" }
            ].map((item, i) => (
              <div key={i} className="flex items-stretch">
                <div className="bg-[#5C1A2E] text-white text-[10px] font-bold tracking-[2px] uppercase px-[14px] py-3 rounded-l-lg flex items-center justify-center min-w-[52px]">IF</div>
                <div className="bg-[#FAF7F2] px-4 py-3 flex-1 text-[13px] font-light text-[#333] flex items-center leading-relaxed">{item.condition}</div>
                <div className="bg-[#FAF7F2] px-2 py-3 text-base text-[#1A7A8A] flex items-center">→</div>
                <div className="bg-[#1A7A8A] text-white px-4 py-3 rounded-r-lg text-xs font-bold flex items-center min-w-[140px] leading-tight">{item.result}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-[#1A7A8A] bg-[#E6F4F6] rounded-r-lg px-[18px] py-[14px] my-[18px]">
            <p className="text-[13px] text-[#333] leading-relaxed m-0"><strong className="font-bold">Important:</strong> Most privacy roles now require some AI governance awareness. Most AI governance roles do not require a privacy background. This means your privacy foundation is the more transferable asset — and AIGP layers on top of it to unlock the highest-paying tier in the market.</p>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
          </div>

          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">Quick Reference — At a Glance</h2>

          <table className="w-full border-collapse my-4 text-[12.5px]">
            <thead>
              <tr className="bg-[#5C1A2E]">
                <th className="px-[14px] py-2.5 text-left font-semibold text-[11px] text-white tracking-wide rounded-tl-md">Cert</th>
                <th className="px-[14px] py-2.5 text-left font-semibold text-[11px] text-white tracking-wide">Focus</th>
                <th className="px-[14px] py-2.5 text-left font-semibold text-[11px] text-white tracking-wide">Best First If...</th>
                <th className="px-[14px] py-2.5 text-left font-semibold text-[11px] text-white tracking-wide rounded-tr-md">Salary Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#EEE] even:bg-[#FAF7F2]">
                <td className="px-[14px] py-2.5 font-mono text-[13px] font-semibold text-[#5C1A2E] align-top">CIPP/US</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">US privacy law and state frameworks</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">You are in or targeting the US market</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">$80K+ entry</td>
              </tr>
              <tr className="border-b border-[#EEE] even:bg-[#FAF7F2]">
                <td className="px-[14px] py-2.5 font-mono text-[13px] font-semibold text-[#5C1A2E] align-top">CIPP/E</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">GDPR and European data law</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">Your work touches EU data at all</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">$85K+ entry</td>
              </tr>
              <tr className="border-b border-[#EEE] even:bg-[#FAF7F2]">
                <td className="px-[14px] py-2.5 font-mono text-[13px] font-semibold text-[#5C1A2E] align-top">CIPM</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">Building and running privacy programs</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">You want to lead, not just execute</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">+13% premium</td>
              </tr>
              <tr className="border-b border-[#EEE] even:bg-[#FAF7F2]">
                <td className="px-[14px] py-2.5 font-mono text-[13px] font-semibold text-[#5C1A2E] align-top">AIGP</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">AI governance, EU AI Act, risk assessment</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">You want the highest salary tier</td>
                <td className="px-[14px] py-2.5 font-light text-[#333] align-top">$169K+ median</td>
              </tr>
            </tbody>
          </table>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
            <div className="flex-1 h-px bg-[#EEEEEE]"></div>
          </div>

          <h2 className="font-serif text-xl font-bold text-[#5C1A2E] mt-0 mb-2.5">One Final Question</h2>

          <div className="bg-[#FAF7F2] rounded-xl p-5 pt-[22px] border-t-[3px] border-t-[#E8B84B] mb-5">
            <div className="font-mono text-[10px] font-bold tracking-[2px] text-[#E8B84B] uppercase mb-1.5">Question 10 — The Most Important One</div>
            <div className="font-serif text-[15px] font-bold text-[#1C1C1C] leading-tight mb-2">What would it mean for your life if you landed the right privacy role in the next 90 days?</div>
            <div className="text-xs text-[#555555] font-light italic leading-relaxed mb-2">Write this down. Seriously. Not for anyone else — for you. The clearer your answer, the more motivated you will be when the studying gets hard, the applications feel slow, and the process tests your patience. This answer is your reason. Come back to it.</div>
            <textarea
              value={answers.q10 || ''}
              onChange={(e) => handleAnswerChange('q10', e.target.value)}
              placeholder="Write your answer here..."
              className="w-full bg-white border border-dashed border-[#CCC] rounded-md p-2.5 text-[11px] text-[#1C1C1C] focus:outline-none focus:border-[#2BA8BC] resize-vertical min-h-[80px]"
            />
          </div>

          <div className="border-l-4 border-[#5C1A2E] bg-[#F7EEF1] rounded-r-lg px-[18px] py-[14px] my-[18px]">
            <p className="text-[13px] text-[#333] leading-relaxed m-0"><strong className="font-bold">Remember:</strong> There is no universally correct certification to start with. There is only the right one for where you are, where you are going, and who you are becoming. The clarity you build here is more valuable than any credential — because it means every step you take from here is deliberate.</p>
          </div>
        </div>

        <div className="bg-[#5C1A2E] px-[52px] py-5 flex justify-between items-center border-t-[3px] border-[#E8B84B]">
          <div>
            <div className="font-serif text-[15px] font-bold text-white mb-0.5">Ready to turn this clarity into a plan?</div>
            <div className="text-[11px] text-white/50">Book a free 30-minute strategy call. We'll map out your exact next step together.</div>
          </div>
          <div className="font-mono text-xs font-bold text-[#2BA8BC]">calendly.com/akanachuma/30min</div>
        </div>

        <div className="bg-[#5C1A2E] px-[52px] py-2 flex justify-between items-center border-t-2 border-[#E8B84B]">
          <span className="text-[9px] text-white/30 tracking-[1px]">Privacy Career Clarity Guide · 2026</span>
          <span className="text-[9px] font-mono text-[#2BA8BC]">calendly.com/akanachuma/30min</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyCareerGuide;