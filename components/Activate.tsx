"use client";

import { useConnectModal } from "./ConnectModalContext";

export default function Activate() {
  const { open } = useConnectModal();

  return (
    <section className="activate">
      <div className="activate-card">
        <div className="activate-mark">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EAF0F7" strokeWidth="1.6">
            <path d="M2 12h4l2-7 4 14 2-7h8" />
          </svg>
        </div>
        <div className="activate-word">
          THE FREQUENCY<strong>AWAKENING</strong>
        </div>
        <h2>Ready To Activate Your Frequency?</h2>
        <p>
          If this resonates with you, let&apos;s connect. I&apos;ll answer your questions, share what I&apos;ve
          experienced, and help you decide the best next step.
        </p>
        <div className="activate-ctas">
          <a
            href="https://bartstuck.thefrequencyawakening.com/products"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Product Info
          </a>
          <a
            href="https://bartstuck.thefrequencyawakening.com/order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Submit Order Request
          </a>
          <button type="button" className="btn btn-primary" onClick={open}>
            Connect With Me
          </button>
        </div>
      </div>
    </section>
  );
}
