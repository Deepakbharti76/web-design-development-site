import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";
import About from "./components/About.jsx";
import LocalBusiness from "./components/LocalBusiness.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import { useReveal } from "./useReveal.js";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const rootRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useReveal(rootRef, [theme]);

  return (
    <div ref={rootRef}>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Technologies />
        <About />
        <LocalBusiness />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
