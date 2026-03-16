import { DoveHeader } from "../components/DoveHeader";
import { DoveFooter } from "../components/DoveFooter";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSubmitError(
        "Email service not configured. Please set EmailJS credentials in your .env file."
      );
      return;
    }

    setSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "dovehomes247@gmail.com",
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email submission error:", error);
      setSubmitError("Something went wrong. Please try again later or contact us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
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
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              We'd love to hear from you. Reach out to our team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-[#2d2d2d] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Visit Our Office
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#2d2d2d] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Address
                    </h3>
                    <p className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      NO. 16, Emeka Anyaoku Street<br />
                      Area 11, Garki<br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#2d2d2d] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Phone
                    </h3>
                    <p className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      07036537555<br />
                      08032237889<br />
                      09034445919
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#2d2d2d] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Email
                    </h3>
                    <p className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      dovehomes247@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a961]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#2d2d2d] mb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Office Hours
                    </h3>
                    <p className="text-[#5a5a5a]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
                <iframe
                  title="Dove Homes Office Location"
                  src="https://www.google.com/maps?q=NO.+16+Emeka+Anyaoku+Street+Area+11+Garki+Abuja&output=embed"
                  width="100%"
                  height="280"
                  className="border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#fafaf8] p-8 lg:p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl text-[#2d2d2d] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 px-6 py-4 text-emerald-900">
                    Thank you! Your message has been received. We'll get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#5a5a5a] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961] transition-colors resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  {submitError && (
                    <div className="mb-4 rounded-xl bg-rose-50 border border-rose-200 px-6 py-4 text-rose-900">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 ${
                      submitting
                        ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                        : "bg-[#c9a961] text-white hover:bg-[#b8984f]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DoveFooter />
    </div>
  );
}
