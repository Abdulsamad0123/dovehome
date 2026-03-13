import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Victoria Chen",
    role: "Investment Executive",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Dove Homes helped us find our dream penthouse with effortless elegance. Their attention to detail and understanding of luxury living is unparalleled. The entire process felt personalized and refined."
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Entrepreneur",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "The professionalism and expertise of the Dove Homes team made purchasing our family estate a pleasure. They truly understand what sophisticated clients need and deliver beyond expectations."
  },
  {
    id: 3,
    name: "Sophia Laurent",
    role: "Art Collector",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "I've worked with many luxury real estate companies, but Dove Homes stands apart. Their curated collection reflects true taste and quality. Our coastal villa is everything we envisioned and more."
  }
];

export function DoveTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            CLIENT EXPERIENCES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Voices of Satisfaction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Hear from those who have found their sanctuary with Dove Homes.
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-[#c9a961]/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-[#c9a961]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Image */}
              <div className="md:col-span-1">
                <div className="w-32 h-32 md:w-full md:h-48 mx-auto overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-[#2d2d2d] mb-8 leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                <motion.div
                  key={`info-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4
                    className="text-xl text-[#2d2d2d] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonials[currentIndex].name}
                  </h4>
                  <p
                    className="text-[#5a5a5a] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                  <p
                    className="text-[#c9a961] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonials[currentIndex].location}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border-2 border-[#c9a961] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#c9a961] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border-2 border-[#c9a961] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}