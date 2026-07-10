export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20260311/pngtree-closeup-of-vibrant-green-leaves-with-water-droplets-image_21529699.webp"
            alt="Nature imagery representing balance and wellness"
          />
        </div>
        <div className="about-text">
          <span className="eyebrow">About Us</span>
          <h2>We&apos;re building the bridge between curiosity and understanding</h2>
          <p>
            The Frequency Awakening exists to help people explore consciousness, personal development, astrology, and
            holistic wellness — without the noise. We believe the biggest shifts rarely happen once everyone has
            arrived; they belong to those who recognize a new wave while it&apos;s still forming.
          </p>
          <p className="quote">&quot;The journey of a thousand miles begins with a single frequency.&quot;</p>
          <a href="#connect" className="btn btn-outline">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
