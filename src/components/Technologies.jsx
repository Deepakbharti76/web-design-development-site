const STACK = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js"],
  Backend: ["Java", "Spring Boot", "REST APIs", "JDBC", "Hibernate / JPA"],
  Database: ["MySQL", "SQL"],
  Tools: ["Git", "GitHub", "VS Code", "Eclipse", "Maven", "Postman"],
};

export default function Technologies() {
  return (
    <section id="technologies" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Under the hood</span>
          <h2>Technologies we build with</h2>
          <p>
            Technologies and tools I use to build responsive, scalable and
            full-stack web applications.
          </p>
        </div>

        <div className="grid grid--4 reveal">
          {Object.entries(STACK).map(([group, items]) => (
            <div className="tech-col" key={group}>
              <h3>{group}</h3>
              <div className="tech-pills">
                {items.map((i) => (
                  <span className="tech-pill" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
