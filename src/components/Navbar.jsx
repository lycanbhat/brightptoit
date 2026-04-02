import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to.replace("/#", "/"));
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-navbar shadow-xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3 h-16 lg:h-20">
          {/* Logo — left col */}
          <Link to="/" className="flex items-center">
            <img
              src="/brightpro-light.svg"
              alt="BrightPro IT Solutions"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav — center col */}
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {links.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(to)
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle — right col */}
          <div className="flex items-center justify-end">
            <Link to="/contact" className="btn-primary text-sm hidden lg:inline-flex">
              Request a Demo
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {/* Top line */}
                <motion.line
                  x1="3" y1="6" x2="19" y2="6"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  className="text-gray-300"
                  animate={mobileOpen
                    ? { x1: 4, y1: 4, x2: 18, y2: 18 }
                    : { x1: 3, y1: 6,  x2: 19, y2: 6  }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {/* Middle line */}
                <motion.line
                  x1="3" y1="11" x2="19" y2="11"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  className="text-gray-300"
                  animate={mobileOpen
                    ? { opacity: 0, x1: 11, x2: 11 }
                    : { opacity: 1, x1: 3,  x2: 19  }
                  }
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                {/* Bottom line */}
                <motion.line
                  x1="3" y1="16" x2="19" y2="16"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  className="text-gray-300"
                  animate={mobileOpen
                    ? { x1: 4, y1: 18, x2: 18, y2: 4 }
                    : { x1: 3, y1: 16, x2: 19, y2: 16 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-t border-dark-500"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    isActive(to)
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary text-sm mt-2 justify-center">
                Request a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
