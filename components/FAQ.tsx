"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is The Frequency Awakening?",
    a: "The Frequency Awakening is a hub for consciousness, astrology, and holistic wellness content, bringing together three platforms — AlephTalks, Astrology, and OlyLife — under one guided experience.",
  },
  {
    q: "Do I need prior experience to start?",
    a: "No. Each platform is built for beginners as well as experienced practitioners, with content organized from introductory to advanced.",
  },
  {
    q: "Are OlyLife products medical devices?",
    a: "No. OlyLife products are wellness devices and are not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    q: "How often is new content published?",
    a: "New videos, readings, and articles are published regularly across all three platforms — subscribe to the newsletter to get notified.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2>Common questions</h2>
        <p>A few things people usually ask before they start.</p>
      </div>
      <div className="faq-wrap">
        {FAQS.map((item, i) => (
          <div className={`faq-item${openIndex === i ? " open" : ""}`} key={item.q}>
            <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {item.q}
              <span className="plus">+</span>
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
