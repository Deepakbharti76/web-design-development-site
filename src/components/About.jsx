import { process } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section section--raised">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About the studio</span>
          <h2>Websites built for how local businesses actually work</h2>
          <p>
            Web Design & Development builds responsive, modern and reliable websites and web applications for
            businesses, startups, shops, cafes, schools, professionals and home-based businesses across Ghaziabad
            and the wider NCR region. The focus is simple: a website that looks credible, loads fast and makes it
            easy for a potential customer to get in touch.
          </p>
        </div>

        <div className="process reveal">
          {process.map((s) => (
            <div className="process-step" key={s.num}>
              <span className="process-step__num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
