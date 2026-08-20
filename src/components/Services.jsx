import { services } from "../data/services.js";
import {
  IconGlobe,
  IconCart,
  IconLanding,
  IconUser,
  IconApp,
  IconRefresh,
  IconDevice,
  IconWrench,
  IconArrow,
} from "./Icons.jsx";

const ICONS = {
  "business-website": IconGlobe,
  ecommerce: IconCart,
  "landing-page": IconLanding,
  "portfolio-website": IconUser,
  "custom-web-app": IconApp,
  redesign: IconRefresh,
  responsive: IconDevice,
  maintenance: IconWrench,
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we build</span>
          <h2>Web design & development services for businesses</h2>
          <p>
            From a first business website to a full custom web application,
            every service is built to be fast, responsive and easy for your
            customers to use.
          </p>
        </div>

        <div className="grid grid--4">
          {services.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <article
                className="svc-card reveal"
                key={s.id}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <div className="svc-card__icon">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a href="#contact" className="svc-card__cta">
                  Get Started <IconArrow />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
