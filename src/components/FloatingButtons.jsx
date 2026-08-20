import { IconWhatsapp, IconCall } from "./Icons.jsx";

export default function FloatingButtons() {
  return (
    <div className="floaters">
      <a
        href="https://wa.me/917644832949?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20project"
        className="floater-btn floater-btn--wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <IconWhatsapp />
      </a>
      <a href="tel:+917644832949" className="floater-btn floater-btn--call" aria-label="Call us">
        <IconCall />
      </a>
    </div>
  );
}
