import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function DoveLeadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[#c9a961] text-sm tracking-widest mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            LEADERSHIP
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our Visionary Leader
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Guided by experience, driven by excellence, and committed to creating lasting value.
          </motion.p>
        </div>

        {/* Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#fafaf8] rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Image */}
              <div className="md:col-span-2">
                <div className="h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Engr. Emmanuel Omede"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3
                    className="text-3xl lg:text-4xl text-[#2d2d2d] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Engr. Emmanuel Omede
                  </h3>
                  <p
                    className="text-[#c9a961] text-lg mb-6"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Chief Executive Officer & Founder
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4 mb-8"
                >
                  <p
                    className="text-[#5a5a5a] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    With over two decades of experience in real estate development and investment, 
                    Engr. Emmanuel Omede founded Dove Homes with a singular vision: to create spaces 
                    where elegance, comfort, and enduring value converge.
                  </p>
                  <p
                    className="text-[#5a5a5a] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    His background in engineering brings a unique perspective to property development, 
                    ensuring that every home in our collection meets the highest standards of quality, 
                    design, and structural excellence.
                  </p>
                  <p
                    className="text-[#5a5a5a] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    Under his leadership, Dove Homes has become synonymous with luxury, integrity, 
                    and exceptional service in the premium real estate market.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 shadow-md">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 shadow-md">
                    <Mail className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Leadership Team Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p
            className="text-[#5a5a5a] mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Supported by a team of dedicated professionals committed to excellence
          </p>
          <Link
            to="/leadership"
            className="inline-block px-8 py-3 border-2 border-[#c9a961] text-[#c9a961] rounded-full hover:bg-[#c9a961] hover:text-white transition-all duration-300 text-sm tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Meet Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}