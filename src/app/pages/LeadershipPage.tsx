import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { MessageCircle, Linkedin } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import ceoImage from "@/assets/ceo.jpeg";

const ceoMember = {
  name: "ENGR. EMMANUEL OMEDE",
  title: "Chief Executive Officer",
  image: ceoImage,
  bio: "Engr. Emmanuel Omede is a visionary leader with over 15 years of experience in luxury real estate development and engineering. His commitment to excellence and innovation has positioned Dove Homes as a premier real estate company in Abuja. With deep expertise in premium real estate and a passion for delivering exceptional client experiences, he steers our team to create properties that feel like home.",
  email: "dovehomes247@gmail.com"
};

export function LeadershipPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white">
      <DoveHeader />
      <HeroSection
        title="Our Leadership"
        subtitle="Meet the visionary leading Dove Homes toward excellence."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80"
        heightClass="h-[50vh]"
      />

      {/* CEO Section */}
      <section className="py-24 lg:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#c9a961]/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                  <img
                    src={ceoImage}
                    alt={ceoMember.name}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>

            {/* CEO Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2
                className="text-4xl lg:text-5xl text-[#2d2d2d] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {ceoMember.name}
              </h2>
              <p
                className="text-xl text-[#c9a961] mb-6 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                {ceoMember.title}
              </p>
              <p
                className="text-lg text-[#5a5a5a] leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {ceoMember.bio}
              </p>

              {/* Contact Links */}
              <div className="flex gap-6">
                <a
                  href="https://wa.me/2348032237889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#c9a961] text-white rounded-lg hover:bg-[#b8945a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Contact</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#c9a961] text-[#c9a961] rounded-lg hover:bg-[#c9a961] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Connect</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Core Values
            </h2>
            <p
              className="text-lg text-[#5a5a5a] max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Excellence, integrity, and innovation guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We maintain the highest standards of quality in every project and client interaction."
              },
              {
                title: "Integrity",
                description: "Honesty and transparency are the foundation of our business relationships."
              },
              {
                title: "Innovation",
                description: "We embrace creativity and forward-thinking solutions in luxury real estate."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3
                  className="text-2xl text-[#2d2d2d] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#5a5a5a] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
