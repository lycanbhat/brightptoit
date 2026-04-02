import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2, Code2, Landmark, Banknote, Stethoscope,
  ShoppingBag, Factory, GraduationCap, Warehouse, Home
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Corporate Offices" },
  { icon: Code2, name: "IT Companies" },
  { icon: Landmark, name: "Government" },
  { icon: Banknote, name: "BFSI" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
  { icon: Warehouse, name: "Warehouses" },
  { icon: Home, name: "Residential" },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent, rgba(8,15,32,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Powering Every{" "}
            <span className="gradient-text">Industry Vertical</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default group"
              style={{ border: "1px solid rgba(30,45,74,0.8)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))" }}>
                <Icon size={22} className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-300 text-center leading-tight">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
