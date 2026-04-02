import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  "Dell", "Acer", "ASUS", "Epson", "Zebra",
  "Brother", "Microsoft", "Google", "Adobe", "HP",
  "Cisco", "D-Link", "TP-Link", "Hikvision", "Dahua",
];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(30,45,74,0.8), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(30,45,74,0.8), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-sm font-medium text-gray-600 uppercase tracking-widest mb-10"
        >
          Authorized Partner & Reseller
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-default"
              style={{
                background: "rgba(10,22,40,0.8)",
                border: "1px solid rgba(30,45,74,0.8)",
              }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
