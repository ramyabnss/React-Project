// File: src/components/NeonFooter.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.037790965953!2d80.2707188152649!3d13.082680990695904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c0f0f0f0%3A0x0!2sChennai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";

const socialIcons = [FaFacebook, FaInstagram, FaTwitter, FaYoutube];

const NeonFooter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll contact ${email}.`);
    setEmail("");
  };

  return (
    <div className="bg-black text-white relative">

      {/* Neon Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top Neon Divider Wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" className="#e2e2e2 w-full" preserveAspectRatio="none">
          <path
            d="M0,32L40,48C80,64,160,96,240,106.7C320,117,400,107,480,90.7C560,74,640,52,720,48C800,44,880,58,960,74.7C1040,91,1120,109,1200,112C1280,115,1360,101,1400,94.7L1440,88L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="currentColor"
            opacity="0.12"
          />
        </svg>
      </div>

      {/* Footer main section */}
      <footer className="relative overflow-hidden py-12 px-6 md:px-12 bg-gradient-to-b from-[#061026] via-[#07112a]/60 to-transparent">

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* 4 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md 
             shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all 
             hover:shadow-[0_0_40px_white] cursor-default"
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 45px rgba(255,255,255,0.85)"
              }}
            >
              <h3 className="text-3xl font-bold mb-3 drop-shadow-[0_0_10px_white]">Our Center</h3>
              <p className="opacity-90">We provide best services and support with neon UI.</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md 
             shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all 
             hover:shadow-[0_0_40px_white] cursor-default"
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 45px rgba(255,255,255,0.85)"
              }}
            >
              <h3 className="text-3xl font-bold mb-3 drop-shadow-[0_0_10px_white]">Contact Us</h3>
              <p className="opacity-90">📍 123 Neon Street, City</p>
              <p className="opacity-90">📞 +91 98765 43210</p>
              <p className="opacity-90">📧 neon@example.com</p>
            </motion.div>


            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md 
             shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all 
             hover:shadow-[0_0_40px_white] cursor-default"
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 45px rgba(255,255,255,0.85)"
              }}
            >
              <h3 className="text-3xl font-bold mb-3 drop-shadow-[0_0_10px_white]">Quick Links</h3>
              <ul className="space-y-2 opacity-90">
                <li className="hover:text-yellow-300 transition">Home</li>
                <li className="hover:text-yellow-300 transition">About</li>
                <li className="hover:text-yellow-300 transition">Services</li>
                <li className="hover:text-yellow-300 transition">Contact</li>
              </ul>
            </motion.div>

            {/* Social */}
            {/* <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
              <h4 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                Follow Us
              </h4>
              <div className="h-1 w-16 my-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />

              <div className="flex gap-3 mt-4">
                {socialIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    className="p-3 rounded-full bg-white/10 border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_15px_#ec4899]"
                  >
                    <Icon className="text-xl" />
                  </motion.div>
                ))}
              </div>
            </div> */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md 
             shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all 
             hover:shadow-[0_0_40px_white] cursor-default"
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 45px rgba(255,255,255,0.85)"
              }}
            >
              <h3 className="text-3xl font-bold mb-3 drop-shadow-[0_0_10px_white]">Follow Us</h3>

              <div className="flex justify-center md:justify-start gap-6">
                {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-white/20 border border-white/30 shadow-[0_0_20px_white] hover:shadow-[0_0_35px_white] transition-all cursor-pointer"
                  >
                    <Icon className="text-2xl" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter + Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
              <h4 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm opacity-90 mt-2">Get updates, events and announcements.</p>

              <form onSubmit={handleNewsletter} className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-black/20 placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:scale-105 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Map Card */}
            <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-3xl">Our Location</h5>
                  <p className="text-xs opacity-90">Main Road, Your City, Tamil Nadu</p>
                </div>
                <div className="text-sm opacity-80">Open: Mon–Fri</div>
              </div>

              <div className="w-full h-56 md:h-44">
                <iframe
                  title="SJGS Location"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Neon Floating Balls */}
        {/* <motion.div
          className="absolute -left-6 top-24 w-28 h-28 rounded-full border-4 border-pink-500 bg-pink-500/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-6 bottom-36 w-32 h-32 rounded-full border-4 border-cyan-400 bg-cyan-400/20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        /> */}


        {/* Copyright */}
        <div className="mt-12 pt-6 text-center border-t border-white/10">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} SJGS School. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NeonFooter;
