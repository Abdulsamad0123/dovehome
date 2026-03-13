import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { properties } from "../data/properties";
import { MapPin, Bed, Bath, Maximize, Check } from "lucide-react";

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <DoveHeader />
        <div className="text-center px-6 pt-32">
          <h1 className="text-4xl text-[#2d2d2d] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Property Not Found
          </h1>
          <Link to="/properties" className="text-[#c9a961] hover:underline">
            Browse all properties
          </Link>
        </div>
        <DoveFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <DoveHeader />
      
      {/* Hero Image */}
      <section className="relative h-[70vh] mt-24">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c9a961] text-white px-4 py-1 rounded-full text-sm">
                  {property.status}
                </span>
                <span className="bg-white/90 backdrop-blur-sm text-[#2d2d2d] px-4 py-1 rounded-full text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a961]" />
                  {property.location}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {property.title}
              </h1>
              <p className="text-4xl text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                {property.price}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                      <Bed className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#5a5a5a]">Bedrooms</div>
                      <div className="text-xl text-[#2d2d2d]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        {property.bedrooms}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                      <Bath className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#5a5a5a]">Bathrooms</div>
                      <div className="text-xl text-[#2d2d2d]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        {property.bathrooms}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
                      <Maximize className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#5a5a5a]">Area</div>
                      <div className="text-xl text-[#2d2d2d]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        {property.area}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-3xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    About This Property
                  </h2>
                  <p className="text-lg text-[#5a5a5a] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {property.description}
                  </p>
                  <p className="text-lg text-[#5a5a5a] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    This exceptional {property.type.toLowerCase()} offers the perfect blend of luxury, comfort, and modern living in one of Abuja's most prestigious locations.
                  </p>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h2 className="text-3xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Property Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#c9a961]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-[#c9a961]" />
                        </div>
                        <span className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#fafaf8] p-8 rounded-2xl sticky top-32"
              >
                <h3 className="text-2xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Interested in this Property?
                </h3>
                
                <div className="space-y-4">
                  <Link
                    to="/schedule-viewing"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="block w-full px-6 py-4 bg-[#c9a961] text-white text-center rounded-full hover:bg-[#b8984f] transition-all duration-300 text-sm tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Schedule a Viewing
                  </Link>
                  
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="block w-full px-6 py-4 border-2 border-[#c9a961] text-[#c9a961] text-center rounded-full hover:bg-[#c9a961] hover:text-white transition-all duration-300 text-sm tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    Contact an Advisor
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg text-[#2d2d2d] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Property Details
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#5a5a5a]">Type:</span>
                      <span className="text-[#2d2d2d]" style={{ fontWeight: 500 }}>{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5a5a5a]">Status:</span>
                      <span className="text-[#2d2d2d]" style={{ fontWeight: 500 }}>{property.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5a5a5a]">Location:</span>
                      <span className="text-[#2d2d2d]" style={{ fontWeight: 500 }}>{property.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <section className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl text-[#2d2d2d] mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties
              .filter((p) => p.id !== property.id)
              .slice(0, 3)
              .map((relatedProperty) => (
                <Link key={relatedProperty.id} to={`/properties/${relatedProperty.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProperty.image}
                        alt={relatedProperty.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-[#2d2d2d] mb-2 group-hover:text-[#c9a961] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {relatedProperty.title}
                      </h3>
                      <p className="text-lg text-[#c9a961]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                        {relatedProperty.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
