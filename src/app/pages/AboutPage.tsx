import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { Award, Users, Home, Target } from "lucide-react";
import { Link } from "react-router";
import { HeroSection } from "../components/HeroSection";

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white">
      <DoveHeader />
      <HeroSection
        title="Our Story"
        subtitle="Building dreams, one home at a time, across Abuja, Nigeria"
        primaryCta={{ label: "View Properties", to: "/properties" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        heightClass="h-[60vh]"
      />

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#c9a961] text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                OUR MISSION
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quality, Affordability & Security
              </h2>
              <p className="text-lg text-[#5a5a5a] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                To provide quality, affordable and secured real estate developments while delivering exceptional service and creating lasting value for our clients and communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-[#c9a961] text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                OUR VISION
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Nigeria's Most Trusted Developer
              </h2>
              <p className="text-lg text-[#5a5a5a] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                To become one of Nigeria's most trusted and innovative real estate development companies, known for excellence, integrity and sustainable housing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 lg:py-32 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#c9a961] text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                WHO WE ARE
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                More Than Real Estate
              </h2>
              <p className="text-lg text-[#5a5a5a] mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Dove Homes is a premier luxury real estate company based in Abuja, Nigeria. We specialize in connecting discerning clients with exceptional properties that embody elegance, comfort, and lasting value.
              </p>
              <p className="text-lg text-[#5a5a5a] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Since our founding, we've been committed to redefining the real estate experience in Nigeria—offering not just homes, but sanctuaries where memories are made and legacies are built.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTkyNjM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Interior"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#2d2d2d] to-[#4d4d4d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, value: "500+", label: "Properties Listed" },
              { icon: Users, value: "1,200+", label: "Happy Clients" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Target, value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-[#c9a961] mx-auto mb-4" />
                <div className="text-5xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-[#c9a961] text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Dove Homes Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise",
                description: "Deep knowledge of Abuja's most prestigious neighborhoods and emerging luxury markets."
              },
              {
                title: "Personalized Service",
                description: "Dedicated advisors who understand your unique needs and work tirelessly to exceed expectations."
              },
              {
                title: "Exclusive Access",
                description: "First access to off-market properties and premium listings before they hit the market."
              },
              {
                title: "Trust & Transparency",
                description: "Honest communication and full transparency throughout your real estate journey."
              },
              {
                title: "Luxury Standards",
                description: "Every property in our portfolio meets the highest standards of quality and elegance."
              },
              {
                title: "End-to-End Support",
                description: "From property search to closing and beyond, we're with you every step of the way."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#fafaf8] p-8 rounded-2xl"
              >
                <h3 className="text-xl text-[#2d2d2d] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fafaf8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Find Your Dream Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Let our team of experts guide you to the perfect property in Abuja
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/properties"
              className="px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b8984f] transition-all duration-300 text-sm tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-[#c9a961] text-[#c9a961] rounded-full hover:bg-[#c9a961] hover:text-white transition-all duration-300 text-sm tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
