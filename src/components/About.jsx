import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Clock, Headphones } from "lucide-react";

const highlights = [
  { icon: CheckCircle2, text: "End-to-end IT infrastructure design & deployment" },
  { icon: Award, text: "Certified professionals across all service verticals" },
  { icon: Clock, text: "Fast response times with proactive support model" },
  { icon: Headphones, text: "Dedicated post-installation support & AMC plans" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="orb w-96 h-96 -right-40 top-0 opacity-10"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main placeholder */}
            <div className="glass rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center"
              style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-500"
                style={{ background: "linear-gradient(135deg, #080F20, #0A1628)" }}>
                <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-dark-500 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
                <span className="text-sm font-medium">About Image Placeholder</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 text-center"
              style={{ border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <div className="text-3xl font-extrabold gradient-text">8+</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">Years of<br />Experience</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              Reliable IT Infrastructure{" "}
              <span className="gradient-text">You Can Count On</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              BrightPro IT Solutions brings 8+ years of hands-on expertise in networking,
              surveillance, AV systems, and managed IT services to businesses across Bengaluru.
              We deliver scalable, cost-effective technology solutions with a proactive support
              approach that keeps your operations running smoothly.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              From corporate offices and government institutions to healthcare facilities and
              residential complexes — we've built the IT backbone for hundreds of organizations
              across Karnataka.
            </p>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.15)" }}>
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#contact" className="btn-primary text-sm">Get in Touch</a>
              <a href="#services" className="btn-outline text-sm">Our Services</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
