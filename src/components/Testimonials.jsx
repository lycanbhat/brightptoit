import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Manager, TechCorp Bengaluru",
    text: "BrightPro completely transformed our office network. The structured cabling, Wi-Fi setup, and CCTV installation were done seamlessly within the deadline. Their team is professional, knowledgeable, and responsive.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, FinServ India",
    text: "We've been on their AMC plan for 3 years now. Downtime has dropped dramatically. Whenever there's an issue, their team is on-site within hours. Best IT support partner we've worked with.",
    rating: 5,
  },
  {
    name: "Anil Mehta",
    role: "Principal, Bangalore Academy",
    text: "They set up our entire AV infrastructure — projectors, PA system, and video conferencing rooms. The quality of work is outstanding and the post-installation support has been excellent.",
    rating: 5,
  },
  {
    name: "Sneha Rao",
    role: "Store Manager, RetailChain",
    text: "BrightPro handled our POS system rollout across 3 locations. Everything from hardware to software configuration was handled perfectly. Highly recommend them for retail IT needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden">
      <div className="orb w-80 h-80 right-0 bottom-0 opacity-10"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Trusted by Businesses{" "}
            <span className="gradient-text">Across Bengaluru</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Card */}
          <div className="relative glass rounded-3xl p-8 sm:p-12 overflow-hidden"
            style={{ border: "1px solid rgba(30,45,74,0.8)" }}>
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-blue-400" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 font-light">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-10 h-10 rounded-full glass border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current
                      ? "linear-gradient(90deg, #3B82F6, #06B6D4)"
                      : "rgba(30,45,74,1)",
                  }}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-full glass border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
