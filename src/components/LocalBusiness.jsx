import { localBusinessTypes } from "../data/content.js";
import { IconCheck } from "./Icons.jsx";

export default function LocalBusiness() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Built for your neighbourhood</span>
          <h2>Web development for local businesses</h2>
          <p>
            A professional website helps local businesses establish an online presence, showcase products or
            services clearly, and receive enquiries directly from people searching nearby — whether that's a cafe
            in Indirapuram or a coaching institute in Crossing Republik.
          </p>
        </div>

        <div className="biz-grid reveal">
          {localBusinessTypes.map((b) => (
            <div className="biz-chip" key={b.name}>
              <IconCheck /> {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
