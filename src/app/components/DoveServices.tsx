import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef } from "react";
import { Home, Building2, TrendingUp, Search, Shield, Users } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon: Icon, title, description, delay }: ServiceCardProps) {
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
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-gradient-to-br from-[#c9a961] to-[#b8984f] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        >
          <Icon className="w-8 h-8 text-white" />
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

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="h-0.5 bg-gradient-to-r from-[#c9a961] to-transparent mt-6"
        />
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: Home,
    title: "Luxury Sales",
    description: "Gain access to an exclusive portfolio of premium properties curated for discerning buyers seeking elegance and quality."
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Comprehensive property management services that preserve value and ensure your investment is maintained to the highest standards."
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment guidance backed by market expertise to help you make informed decisions and maximize returns."
  },
  {
    icon: Search,
    title: "Property Search",
    description: "Personalized property search services tailored to your specific requirements, lifestyle preferences, and budget."
  },
  {
    icon: Shield,
    title: "Legal & Due Diligence",
    description: "Complete legal support and thorough due diligence to ensure every transaction is secure, transparent, and hassle-free."
  },
  {
    icon: Users,
    title: "Relocation Services",
    description: "End-to-end relocation assistance for expatriates and professionals transitioning to new cities or countries."
  }
];

export function DoveServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fafaf8]" ref={ref}>
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
            COMPREHENSIVE SOLUTIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            From property discovery to closing, we provide end-to-end services tailored to your unique needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}