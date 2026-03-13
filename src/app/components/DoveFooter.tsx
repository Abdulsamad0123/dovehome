import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

export function DoveFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer className="bg-[#2d2d2d] text-white" ref={ref}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dove Homes
            </h3>
            <p
              className="text-white/70 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Where elegance meets tranquility. Curating exceptional living spaces for discerning clients worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:border-[#c9a961] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4
              className="text-lg mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Properties", path: "/properties" },
                { label: "About Us", path: "/about" },
                { label: "Leadership", path: "/leadership" },
                { label: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4
              className="text-lg mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {["Luxury Sales", "Property Management", "Investment Advisory", "Relocation Services", "Virtual Tours"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4
              className="text-lg mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  NO. 16, Emeka Anyaoku Street<br />Area 11, Garki<br />Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <div className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  <a href="tel:+2347036537555" className="hover:text-[#c9a961] transition-colors block">
                    07036537555
                  </a>
                  <a href="tel:+2348032237889" className="hover:text-[#c9a961] transition-colors block">
                    08032237889
                  </a>
                  <a href="tel:+2349034445919" className="hover:text-[#c9a961] transition-colors block">
                    09034445919
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                <a
                  href="mailto:dovehomes247@gmail.com"
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  dovehomes247@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <span
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 4PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/60 text-sm text-center md:text-left"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              © 2026 Dove Homes. All rights reserved. Crafted with excellence.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#c9a961] transition-colors text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#c9a961] transition-colors text-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}