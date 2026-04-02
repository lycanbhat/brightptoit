import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Wifi, Camera, Server } from "lucide-react";

const floatingIcons = [
  { icon: Shield, label: "Security",       top: "20%",    left: "5%",  delay: 0   },
  { icon: Wifi,   label: "Networking",     top: "15%",    right: "8%", delay: 0.5 },
  { icon: Camera, label: "CCTV",           bottom: "30%", left: "3%",  delay: 1   },
  { icon: Server, label: "Infrastructure", bottom: "25%", right: "5%", delay: 1.5 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-96 h-96 top-0 -left-32 opacity-20"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
      <div className="orb w-80 h-80 top-10 -right-20 opacity-15"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
      <div className="orb w-64 h-64 bottom-20 left-1/2 opacity-10"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating cards */}
      {floatingIcons.map(({ icon: Icon, label, delay, ...pos }) => (
        <motion.div
          key={label}
          className="absolute hidden xl:flex items-center gap-2 glass px-4 py-3 rounded-2xl text-sm font-medium text-gray-300"
          style={pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 1 + delay, duration: 0.5 },
            scale:   { delay: 1 + delay, duration: 0.5 },
            y:       { delay: 1 + delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))" }}>
            <Icon size={16} className="text-blue-400" />
          </div>
          {label}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="section-label">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted IT Partner in Bengaluru
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            Smart IT Solutions{" "}
            <br />
            <span className="gradient-text">Built for Business</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            8+ years delivering reliable networking, security, AV, and IT infrastructure
            services across Bengaluru — from corporate offices to residential complexes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="#contact" className="btn-primary">
              Get a Free Consultation <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline">
              <Play size={16} className="text-blue-400" fill="currentColor" />
              Explore Services
            </a>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="rounded-3xl overflow-hidden glow-blue"
              style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
              <img
                src="/hero.jpeg"
                alt="BrightPro IT engineer working on server infrastructure"
                className="w-full object-cover block"
                style={{ aspectRatio: "16/7", maxHeight: "420px" }}
              />
            </div>
            {/* Glow under card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl opacity-30 rounded-full"
              style={{ background: "linear-gradient(90deg, #3B82F6, #06B6D4)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
