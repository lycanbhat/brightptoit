import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    link: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9739305983",
    link: "tel:+919739305983",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@brightproit.com",
    link: "mailto:support@brightproit.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      <div className="orb w-96 h-96 -left-48 bottom-0 opacity-10"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Let's Build Your{" "}
            <span className="gradient-text">IT Infrastructure</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {info.map(({ icon: Icon, label, value, link }) => (
              <div key={label}
                className="glass rounded-2xl p-6 flex items-start gap-4"
                style={{ border: "1px solid rgba(30,45,74,0.8)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.15)" }}>
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{label}</div>
                  {link ? (
                    <a href={link} className="text-gray-200 font-medium hover:text-blue-400 transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <div className="text-gray-200 font-medium text-sm">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden flex-1 min-h-[180px] flex items-center justify-center"
              style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
              <div className="flex flex-col items-center gap-2 text-gray-600">
                <MapPin size={28} />
                <span className="text-xs font-medium">Map Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 sm:p-10 h-full"
              style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 size={56} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm mt-2">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white mb-6">Request a Free Demo</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { field: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
                      { field: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                      { field: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel" },
                    ].map(({ field, label, placeholder, type }) => (
                      <div key={field} className={field === "name" ? "" : ""}>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          {label}
                        </label>
                        <input
                          type={type}
                          required={field !== "phone"}
                          placeholder={placeholder}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-blue-500"
                          style={{
                            background: "rgba(5,11,24,0.8)",
                            border: "1px solid rgba(30,45,74,0.8)",
                          }}
                          onFocus={(e) => e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.15)"}
                          onBlur={(e) => e.target.style.boxShadow = "none"}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                        style={{
                          background: "rgba(5,11,24,0.8)",
                          border: "1px solid rgba(30,45,74,0.8)",
                          color: form.service ? "white" : "#4B5563",
                        }}
                      >
                        <option value="" style={{ background: "#0A1628" }}>Select a service</option>
                        <option style={{ background: "#0A1628" }}>Network Installation</option>
                        <option style={{ background: "#0A1628" }}>CCTV / Surveillance</option>
                        <option style={{ background: "#0A1628" }}>Biometric & Access Control</option>
                        <option style={{ background: "#0A1628" }}>AV & Video Conferencing</option>
                        <option style={{ background: "#0A1628" }}>Laptop / Desktop Sales</option>
                        <option style={{ background: "#0A1628" }}>Software Licensing</option>
                        <option style={{ background: "#0A1628" }}>Annual Maintenance (AMC)</option>
                        <option style={{ background: "#0A1628" }}>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(5,11,24,0.8)",
                        border: "1px solid rgba(30,45,74,0.8)",
                      }}
                      onFocus={(e) => e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.15)"}
                      onBlur={(e) => e.target.style.boxShadow = "none"}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
