"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: replace with your real newsletter signup call (Mailchimp, ConvertKit, your own API, etc.)
    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="newsletter" id="connect">
      <div className="nl-box">
        <div>
          <h3>Stay Connected</h3>
          <p>Subscribe for updates, insights, and exclusive content from all three platforms.</p>
        </div>
        <form className="nl-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
