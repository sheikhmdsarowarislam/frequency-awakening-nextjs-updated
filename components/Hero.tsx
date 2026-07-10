export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-field" />
      <div className="hero-art" aria-hidden="true">
        <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glowSoft" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glowWide" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <radialGradient id="gGreen" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#33D6A6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#33D6A6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gOrange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F2884B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F2884B" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="180" cy="420" rx="360" ry="360" fill="url(#gGreen)" filter="url(#glowWide)" />
          <ellipse cx="1440" cy="300" rx="420" ry="420" fill="url(#gOrange)" filter="url(#glowWide)" />

          <g filter="url(#glowSoft)" fill="none" stroke="#33D6A6" strokeLinecap="round">
            <path d="M-40 120 C 140 150, 120 260, 260 300 S 380 420, 300 520" strokeWidth="2" opacity="0.55" />
            <path d="M-20 260 C 120 300, 160 380, 90 470 S 200 600, 140 700" strokeWidth="1.4" opacity="0.4" />
            <path d="M60 60 C 180 90, 150 190, 280 210 S 340 300, 260 360" strokeWidth="1.2" opacity="0.35" />
            <path d="M0 500 C 100 520, 130 600, 240 610" strokeWidth="1.2" opacity="0.3" />
          </g>

          <g filter="url(#glowSoft)" fill="none" stroke="#F2884B" strokeLinecap="round">
            <path
              d="M1640 90 C 1460 130, 1500 240, 1360 300 S 1260 420, 1340 520 S 1220 640, 1300 720"
              strokeWidth="2"
              opacity="0.6"
            />
            <path d="M1600 260 C 1470 300, 1430 380, 1500 460 S 1400 560, 1460 660" strokeWidth="1.4" opacity="0.45" />
            <path d="M1620 460 C 1500 480, 1470 540, 1550 590" strokeWidth="1.2" opacity="0.35" />
            <path d="M1560 40 C 1440 80, 1470 160, 1380 190" strokeWidth="1.2" opacity="0.3" />
          </g>

          <g fill="#EAF0F7">
            <circle cx="260" cy="300" r="2.2" opacity="0.7" />
            <circle cx="140" cy="700" r="1.8" opacity="0.55" />
            <circle cx="1340" cy="520" r="2.2" opacity="0.7" />
            <circle cx="1460" cy="660" r="1.8" opacity="0.55" />
            <circle cx="1550" cy="590" r="1.6" opacity="0.5" />
          </g>
        </svg>
      </div>
      <div className="hero-inner">
        <span className="eyebrow-pill">
          <span className="dot" />
          Discover Knowledge, Insight &amp; Wellness
        </span>
        <h1>
          A New Frontier In <span className="grad">Health &amp; Awakening</span>
        </h1>
        <p className="lead">
          Explore the paths that inspire your journey — consciousness, astrology, and holistic wellness, brought
          together in one place built for people who want to understand before they arrive.
        </p>
        <div className="hero-ctas">
          <a href="#platforms" className="btn btn-primary">
            Explore the Platforms
          </a>
          <a href="#videos" className="btn btn-outline">
            Watch the Videos
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>3</strong>
            <span>Guided Platforms</span>
          </div>
          <div className="hdiv" />
          <div className="stat">
            <strong>Global</strong>
            <span>Community</span>
          </div>
          <div className="hdiv" />
          <div className="stat">
            <strong>Est. 2024</strong>
            <span>The Frequency Awakening</span>
          </div>
        </div>
        <svg className="hero-pulse" viewBox="0 0 520 60" fill="none">
          <path
            d="M0 30 H160 L180 8 L200 52 L220 20 L240 40 L260 30 H360 L380 10 L400 50 L420 30 H520"
            stroke="url(#gp)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gp" x1="0" y1="0" x2="520" y2="0">
              <stop offset="0%" stopColor="#33D6A6" />
              <stop offset="55%" stopColor="#D9A857" />
              <stop offset="100%" stopColor="#F2884B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hero-bottom-fade" />
    </section>
  );
}
