const AREAS = [
  "Crossing Republik",
  "Ghaziabad",
  "Indirapuram",
  "Noida Extension",
  "Greater Noida",
  "Gurugram",
  "Faridabad",
  "Delhi",
  "Pan India",
  "Remote Services",
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Web Design & Development</span>
          <h1>Professional Web Design & Development for Growing Businesses</h1>
          <p className="hero__sub">
            We design and develop modern, responsive and high-performance
            websites for businesses across India, helping them build a strong
            online presence and generate more enquiries.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Our Projects
            </a>
            <a
              href="https://wa.me/917644832949?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20project"
              className="btn btn-amber"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="hero__meta">
            <div>
              <strong>5+</strong>
              <span>Portfolio &amp; demo projects</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Core services offered</span>
            </div>
            <div>
              <strong>1–3 wks</strong>
              <span>Typical turnaround</span>
            </div>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__stack">
            <div className="hero__art-spacer" />
            <div className="chrome hero__card hero__card--back">
              <div className="chrome__bar">
                <span className="chrome__dot" />
                <span className="chrome__dot" />
                <span className="chrome__dot" />
                <span className="chrome__url">ecommerce-store.in</span>
              </div>
              <div className="hero__preview">
                <div className="hero__preview-img" />
                <div className="hero__block" />
                <div className="hero__block" />
                <div className="hero__block" />
              </div>
            </div>
            <div className="chrome hero__card hero__card--front">
              <div className="chrome__bar">
                <span className="chrome__dot" />
                <span className="chrome__dot" />
                <span className="chrome__dot" />
                <span className="chrome__url">yourbusiness.in</span>
              </div>
              <div className="hero__preview">
                <div className="hero__preview-img" />
                <div className="hero__block" />
                <div className="hero__block" />
                <div className="hero__block" />
              </div>
            </div>
            <span className="hero__pin">Live in 1–3 weeks</span>
          </div>
        </div>
      </div>

      <div className="ticker" aria-label="Areas we serve">
        <div className="ticker__track">
          {[...AREAS, ...AREAS].map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
