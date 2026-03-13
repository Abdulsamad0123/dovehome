import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoSrc from "@/assets/logo.jpeg";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function DoveHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/properties" },
    { label: "About", path: "/about" },
    { label: "Leadership", path: "/leadership" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Dove Homes Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`text-2xl lg:text-3xl tracking-tight transition-colors font-bold ${
                  scrolled ? "text-[#c9a961]" : "text-[#c9a961]"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dove Homes
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm tracking-wide transition-colors ${
                    scrolled
                      ? "text-[#5a5a5a] hover:text-[#c9a961]"
                      : "text-white/90 hover:text-white"
                  } ${location.pathname === item.path ? "text-[#c9a961] font-medium" : ""}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={scrollToTop}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/schedule-viewing"
                className="hidden lg:block px-6 py-2.5 bg-[#c9a961] text-white text-sm tracking-wide rounded-full hover:bg-[#b8984f] transition-all duration-300 hover:shadow-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Schedule Viewing
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? "text-[#2d2d2d]" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-[#2d2d2d]" : "text-white"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-6 border-t border-gray-200"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[#5a5a5a] hover:text-[#c9a961] transition ${
                    location.pathname === item.path ? "text-[#c9a961] font-medium" : ""
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3">
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center w-full px-6 py-2.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
                  type="button"
                >
                  Reload
                </button>
                <Link
                  to="/schedule-viewing"
                  className="w-full px-6 py-2.5 bg-[#c9a961] text-white text-sm rounded-full hover:bg-[#b8984f] transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Viewing
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}