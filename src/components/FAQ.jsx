import { useState } from "react";
import { faqs } from "../data/content.js";
import { IconPlus } from "./Icons.jsx";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section section--raised">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Common questions</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="reveal" style={{ maxWidth: 760 }}>
          {faqs.map((f, i) => (
            <div className={`faq-item ${openIdx === i ? "open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
              >
                {f.q}
                <IconPlus />
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
