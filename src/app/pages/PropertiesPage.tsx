import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useState } from "react";
import { properties } from "../data/properties";
import { Link } from "react-router";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

export function PropertiesPage() {
  const [filter, setFilter] = useState<"All" | "For Sale" | "For Rent">("All");
  const [sortBy, setSortBy] = useState<"price-low" | "price-high">("price-high");

  const filteredProperties = properties
    .filter((property) => filter === "All" || property.status === filter)
    .sort((a, b) => {
      if (sortBy === "price-high") {
        return b.priceNumeric - a.priceNumeric;
      }
      return a.priceNumeric - b.priceNumeric;
    });

  return (
    <div className="min-h-screen bg-white">
      <DoveHeader />
      <section className="relative py-20 bg-gradient-to-br from-[#0b1726] to-[#1e2b46]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Properties
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Explore our exclusive collection of luxury properties in Abuja.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-[#fafaf8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Status Filter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Filter:
              </span>
              <div className="flex gap-2">
                {["All", "For Sale", "For Rent"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status as any)}
                    className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                      filter === status
                        ? "bg-[#c9a961] text-white"
                        : "bg-white text-[#5a5a5a] hover:bg-gray-100"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-6 py-2 bg-white rounded-full text-sm border border-gray-200 focus:outline-none focus:border-[#c9a961]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/properties/${property.id}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-[#c9a961] text-white px-4 py-1 rounded-full text-sm">
                        {property.status}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#c9a961]" />
                        <span className="text-sm text-[#2d2d2d]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {property.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-2xl text-[#2d2d2d] mb-2 group-hover:text-[#c9a961] transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {property.title}
                      </h3>
                      <p className="text-2xl text-[#c9a961] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        {property.price}
                      </p>

                      {/* Features */}
                      <div className="flex items-center gap-4 text-[#5a5a5a]">
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4" />
                          <span className="text-sm">{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4" />
                          <span className="text-sm">{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4" />
                          <span className="text-sm">{property.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
