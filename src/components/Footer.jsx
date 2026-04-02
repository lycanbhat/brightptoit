import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const links = {
  Company: ["About Us", "Services", "Contact"],
  Services: ["Network Installation", "CCTV Systems", "Biometric Access", "AV Solutions", "AMC Plans"],
  Legal: ["Terms & Conditions", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(6,182,212,0.3), transparent)" }} />

      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #3B82F6 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #06B6D4 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-4">
              <img
                src="/brightpro-light.svg"
                alt="BrightPro IT Solutions"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Reliable IT infrastructure and managed services for businesses across
              Bengaluru. 8+ years of hands-on expertise.
            </p>

            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Bengaluru, Karnataka, India" },
                { icon: Phone, text: "+91-9739305983", href: "tel:+919739305983" },
                { icon: Mail, text: "support@brightproit.com", href: "mailto:support@brightproit.com" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-gray-500 text-sm">
                  <Icon size={15} className="text-blue-500 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity -ml-4 group-hover:ml-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
          style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
          <div>
            <h4 className="text-white font-bold text-lg mb-1">Ready to upgrade your IT infrastructure?</h4>
            <p className="text-gray-500 text-sm">Get a free site assessment and quote today.</p>
          </div>
          <a href="#contact" className="btn-primary text-sm flex-shrink-0">
            Request a Demo <ArrowRight size={16} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(30,45,74,0.6)" }}>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} BrightPro IT Solutions. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
}
