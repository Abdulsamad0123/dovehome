import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Calendar, Clock, Home } from "lucide-react";

export function ScheduleViewingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    time: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your viewing has been scheduled! We'll send you a confirmation email shortly.");
    setFormData({ name: "", email: "", phone: "", property: "", date: "", time: "", message: "" });
  };

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
              Schedule a Viewing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Book a private tour of your dream property. Our advisors will help you find the perfect match.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#fafaf8] p-8 lg:p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Property Viewing Details
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Property of Interest *
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9a961]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Luxury Villa in Maitama"
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9a961]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9a961]" />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors appearance-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific requirements or questions?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b8984f] transition-all duration-300 text-sm tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Schedule Viewing
              </button>

              <p className="text-sm text-[#5a5a5a] text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                One of our advisors will contact you within 24 hours to confirm your viewing appointment.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
