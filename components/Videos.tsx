const VIDEOS = [
  {
    id: "ybZgXiUN6FI",
    alt: "The Key to Spiritual Awakening video thumbnail",
    tag: "AlephTalks",
    title: "The Key to Spiritual Awakening — Consciousness, Explained",
  },
  {
    id: "eCXgA5K22GI",
    alt: "963Hz frequency spiritual awakening video thumbnail",
    tag: "OlyLife",
    title: "Energy & Frequency: The Science Behind the Feeling",
  },
  {
    id: "W1s23eDKRQs",
    alt: "Astrology for beginners video thumbnail",
    tag: "Astrology",
    title: "Astrology for Beginners: Reading Your First Birth Chart",
  },
];

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="videos-head">
        <div>
          <span className="eyebrow">Featured Videos</span>
          <h2>Start where curiosity is loudest</h2>
        </div>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="view-all">
          View All Videos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
      <div className="video-grid">
        {VIDEOS.map((v) => (
          <a
            className="v-card"
            key={v.id}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="v-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.alt} />
              <span className="play">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A0F1C">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <div className="v-info">
              <span className="tag">{v.tag}</span>
              <h4>{v.title}</h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
