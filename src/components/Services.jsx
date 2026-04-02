import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wifi, Camera, Fingerprint, Printer, Monitor, Video,
  Phone, Laptop, Receipt, Package, Tv, Wrench
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Network Installation & Support",
    desc: "End-to-end design, installation, and maintenance of LAN/WAN networks including hardware and structured cabling.",
    color: "#3B82F6",
  },
  {
    icon: Camera,
    title: "CCTV Installation & Maintenance",
    desc: "Comprehensive surveillance solutions covering IP/analog cameras, NVR/DVR systems, and remote monitoring.",
    color: "#06B6D4",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    desc: "Installation of biometric devices, RFID access readers, and door controllers for secure entry management.",
    color: "#8B5CF6",
  },
  {
    icon: Printer,
    title: "Printer Installation & Support",
    desc: "Setup, network printing configuration, preventive maintenance, and troubleshooting for all major brands.",
    color: "#EC4899",
  },
  {
    icon: Monitor,
    title: "AV & Video Conferencing",
    desc: "Professional audio-visual and conferencing installations for boardrooms, training halls, and classrooms.",
    color: "#F59E0B",
  },
  {
    icon: Video,
    title: "Zoom & Google Meet Setup",
    desc: "Complete configuration and optimization of virtual meeting platforms for seamless remote collaboration.",
    color: "#10B981",
  },
  {
    icon: Phone,
    title: "Intercom Systems",
    desc: "Installation and support for wired/wireless intercom devices, IP intercoms, and building communication systems.",
    color: "#3B82F6",
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop Sales",
    desc: "Authorized sales of Dell, Acer, ASUS, and more — with setup, upgrades, data migration, and ongoing support.",
    color: "#06B6D4",
  },
  {
    icon: Receipt,
    title: "Billing & POS Solutions",
    desc: "Implementation of point-of-sale and billing systems for retail, restaurants, and service businesses.",
    color: "#8B5CF6",
  },
  {
    icon: Package,
    title: "Software Sales & Licensing",
    desc: "Authorized reseller for Microsoft 365, Google Workspace, AutoCAD, Adobe Photoshop, and enterprise software.",
    color: "#EC4899",
  },
  {
    icon: Tv,
    title: "TVs & Projectors",
    desc: "Sales and installation of commercial displays, projectors, and digital signage for offices and public spaces.",
    color: "#F59E0B",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    desc: "Comprehensive AMC plans covering all IT infrastructure — proactive monitoring, scheduled visits, and priority support.",
    color: "#10B981",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-24 overflow-hidden">
      <div className="orb w-80 h-80 -left-40 top-1/2 opacity-10"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          >
            Complete IT Services{" "}
            <span className="gradient-text">Under One Roof</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            From network setup to surveillance and software licensing — we handle every
            layer of your IT infrastructure.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="service-card group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${service.color}20`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon size={20} style={{ color: service.color }} />
              </div>
              <h3 className="font-semibold text-white text-sm leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
