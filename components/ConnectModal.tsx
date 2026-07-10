"use client";

import { useEffect, useState, FormEvent } from "react";
import { useConnectModal } from "./ConnectModalContext";

export default function ConnectModal() {
  const { isOpen, close } = useConnectModal();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "" });
  const [consentMarketing, setConsentMarketing] = useState(true);
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const isReady = Object.values(form).every((v) => v.trim() !== "");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isReady) return;
    // TODO: replace with your real submit logic (API call, email service, CRM, etc.)
    setStatus("sent");
    setTimeout(() => {
      close();
      setStatus("idle");
      setForm({ firstName: "", lastName: "", phone: "", email: "" });
      setConsentMarketing(true);
      setConsentTransactional(false);
    }, 1400);
  }

  return (
    <div
      className={`modal-overlay${isOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="connectModalTitle">
        <button className="modal-close" aria-label="Close" onClick={close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-eyebrow">
          <span className="dot" />
          Get Product Info
        </div>
        <h3 id="connectModalTitle">Let&apos;s Connect</h3>
        <p>I am excited to connect with you and share more about this transformative technology.</p>
        <form onSubmit={handleSubmit}>
          <div className="f-row">
            <div className="f-group">
              <label>
                First Name <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                required
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="f-group">
              <label>
                Last Name <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                required
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="f-group f-full">
            <label>
              Phone <span className="req">*</span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div className="f-group f-full">
            <label>
              Email <span className="req">*</span>
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <label className="f-check">
            <input
              type="checkbox"
              checked={consentTransactional}
              onChange={(e) => setConsentTransactional(e.target.checked)}
            />
            <span>
              By checking this box, I consent to receive transactional messages related to my account, orders, or
              services I have requested from LightMinds Enterprises Pty Ltd. These messages may include appointment
              reminders, order confirmations, and account notifications among others. Message frequency may vary.
              Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
            </span>
          </label>
          <label className="f-check">
            <input
              type="checkbox"
              checked={consentMarketing}
              onChange={(e) => setConsentMarketing(e.target.checked)}
            />
            <span>
              By checking this box, I consent to receive marketing and promotional messages, including special
              offers, discounts, new product updates among others from LightMinds Enterprises Pty Ltd. Message
              frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
            </span>
          </label>
          <button type="submit" className={`modal-submit${isReady ? " ready" : ""}`}>
            {status === "sent" ? "Sent ✓" : "Submit"}
          </button>
        </form>
        <div className="modal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
