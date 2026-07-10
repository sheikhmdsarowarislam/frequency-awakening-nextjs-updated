const TESTIMONIALS = [
  {
    quote:
      "AlephTalks gave language to things I'd felt for years but never had the words for. The conversations feel honest, never preachy.",
    initial: "R",
    color: "var(--emerald)",
    name: "Rima H.",
    role: "AlephTalks listener",
  },
  {
    quote:
      "My birth chart reading finally made sense of patterns I'd been trying to understand for years. Clear, grounded, not vague at all.",
    initial: "S",
    color: "var(--violet)",
    name: "Samir K.",
    role: "Astrology client",
  },
  {
    quote:
      "The OlyLife guidance helped me build a wind-down routine that actually stuck. Simple changes, real difference in how I sleep.",
    initial: "A",
    color: "var(--gold)",
    name: "Anika T.",
    role: "OlyLife member",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-head">
        <span className="eyebrow">Community Voices</span>
        <h2>Stories from the journey</h2>
        <p>Real reflections from people exploring AlephTalks, Astrology, and OlyLife.</p>
      </div>
      <div className="t-grid">
        {TESTIMONIALS.map((t) => (
          <div className="t-card" key={t.name}>
            <div className="t-stars">★★★★★</div>
            <p className="quote">{t.quote}</p>
            <div className="t-person">
              <div className="t-avatar" style={{ background: t.color }}>
                {t.initial}
              </div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
