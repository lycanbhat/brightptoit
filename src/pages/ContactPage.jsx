import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Phone, Mail, Send, CheckCircle2,
  Clock, ArrowRight
} from "lucide-react";

// Inline brand SVG icons (lucide removed brand icons)
const IconFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconTwitter = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M2 4.5h5.5l9 15H21L11.5 4.5H6z" fill="currentColor"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A1628"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "Ground Floor, Municipal No 652, Khata No 4312/652,\n22nd Cross 23rd Main Road, Sector 2,\nBengaluru Urban, Karnataka – 560102",
    link: "https://maps.google.com/?q=22nd+Cross+23rd+Main+Road+Sector+2+Bengaluru",
    color: "#3B82F6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9739305983",
    link: "tel:+919739305983",
    color: "#06B6D4",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@brightproit.com",
    link: "mailto:support@brightproit.com",
    color: "#8B5CF6",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday\n9:00 AM – 7:00 PM IST",
    link: null,
    color: "#10B981",
  },
];

const socials = [
  { icon: IconFacebook, label: "Facebook", href: "#", color: "#1877F2" },
  { icon: IconTwitter, label: "Twitter / X", href: "#", color: "#888888" },
  { icon: IconLinkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
  { icon: IconInstagram, label: "Instagram", href: "#", color: "#E1306C" },
  { icon: IconYoutube, label: "YouTube", href: "#", color: "#FF0000" },
];

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: direction === "up" ? 24 : 0,
        x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

const inputClass = `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200`;
const inputStyle = { background: "rgba(5,11,24,0.8)", border: "1px solid rgba(30,45,74,0.8)" };

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const focusStyle = (e) => (e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.15)");
  const blurStyle = (e) => (e.target.style.boxShadow = "none");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="orb w-96 h-96 -left-32 top-0 opacity-20"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
        <div className="orb w-64 h-64 -right-16 top-0 opacity-10"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="section-label mb-4">Contact Us</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Have a project in mind or just want to explore your options? Reach out and our
              team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, link, color }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full group transition-all duration-300 hover:border-opacity-60"
                  style={{ border: `1px solid rgba(30,45,74,0.8)` }}
                  onMouseEnter={(e) => e.currentTarget.style.border = `1px solid ${color}40`}
                  onMouseLeave={(e) => e.currentTarget.style.border = "1px solid rgba(30,45,74,0.8)"}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    {label}
                  </div>
                  {link ? (
                    <a href={link} target={link.startsWith("https") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-gray-200 text-sm font-medium hover:text-white transition-colors whitespace-pre-line">
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-200 text-sm font-medium whitespace-pre-line">{value}</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Form */}
            <FadeIn direction="right" className="lg:col-span-3">
                <div className="glass rounded-3xl p-8 sm:p-10"
                  style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
                  {sent ? (
                    <div className="flex flex-col items-center justify-center gap-5 py-16">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle2 size={60} className="text-green-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="text-gray-400 text-center max-w-sm">
                        Thank you for reaching out. A member of our team will get back to
                        you within 24 hours.
                      </p>
                      <button onClick={() => setSent(false)} className="btn-outline text-sm mt-2">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
                      <p className="text-gray-500 text-sm mb-8">
                        Fill in the details below and we'll get back to you shortly.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                            Full Name <span className="text-blue-500">*</span>
                          </label>
                          <input type="text" required placeholder="John Doe"
                            value={form.name} onChange={set("name")}
                            className={inputClass} style={inputStyle}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                            Email Address <span className="text-blue-500">*</span>
                          </label>
                          <input type="email" required placeholder="john@company.com"
                            value={form.email} onChange={set("email")}
                            className={inputClass} style={inputStyle}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                            Phone Number
                          </label>
                          <input type="tel" placeholder="+91 98765 43210"
                            value={form.phone} onChange={set("phone")}
                            className={inputClass} style={inputStyle}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                            Service Needed
                          </label>
                          <select value={form.service} onChange={set("service")}
                            className={inputClass}
                            style={{ ...inputStyle, color: form.service ? "white" : "#4B5563" }}
                            onFocus={focusStyle} onBlur={blurStyle}
                          >
                            <option value="" style={{ background: "#0A1628" }}>Select a service</option>
                            <option style={{ background: "#0A1628" }}>Network Installation</option>
                            <option style={{ background: "#0A1628" }}>CCTV / Surveillance</option>
                            <option style={{ background: "#0A1628" }}>Biometric & Access Control</option>
                            <option style={{ background: "#0A1628" }}>AV & Video Conferencing</option>
                            <option style={{ background: "#0A1628" }}>Firewall & Security</option>
                            <option style={{ background: "#0A1628" }}>Laptop / Desktop Sales</option>
                            <option style={{ background: "#0A1628" }}>Software Licensing</option>
                            <option style={{ background: "#0A1628" }}>Annual Maintenance (AMC)</option>
                            <option style={{ background: "#0A1628" }}>Data Center Infrastructure</option>
                            <option style={{ background: "#0A1628" }}>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Message <span className="text-blue-500">*</span>
                        </label>
                        <textarea required rows={5}
                          placeholder="Describe your requirements — location, number of users, existing setup, etc."
                          value={form.message} onChange={set("message")}
                          className={`${inputClass} resize-none`} style={inputStyle}
                          onFocus={focusStyle} onBlur={blurStyle}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        Send Message <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
            </FadeIn>

            {/* Map + Socials */}
            <FadeIn direction="left" delay={0.15} className="lg:col-span-2 flex flex-col gap-5">
                {/* Map placeholder */}
                <div className="glass rounded-3xl overflow-hidden flex-1 min-h-[280px] flex items-center justify-center relative"
                  style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="flex flex-col items-center gap-3 text-gray-500 relative z-10">
                    <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-dark-500 flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-400">Map Placeholder</p>
                      <p className="text-xs mt-1 text-gray-600">Embed Google Maps here</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=22nd+Cross+23rd+Main+Road+Sector+2+Bengaluru"
                      target="_blank" rel="noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      Open in Google Maps <ArrowRight size={12} />
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-6"
                  style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
                  <h4 className="text-sm font-semibold text-white mb-4">Connect With Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {socials.map(({ icon: Icon, label, href, color }) => (
                      <a key={label} href={href}
                        target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-all duration-200"
                        style={{ background: "rgba(5,11,24,0.8)", border: "1px solid rgba(30,45,74,0.8)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.border = `1px solid ${color}50`;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = "1px solid rgba(30,45,74,0.8)";
                          e.currentTarget.style.color = "";
                        }}
                      >
                        <Icon size={15} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="glass rounded-2xl p-6 text-center"
                  style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
                  <p className="text-sm text-gray-400 mb-3">
                    Need a quick response? Call us directly.
                  </p>
                  <a href="tel:+919739305983" className="btn-primary text-sm justify-center w-full">
                    <Phone size={16} /> +91-9739305983
                  </a>
                </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn>
              <span className="section-label">Why BrightPro</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mt-0">
                What to Expect When{" "}
                <span className="gradient-text">You Reach Out</span>
              </h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Fast Response", desc: "We respond to all enquiries within 24 hours — usually much sooner during business hours.", icon: Clock, color: "#3B82F6" },
              { title: "Free Site Assessment", desc: "For larger projects, we offer a complimentary on-site visit to understand your requirements firsthand.", icon: MapPin, color: "#06B6D4" },
              { title: "No Pushy Sales", desc: "Honest advice and transparent pricing. We recommend only what you actually need.", icon: CheckCircle2, color: "#10B981" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="service-card group text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}>
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
