import { IconGlobe, IconGithub, IconLinkedin, IconWhatsapp } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <IconGlobe width={20} height={20} />
              Web Design & Development
            </div>
            <p className="footer__desc">
              Professional web design and development for local businesses and
              entrepreneurs across Ghaziabad and the NCR region.
            </p>
            <div className="footer__social">
              <a
                href="https://wa.me/917644832949"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <IconWhatsapp width={16} height={16} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#services">Business Websites</a>
              </li>
              <li>
                <a href="#services">E-commerce Websites</a>
              </li>
              <li>
                <a href="#services">Landing Pages</a>
              </li>
              <li>
                <a href="#services">Custom Web Apps</a>
              </li>
              <li>
                <a href="#services">Website Maintenance</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Service Areas</h5>
            <ul>
              <li>Crossing Republik</li>
              <li>Ghaziabad</li>
              <li>Indirapuram</li>
              <li>Noida Extension</li>
              <li>Delhi</li>
              <li>Greater Noida</li>
              <li>Gurugram</li>
              <li>Faridabad</li>
            </ul>
            <p>Serving Businesses Across India | Remote Services</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Web Design & Development. All rights
            reserved.
          </span>
          <span>Built with React · Made for local businesses</span>
        </div>
      </div>
    </footer>
  );
}
