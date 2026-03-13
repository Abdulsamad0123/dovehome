import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";
import { Send } from "lucide-react";

export function DoveContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-[#c9a961] text-sm tracking-widest mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              GET IN TOUCH
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Begin Your Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#5a5a5a]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Let us help you discover the home of your dreams. Our team is ready to assist you.
            </motion.p>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#fafaf8] rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[#2d2d2d] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition text-[#2d2d2d]"
                    placeholder="John"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[#2d2d2d] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition text-[#2d2d2d]"
                    placeholder="Doe"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#2d2d2d] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition text-[#2d2d2d]"
                    placeholder="john@example.com"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#2d2d2d] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition text-[#2d2d2d]"
                    placeholder="+1 (234) 567-890"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-[#2d2d2d] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  I'm interested in
                </label>
                <select
                  id="interest"
                  className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition text-[#2d2d2d]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option>Buying a property</option>
                  <option>Investment opportunities</option>
                  <option>Property valuation</option>
                  <option>Scheduling a viewing</option>
                  <option>General inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#2d2d2d] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a961] transition resize-none text-[#2d2d2d]"
                  placeholder="Tell us about your ideal home..."
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b8984f] transition-all duration-300 hover:shadow-xl text-sm tracking-wide flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              <p
                className="text-center text-[#5a5a5a] text-sm mt-4"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                We respect your privacy and will respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}