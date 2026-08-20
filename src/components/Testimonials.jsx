import { testimonials } from "../data/content.js";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Client feedback</span>
          <h2>What clients say</h2>
        </div>

        <p className="testi-note reveal">
          These are placeholder testimonials shown here to illustrate the layout. They will be replaced with
          genuine client reviews as projects are completed.
        </p>

        <div className="grid grid--3 reveal">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <p>"{t.quote}"</p>
              <div className="testi-card__who">
                <div className="testi-avatar">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}<span className="testi-placeholder-badge">Placeholder</span></strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
