import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2, Award, Clock, Headphones, Target, Eye,
  Users, Shield, Zap, Globe, ArrowRight, ChevronDown
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const values = [
  {
    icon: Target,
    title: "Customer-First",
    desc: "Long-term partnerships built on trust, transparency, and outcomes that genuinely matter to your business.",
    color: "#3B82F6",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Proactive monitoring and fast response times ensure your systems stay up and your team stays productive.",
    color: "#06B6D4",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    desc: "Certified professionals with 8+ years of hands-on experience across networking, security, and IT infrastructure.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    desc: "From single-office SMBs to multi-site enterprises — our solutions grow as your business grows.",
    color: "#10B981",
  },
];

const expertise = [
  "Network Design & Implementation",
  "CCTV & Video Surveillance",
  "Biometric & Access Control",
  "Firewall & Network Security",
  "Cloud-Based Solutions",
  "Comprehensive AMC Support",
  "AV & Video Conferencing",
  "IT Staff Augmentation",
  "Managed IT Services",
  "Data Center Infrastructure",
  "End User Computing",
  "Software Licensing & Support",
];

const faqs = [
  {
    q: "What core IT services does BrightPro offer?",
    a: "We offer a comprehensive suite including IT Staff Augmentation, Managed IT Services, Cloud Computing, Infrastructure Management, Network Installation, CCTV, Biometric Access Control, AV systems, and more. Whether you need a one-time setup or an ongoing support partner, we've got you covered.",
  },
  {
    q: "How does your staff augmentation model work?",
    a: "We provide skilled IT professionals — developers, network engineers, and support staff — on a flexible basis. Whether you need someone for a short-term project or long-term operational support, we match the right talent to your specific requirements.",
  },
  {
    q: "Which industries do you serve?",
    a: "We work across Government & Public Sector, Banking & Finance (BFSI), Healthcare, Retail, Manufacturing, Education, Corporate Offices, Residential Complexes, and more. Our solutions are tailored to each sector's unique compliance and operational needs.",
  },
  {
    q: "Do you offer round-the-clock support?",
    a: "Yes. Our Managed IT Support includes remote monitoring, on-site hardware maintenance, and network troubleshooting — available whenever you need it. AMC clients receive priority response and scheduled preventive maintenance visits.",
  },
  {
    q: "Do you handle both installation and ongoing maintenance?",
    a: "Absolutely. We offer end-to-end services: site assessment, design, procurement, installation, configuration, staff training, and post-installation AMC plans. You get a single point of contact for everything.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{ border: open ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(30,45,74,0.8)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-6 gap-4">
        <span className="font-semibold text-white text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="orb w-96 h-96 -left-32 top-0 opacity-20"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
        <div className="orb w-64 h-64 -right-20 top-10 opacity-10"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
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
            <span className="section-label mb-4">About Us</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6">
              Navigating Your{" "}
              <span className="gradient-text">Success Story</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              8+ years of hands-on experience in IT infrastructure, networking, and security —
              delivering reliable, scalable, and cost-effective technology solutions across Bengaluru.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <FadeIn direction="right">
              <div className="relative">
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
                    <span className="text-sm font-medium">Team / Office Image</span>
                  </div>
                </div>
                {/* Stat badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 text-center"
                  style={{ border: "1px solid rgba(59,130,246,0.3)" }}
                >
                  <div className="text-3xl font-extrabold gradient-text">8+</div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">Years of<br />Experience</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-6 -left-6 glass rounded-2xl p-5 text-center"
                  style={{ border: "1px solid rgba(6,182,212,0.3)" }}
                >
                  <div className="text-3xl font-extrabold gradient-text">500+</div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">Happy<br />Clients</div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <span className="section-label">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-5 mt-0">
                Building IT Infrastructure That{" "}
                <span className="gradient-text">Works for You</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                At BrightPro IT Solutions, our mission is simple: deliver reliable, scalable,
                and cost-effective technology services that keep your business running at its best.
                We specialize in IT infrastructure, networking, and security solutions — and we
                do it with a proactive support approach that minimizes downtime and maximizes value.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our focus is on long-term partnerships built on dependable service, clear
                communication, and technically sound solutions. From corporate offices and
                hospitals to SMBs and residential complexes, we've helped hundreds of
                organizations across Bengaluru and Karnataka build the technology backbone
                they need to thrive.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/service" className="btn-primary text-sm">View Our Services <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline text-sm">Contact Us</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb w-80 h-80 right-0 top-0 opacity-10"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <span className="section-label">Our Values</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mt-0">
                What Drives{" "}
                <span className="gradient-text">Everything We Do</span>
              </h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="service-card group h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${v.color}20`, border: `1px solid ${v.color}30` }}>
                    <v.icon size={22} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="section-label">Areas of Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6 mt-0">
                Deep Expertise Across{" "}
                <span className="gradient-text">Every IT Domain</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our team holds hands-on experience across a wide range of IT disciplines,
                ensuring you always get the right specialist for the job — not a generalist
                making educated guesses.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="glass rounded-3xl overflow-hidden aspect-square flex items-center justify-center"
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
                  <span className="text-sm font-medium">Expertise Image</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative overflow-hidden">
        <div className="orb w-80 h-80 -left-40 bottom-0 opacity-10"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeIn>
              <span className="section-label">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mt-0">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
            </FadeIn>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.06}>
                <FAQ q={faq.q} a={faq.a} />
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
                style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Ready to Transform Your IT?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Let's build a reliable, scalable IT infrastructure tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Get a Free Consultation <ArrowRight size={18} />
                  </Link>
                  <Link to="/service" className="btn-outline">
                    Explore Services
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
