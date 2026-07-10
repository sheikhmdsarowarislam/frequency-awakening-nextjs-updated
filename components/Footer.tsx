export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="foot-about">
          <a href="#top" className="logo">
            <span className="mark" />
            <span className="title">
              THE FREQUENCY<small>AWAKENING</small>
            </span>
          </a>
          <p>Discover Knowledge, Insight &amp; Wellness. Explore the paths that inspire your journey.</p>
          <div className="foot-social">
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="X">✕</a>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#platforms">Our Platforms</a></li>
            <li><a href="#videos">Blog</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#connect">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Our Platforms</h5>
          <ul>
            <li><a href="#platforms">AlephTalks</a></li>
            <li><a href="#platforms">Astrology</a></li>
            <li><a href="#platforms">OlyLife</a></li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>
        <div className="foot-quote">
          &quot;The biggest rewards rarely arrive once everyone else has already noticed.&quot;
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 The Frequency Awakening. All Rights Reserved.</span>
        <span>OlyLife products are wellness devices and are not intended to diagnose, treat, cure, or prevent any disease.</span>
      </div>
    </footer>
  );
}
