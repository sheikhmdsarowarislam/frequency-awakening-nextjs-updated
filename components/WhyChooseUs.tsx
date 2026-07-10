const ITEMS = [
  {
    title: "Community",
    desc: "Join a global community of like-minded souls sharing the same questions.",
    path: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <circle cx="19" cy="8" r="3" />
      </>
    ),
  },
  {
    title: "Knowledge",
    desc: "Expand your mind with insights drawn from real research, not trends.",
    path: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />,
  },
  {
    title: "Transformation",
    desc: "Awaken your true potential and live with more intention, day to day.",
    path: (
      <path d="M12 21s-7-4.35-9.5-8.5C.6 9 2.5 5 6.5 5c2 0 3.4 1 4.5 2.5C12.1 6 13.5 5 15.5 5 19.5 5 21.4 9 19.5 12.5 17 16.65 12 21 12 21Z" />
    ),
  },
  {
    title: "Wellness",
    desc: "Holistic solutions built for a better, calmer, more balanced life.",
    path: (
      <>
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-grid">
        {ITEMS.map((item) => (
          <div className="why-item" key={item.title}>
            <div className="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {item.path}
              </svg>
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
