"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Clear answers about mobile callouts, pricing, and warranty",
}: {
  title?: string;
  subtitle?: string;
}) {
  const faqs: FAQItem[] = [
    {
      question: "What geographic areas do you cover with the mobile van?",
      answer:
        "We operate across Chesterfield, Dronfield, Staveley, Clay Cross, Bolsover, Matlock, Bakewell, Buxton, and South Sheffield. For specialist fleet contracts or immobiliser installations, we also travel throughout Derbyshire and Nottinghamshire borders.",
    },
    {
      question: "Do you come directly to my home or workplace?",
      answer:
        "Yes, our van is a fully self-contained mobile workshop with on-board 240V silent power, computerised key cutting machinery, soldering stations, and dealer diagnostic systems. You do not need to provide electricity or leave your desk.",
    },
    {
      question: "How does your pricing compare to main franchise dealerships?",
      answer:
        "Our diagnostic and key programming fees are typically 40% to 60% lower than franchised main dealers. Furthermore, because we come directly to you, you save recovery truck towing charges and multi-week booking delays.",
    },
    {
      question: "Can you cut and program a key if I have lost all original keys?",
      answer:
        "Yes. We specialize in 'All Keys Lost' scenarios. Using specialised lock decoding picks, we can safely decode the vehicle door lock without causing any damage, cut the physical blade, and program new electronic transponders into your car's immobiliser module.",
    },
    {
      question: "Is the Ghost 2 Immobiliser insurance approved?",
      answer:
        "Yes, the Autowatch Ghost 2 is accredited by TASSA (Tracking and Aftermarket Security System Association). We issue an official TASSA installation certificate upon completion, which can be presented to your UK motor insurance provider.",
    },
    {
      question: "What guarantee or warranty do you provide on work carried out?",
      answer:
        "All new electrical components, remotes, key blades, and wiring repairs come with a full 12-month guarantee. Software remapping calibrations come with a lifetime software file warranty.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066d6] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Support & Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1527] tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0066d6] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0066d6]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
