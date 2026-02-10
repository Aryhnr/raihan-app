import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit - buka modal dulu
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Tampilkan modal konfirmasi
  };

  // Fungsi kirim email sebenarnya
  const sendEmail = async () => {
    setShowModal(false);
    setStatus({ loading: true, success: false, error: false });

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Success
      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      // UBAH: Background jadi brand-bg, text jadi dark
      className="bg-brand-bg text-neutral-900 py-24 md:py-30 relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="flex-1 h-[1px] bg-neutral-200"></div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-600 whitespace-nowrap">
            Contact Channel — (06)
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* KOLOM KIRI: INFORMASI UTAMA */}
          <div className="flex flex-col justify-between h-full space-y-16">
            {/* Header Section */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]">
                Let's Start <br />
                <span className="font-serif italic font-light text-gray-600">
                  Something New.
                </span>
              </h2>
              {/* UBAH: Text muted jadi neutral-500 */}
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-md font-light">
                Ready to turn complex ideas into digital realities. Feel free to
                reach out for freelance or technical collaborations.
              </p>
            </div>

            {/* Location & Contact Block */}
            <div className="space-y-10">
              {/* Lokasi */}
              <div className="relative pl-8 border-l-2 border-black/50">
                {/* UBAH: Label bg jadi brand-bg */}
                <span className="absolute -top-3 left-8 font-mono text-[9px] text-neutral-600 uppercase tracking-widest bg-brand-bg pr-2">
                  Base_Operations
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900">
                  Pamekasan, Madura
                </h3>
                <p className="font-mono text-[11px] text-neutral-700 uppercase tracking-widest mt-1">
                  Jawa Timur, Indonesia (IDN)
                </p>
              </div>

              {/* Detail Kontak Grid */}
              {/* UBAH: Border jadi neutral-200 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-200">
                <div className="group cursor-pointer">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.2em] mb-2 block group-hover:text-black transition-colors">
                    Electronic_Mail
                  </span>

                  <a
                    href="mailto:raihan.webml@gmail.com"
                    className="text-lg font-bold tracking-tight border-b border-transparent group-hover:border-black transition-all text-neutral-900"
                  >
                    raihan.webml@gmail.com
                  </a>
                </div>

                <div className="group cursor-pointer">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.2em] mb-2 block group-hover:text-black transition-colors">
                    Secure_Line
                  </span>

                  <a
                    href="https://wa.me/6289530516187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold tracking-tight border-b border-transparent group-hover:border-black transition-all text-neutral-900"
                  >
                    +62 895-3051-6187
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR */}
          {/* UBAH: bg-white, border-neutral-200 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 relative">
            {/* Status Indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <motion.span
                animate={{
                  scale: status.loading ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: status.loading ? Infinity : 0,
                }}
                className={`w-1.5 h-1.5 rounded-full ${
                  status.success
                    ? "bg-green-500"
                    : status.error
                      ? "bg-red-500"
                      : status.loading
                        ? "bg-black"
                        : "bg-green-500"
                } ${!status.loading && "animate-pulse"}`}
              />
              <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                {status.loading
                  ? "Sending..."
                  : status.success
                    ? "Message_Sent"
                    : status.error
                      ? "Send_Failed"
                      : "System_Ready"}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 mt-4">
              {/* Input: Name */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.2em]">
                  01 // Full_Name
                </label>
                {/* UBAH: Input style light mode */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ENTER YOUR NAME"
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 font-bold text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:border-black focus:bg-white transition-all uppercase tracking-wider"
                />
              </div>

              {/* Input: Email */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.2em]">
                  02 // Email_Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 font-bold text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:border-black focus:bg-white transition-all uppercase tracking-wider"
                />
              </div>

              {/* Input: Message */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.2em]">
                  03 // Brief_Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="PROJECT DETAILS..."
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 font-bold text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:border-black focus:bg-white transition-all uppercase tracking-wider resize-none"
                />
              </div>

              {/* Success/Error Message */}
              {(status.success || status.error) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 border ${
                    status.success
                      ? "bg-green-500/10 border-green-500/30 text-green-600"
                      : "bg-red-500/10 border-red-500/30 text-red-600"
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-wider">
                    {status.success
                      ? "✓ Message sent successfully!"
                      : "✗ Failed to send message. Please try again."}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.loading}
                whileHover={{ scale: status.loading ? 1 : 1.01 }}
                whileTap={{ scale: status.loading ? 1 : 0.99 }}
                // UBAH: Tombol Hitam, Hover Kuning
                className={`w-full py-5 font-black uppercase text-xs tracking-[0.4em] transition-colors duration-300 mt-4 ${
                  status.loading
                    ? "bg-neutral-200 text-neutral-600 cursor-not-allowed"
                    : "bg-neutral-900 text-white hover:bg-neutral-400 hover:text-black"
                }`}
              >
                {status.loading ? "Sending..." : "Send_Inquiry"}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* MODAL KONFIRMASI */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            {/* UBAH: Modal bg putih */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-neutral-200 max-w-md w-full p-8 relative shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-black" />
                <span className="font-mono text-black text-[10px] tracking-[0.3em] uppercase">
                  Confirm_Send
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-neutral-900">
                Review Your Message
              </h3>

              {/* Preview Data */}
              {/* UBAH: Preview box light */}
              <div className="space-y-4 mb-8">
                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-wider block mb-2">
                    Name
                  </span>
                  <p className="text-neutral-900 font-bold">{formData.name}</p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-wider block mb-2">
                    Email
                  </span>
                  <p className="text-neutral-900 font-bold">{formData.email}</p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-wider block mb-2">
                    Message
                  </span>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {formData.message}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  // UBAH: Tombol Cancel Light
                  className="py-3 border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-900 font-mono text-xs uppercase tracking-widest transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={sendEmail}
                  className="py-3 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-neutral-500 transition-colors"
                >
                  Send Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
