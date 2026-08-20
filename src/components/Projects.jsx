import { useState } from "react";
import { categories, projects } from "../data/projects.js";
import { IconArrow, IconGithub } from "./Icons.jsx";

// Deterministic accent per project for the illustrative preview (not a real screenshot).
const GRADIENTS = [
  "linear-gradient(135deg, #1c8c7d, #101b33)",
  "linear-gradient(135deg, #e0a33e, #101b33)",
  "linear-gradient(135deg, #2b3654, #1c8c7d)",
  "linear-gradient(135deg, #101b33, #e0a33e)",
  "linear-gradient(135deg, #1c8c7d, #e0a33e)",
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="projects" className="section section--raised">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2>A look at what we've built</h2>
          <p>
            A mix of business websites, booking systems and web applications
            used to demonstrate design and engineering capability.
          </p>
        </div>

        <div className="filters reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid--3">
          {filtered.map((p, i) => (
            <article
              className="proj-card"
              key={p.id}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div
                className="proj-card__media"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="proj-card__image"
                  />
                )}
              </div>
              <div className="proj-card__body">
                <span className="proj-card__tag">{p.category}</span>{" "}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="proj-card__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <ul className="proj-card__features">
                  {p.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      — {f}
                    </li>
                  ))}
                </ul>
                <div className="proj-card__actions">
                  {p.liveDemo && (
                    <a
                      href={p.liveDemo}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <IconArrow />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      className="btn btn-ghost btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
