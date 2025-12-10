import React from "react";
import { motion } from "framer-motion";

const ParallaxSection = () => {
  return (
    <section 
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1567400358593-9e6382752ea2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')" }} // Unsplash background
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-white paralax-text">
          <h2 className="text-1xl font-bold mb-6 drop-shadow-lg">
            Amazing Parallax Section
          </h2>
          <p className="text-lg leading-relaxed drop-shadow-md">
           Welcome to BNSS, your trusted partner in ERP solutions , open-source software and technology innovations. We offer comprehensive digital solutions for businesses, professionals and tech enthusiasts worldwide. Our expertise includes web design, web development and mobile app development ensuring modern, high-performance digital experiences for specific industry needs. Whether you need a dynamic website, a scalable mobile application or a robust ERP system, BNSS delivers top-notch solutions that work.
          </p>
          <p>Empowering Innovation with AI, Robotics & IoT Projects At BNSS, we are at the forefront of artificial intelligence (AI) programs , coding and robotics training and IoT projects. Our research and development team explores latest advancements including drone technology, raspberry pi projects, VR & AR technology and AI driven automation. For tech enthusiasts and students, we offer online training for coding and projects, hands-on experience in robotics training and development. Our premium robotic kits provide interactive learning experience to learn automation, AI and robotics.</p>
        </div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80" 
            alt="Neon Example"
            className="w-full rounded-lg border-4 border-purple-500 shadow-[0_0_25px_rgba(128,0,255,0.7)] animate-pulse"
          />
        </motion.div>
      </div>
     
    </section>

    
  );
};

export default ParallaxSection;
