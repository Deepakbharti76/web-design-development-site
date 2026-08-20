import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  IconCall,
  IconWhatsapp,
  IconMail,
  IconPin,
  IconCheck,
} from "./Icons.jsx";

const SERVICE_AREAS = [
  "Crossing Republik",
  "Ghaziabad",
  "Indirapuram",
  "Noida Extension",
  "Greater Noida",
  "Gurugram",
  "Faridabad",
  "Delhi",
];
const SERVICES = [
  "Business Website",
  "E-commerce Website",
  "Landing Page",
  "Portfolio Website",
  "Custom Web Application",
  "Website Redesign",
  "Responsive Website Development",
  "Website Maintenance",
  "Not sure yet",
];
const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹35,000",
  "₹35,000 – ₹45,000",
  "₹50,000+",
  "Let's discuss",
];

const initialForm = {
  name: "",
  business: "",
  phone: "",
  email: "",
  service: SERVICES[0],
  budget: BUDGETS[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (!/^[A-Za-z\s]{2,50}$/.test(form.name.trim())) {
      setError("Please enter a valid name.");
      return;
    }

    // Phone validation - exactly 10 digits
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    try {
      await emailjs.send(
        "service_aijliqg",
        "template_yh47rsx",
        {
          name: form.name,
          business: form.business,
          phone: form.phone,
          email: form.email,
          service: form.service,
          budget: form.budget,
          message: form.message,
        },
        {
          publicKey: "MhL7RowVtoggjsSZp",
        },
      );

      setSent(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setError("Failed to send enquiry. Please try again.");
    }
  };
  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          className="section-head center reveal"
          style={{ margin: "0 auto 3rem" }}
        >
          <span className="eyebrow">Get in touch</span>
          <h2>Let's Build Your Website</h2>
          <p>
            Tell us about your business and we'll get back to you with a free,
            no-obligation consultation.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-row">
              <span className="contact-row__icon">
                <IconWhatsapp width={20} height={20} />
              </span>
              <div>
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/917644832949"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 76448 32949
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-row__icon">
                <IconCall width={20} height={20} />
              </span>
              <div>
                <strong>Call</strong>
                <a href="tel:+917644832949">+91 76448 32949</a>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-row__icon">
                <IconMail />
              </span>
              <div>
                <strong>Email</strong>
                <a href="mailto:webdesigndevelopment001@gmail.com">
                  webdesigndevelopment001@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-row__icon">
                <IconPin />
              </span>
              <div>
                <strong>Service Areas</strong>

                <div className="contact-areas">
                  {SERVICE_AREAS.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>

                <p>Serving Businesses Across India | Remote Services</p>
              </div>
            </div>
          </div>

          <div className="form-card reveal">
            {sent ? (
              <div className="form-success">
                <IconCheck width={40} height={40} />
                <h3>Thanks — we've received your details</h3>
                <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  We'll reach out within one business day to discuss your
                  project.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ marginTop: "1.5rem" }}
                  onClick={() => {
                    setForm(initialForm);
                    setSent(false);
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        const value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          "",
                        );
                        setForm((prev) => ({
                          ...prev,
                          name: value,
                        }));
                      }}
                      autoComplete="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="business">Business Name</label>
                    <input
                      id="business"
                      type="text"
                      value={form.business}
                      onChange={update("business")}
                      autoComplete="organization"
                      placeholder="Enter business name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>

                    <div className="phone-input">
                      <span>+91</span>

                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          setForm((prev) => ({
                            ...prev,
                            phone: value,
                          }));
                        }}
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="tel"
                        placeholder="Enter 10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="service">Required Service</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={update("service")}
                    >
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={update("budget")}
                    >
                      {BUDGETS.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us a bit about your business and what you need."
                  />
                </div>

                {error && (
                  <p
                    style={{
                      color: "#b3462c",
                      fontSize: "0.85rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </p>
                )}

                <button type="submit" className="btn btn-primary btn-block">
                  Let's Build Your Website
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
