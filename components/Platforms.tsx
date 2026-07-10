const PLATFORMS = [
  {
    key: "aleph",
    img: "https://img.magnific.com/premium-photo/microphone-dark-background-with-smoke_488220-10027.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Studio microphone representing AlephTalks podcast",
    icon: "🎙",
    title: "AlephTalks",
    desc: "Personal development and spiritual conversations — podcasts, YouTube content, and a community built around honest growth.",
    enter: "Enter AlephTalks",
  },
  {
    key: "astro",
    img: "https://media.istockphoto.com/id/1158606686/vector/vector-illustration-of-horoscope-circle-zodiac-signs-and-pictograms-astrology-planets.jpg?s=170667a&w=0&k=20&c=F-Bm3pGau6ZuYKwjxyNX4RyD1n0MuQp_ap6E_gSy3b4=",
    alt: "Zodiac wheel representing astrology charts",
    icon: "✦",
    title: "Astrology",
    desc: "Horoscopes, birth charts, and astrology readings — courses and guidance for anyone learning to read their own chart.",
    enter: "Enter Astrology",
  },
  {
    key: "olylife",
    img: "https://png.pngtree.com/thumb_back/fw800/background/20260311/pngtree-closeup-of-vibrant-green-leaves-with-water-droplets-image_21529699.webp",
    alt: "Green leaves representing OlyLife wellness",
    icon: "🌿",
    title: "OlyLife",
    desc: "Electromagnetic holistic wellness products — education, research, and solutions for a more balanced daily life.",
    enter: "Enter OlyLife",
  },
];

export default function Platforms() {
  return (
    <section className="platforms" id="platforms">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Platforms</span>
          <h2>Three paths, one awakening</h2>
          <p>
            Personal development, astrology, and holistic wellness — each with its own home, all guided by the same
            intention.
          </p>
        </div>
        <div className="card-grid">
          {PLATFORMS.map((p) => (
            <div className={`p-card ${p.key}`} key={p.key}>
              <div className="thumb-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} />
              </div>
              <div className="icon-badge">{p.icon}</div>
              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#" className="enter">
                  {p.enter}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
