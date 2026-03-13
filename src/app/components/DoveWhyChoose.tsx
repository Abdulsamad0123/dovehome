import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";
import { Home, MapPin, Shield, Users } from "lucide-react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon: Icon, title, description, delay }: FeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-gradient-to-br from-[#c9a961]/10 to-[#c9a961]/5 rounded-2xl flex items-center justify-center mb-6"
        >
          <Icon className="w-8 h-8 text-[#c9a961]" />
        </motion.div>

        <h3
          className="text-2xl text-[#2d2d2d] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <p
          className="text-[#5a5a5a] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: Home,
    title: "Thoughtfully Designed Spaces",
    description: "Every property is selected for its architectural integrity, elegant design, and attention to detail that transforms houses into homes."
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "We offer properties in the most sought-after locations, ensuring convenience, prestige, and long-term value appreciation."
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Our commitment to integrity means clear communication, honest valuations, and a seamless experience from first viewing to final handover."
  },
  {
    icon: Users,
    title: "Trusted Advisory Team",
    description: "Work with experienced professionals who understand your unique needs and guide you with expertise, care, and personalized attention."
  }
];

export function DoveWhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-[#fafaf8]" ref={ref}>
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
            EXCELLENCE IN EVERY DETAIL
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose Dove Homes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Our commitment to excellence and unparalleled service sets us apart in the luxury real estate market.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}