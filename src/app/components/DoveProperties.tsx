import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef, useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { properties as allProperties } from "../data/properties";

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  delay?: number;
}

function PropertyCard({ id, image, name, location, price, delay = 0 }: PropertyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/properties/${id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 h-96">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-white text-[#2d2d2d] rounded-full flex items-center gap-2 hover:bg-[#c9a961] hover:text-white transition-colors text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              View Details
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Location Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c9a961]" />
            <span className="text-sm text-[#2d2d2d]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {location}
            </span>
          </div>
        </div>

        <div className="px-2">
          <h3
            className="text-2xl text-[#2d2d2d] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h3>
          <p
            className="text-xl text-[#c9a961]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            {price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

const properties = allProperties.slice(0, 3).map(prop => ({
  id: prop.id,
  image: prop.image,
  name: prop.title,
  location: prop.location,
  price: prop.price
}));

export function DoveProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="properties" className="py-24 lg:py-32 bg-white" ref={ref}>
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
            FEATURED COLLECTION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Exquisite Properties
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Each residence in our collection represents the pinnacle of luxury living, 
            meticulously curated for the most discerning clientele.
          </motion.p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} {...property} delay={0.2 + index * 0.1} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/properties"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block px-10 py-4 border-2 border-[#c9a961] text-[#c9a961] rounded-full hover:bg-[#c9a961] hover:text-white transition-all duration-300 text-sm tracking-wide hover:shadow-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            View All Properties
          </Link>
        </motion.div>
      </div>
    </section>
  );
}