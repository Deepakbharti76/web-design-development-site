import { whyChooseUs } from "../data/content.js";
import { IconCheck } from "./Icons.jsx";

export default function WhyChooseUs() {
  return (
    <section className="section section--raised">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why work with us</span>
          <h2>What you can expect from every project</h2>
        </div>

        <div className="why-grid reveal">
          {whyChooseUs.map((w) => (
            <div className="why-item" key={w.title}>
              <IconCheck />
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
