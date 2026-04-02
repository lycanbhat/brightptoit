import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wifi, Camera, Shield, Monitor, Server, Cpu,
  Fingerprint, Printer, Video, Phone, Laptop,
  Receipt, Package, Tv, Wrench, ArrowRight, CheckCircle2, Sparkles
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: Wifi,
    title: "Networking Products & Installation",
    color: "#3B82F6",
    desc: "Enterprise-grade switches, routers, and wireless solutions designed for secure and high-performance LAN and WAN environments. We handle structured cabling, network segmentation, and ongoing performance monitoring.",
    features: ["LAN / WAN design & deployment", "Wi-Fi 6 access points", "Structured cabling", "Network performance monitoring"],
  },
  {
    icon: Camera,
    title: "CCTV & Surveillance Systems",
    color: "#06B6D4",
    desc: "Comprehensive video surveillance and monitoring solutions for offices, campuses, data centers, and critical infrastructure. IP cameras, NVR/DVR systems, remote access, and cloud storage options.",
    features: ["IP & analog cameras", "NVR / DVR configuration", "Remote live monitoring", "Cloud & local storage"],
  },
  {
    icon: Shield,
    title: "Network Security & Firewalls",
    color: "#8B5CF6",
    desc: "Advanced firewall and security solutions to protect your IT infrastructure from cyber threats, unauthorized access, and data breaches. We deploy, configure, and manage next-generation firewalls and UTM appliances.",
    features: ["Next-gen firewall deployment", "UTM & IDS/IPS setup", "VPN configuration", "Security policy management"],
  },
  {
    icon: Monitor,
    title: "End User Computing Devices",
    color: "#EC4899",
    desc: "Authorized sales of desktops, laptops, printers, and peripherals from Dell, Acer, ASUS, HP, and more. We handle procurement, imaging, deployment, and ongoing hardware support.",
    features: ["Dell, Acer, ASUS, HP", "Bulk procurement & imaging", "Warranty management", "Hardware upgrades & repair"],
  },
  {
    icon: Server,
    title: "Data Center Infrastructure",
    color: "#F59E0B",
    desc: "Critical data center components including server racks, UPS power solutions, structured cabling, and patch panel management for efficient and secure data center operations.",
    features: ["Server rack & cabinet setup", "UPS & power management", "Patch panel management", "Cable management & labeling"],
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    color: "#10B981",
    desc: "Installation of biometric devices, RFID card readers, and electronic door controllers for secure, audit-trailed access management across your premises.",
    features: ["Fingerprint & face recognition", "RFID / card access systems", "Door controller setup", "Attendance & audit logs"],
  },
  {
    icon: Video,
    title: "AV & Video Conferencing",
    color: "#3B82F6",
    desc: "Professional audio-visual systems for boardrooms, conference halls, and training rooms. We design, supply, and install projectors, displays, microphones, speakers, and video conferencing endpoints.",
    features: ["Boardroom AV design", "Projector & LED display install", "Zoom Rooms & Meet hardware", "PA system setup"],
  },
  {
    icon: Phone,
    title: "Intercom Systems",
    color: "#06B6D4",
    desc: "Wired and wireless intercom solutions for offices, apartments, and gated communities — covering IP intercoms, video door phones, and building communication systems.",
    features: ["IP & analog intercoms", "Video door phone systems", "Building-wide wiring", "Multi-tenant configurations"],
  },
  {
    icon: Receipt,
    title: "Billing & POS Solutions",
    color: "#8B5CF6",
    desc: "End-to-end implementation of point-of-sale and billing systems for retail stores, restaurants, pharmacies, and service businesses. Hardware, software, training, and support included.",
    features: ["POS hardware & software", "Barcode scanner & printer setup", "Payment gateway integration", "Staff training & support"],
  },
  {
    icon: Package,
    title: "Software Sales & Licensing",
    color: "#EC4899",
    desc: "Authorized reseller for Microsoft 365, Google Workspace, AutoCAD, Adobe Creative Cloud, and enterprise software. We handle procurement, activation, user management, and renewals.",
    features: ["Microsoft 365 & Google Workspace", "AutoCAD & Adobe licensing", "License audit & compliance", "Renewal management"],
  },
  {
    icon: Tv,
    title: "TVs, Projectors & Digital Signage",
    color: "#F59E0B",
    desc: "Sales and installation of commercial displays, large-format TVs, projectors, and digital signage systems for offices, lobbies, retail environments, and public spaces.",
    features: ["Commercial display installation", "Digital signage setup", "Content management systems", "Projector screen & mount"],
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts (AMC)",
    color: "#10B981",
    desc: "Comprehensive AMC plans covering your entire IT infrastructure — proactive monitoring, scheduled preventive maintenance visits, and priority support response for all covered assets.",
    features: ["Preventive maintenance visits", "Priority on-site response", "Remote monitoring & alerts", "Comprehensive asset coverage"],
  },
];

const aiCapabilities = [
  { icon: Sparkles, title: "Tailored Recommendations", desc: "AI-driven product and solution recommendations based on your specific business size, industry, and requirements." },
  { icon: Cpu, title: "Smart Support Chatbot", desc: "24/7 AI-powered chatbot for instant troubleshooting guidance and support ticket routing." },
  { icon: Camera, title: "AI Video Analytics", desc: "Smart CCTV features including object detection, people counting, and anomaly alerts powered by image recognition." },
  { icon: Monitor, title: "Predictive Maintenance", desc: "AI models that analyze asset health data to predict failures before they cause downtime." },
];

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
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

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="orb w-96 h-96 -right-32 top-0 opacity-15"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
        <div className="orb w-64 h-64 -left-20 top-10 opacity-10"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
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
            <span className="section-label mb-4">Our Services</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6">
              Complete IT Solutions{" "}
              <span className="gradient-text">Under One Roof</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              From network infrastructure to security systems, AV installations, and software
              licensing — we handle every layer of your IT environment so you can focus on
              running your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div className="service-card group h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}>
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  {/* Title */}
                  <h3 className="font-bold text-white text-base mb-3">{service.title}</h3>
                  {/* Desc */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>
                  {/* Features */}
                  <div className="space-y-2 pt-4"
                    style={{ borderTop: "1px solid rgba(30,45,74,0.8)" }}>
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 size={12} style={{ color: service.color, flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI / Smart Capabilities */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent, rgba(8,15,32,0.6), transparent)" }} />
        <div className="orb w-96 h-96 left-1/2 top-0 -translate-x-1/2 opacity-10"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <span className="section-label">Next-Gen Capabilities</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mt-0">
                AI-Powered{" "}
                <span className="gradient-text">IT Intelligence</span>
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                We integrate smart, AI-driven capabilities into our services to help you
                get more value from your technology investments.
              </p>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiCapabilities.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full text-center group"
                  style={{ border: "1px solid rgba(139,92,246,0.2)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
                    <item.icon size={22} className="text-violet-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <span className="section-label">How It Works</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mt-0">
                Our Delivery{" "}
                <span className="gradient-text">Process</span>
              </h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-8 left-0 right-0 h-px hidden lg:block"
              style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent)" }} />
            {[
              { step: "01", title: "Site Assessment", desc: "We visit your premises, understand your requirements, and evaluate the existing infrastructure." },
              { step: "02", title: "Design & Proposal", desc: "We design a tailored solution and provide a transparent, detailed proposal with no hidden costs." },
              { step: "03", title: "Installation & Config", desc: "Our certified team handles procurement, installation, and full configuration to spec." },
              { step: "04", title: "Support & AMC", desc: "Post-installation support, staff training, and ongoing AMC plans to keep everything running." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-extrabold text-lg relative z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}>
                    <span className="gradient-text">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
              style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
              <div className="orb w-64 h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
                style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Let's Find the Right Solution
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Tell us what you need and we'll recommend the best approach — no pushy sales, just honest advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Request a Free Demo <ArrowRight size={18} />
                  </Link>
                  <Link to="/about" className="btn-outline">
                    About BrightPro
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
