import logo from './logo.svg';
// import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counter from "./components/CounterSection";
import ParallaxSection from './components/ParallaxSection';
import TabsSection from './components/TabsSection';
import NeonFooter from "./components/NeonFooter";
import SplashCursor from './components/SplashCursor';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";




function Home() {
  return (
    <>
      <Hero />
      <Counter />

      <ParallaxSection />

      <section className="py-20 px-4 bg-black" >
        <div className="paralax-text text-center mb-12">
          <h2 className='mt-3 text-3xl md:text-4xl font-bold'>We are Trusted By the Best</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Title + Button */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Schools</h2>

            <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:scale-105 transition">
              View More
            </button>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(1)-CUHVgiEv.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST. JOSEPH INTERNATIONAL SCHOOL -
                Aralvaimozhi
              </h3>
            </div>

            {/* Column 2 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST. JOSEPH GLOBAL SCHOOL
                Devarkulam
              </h3>
            </div>

            {/* Column 3 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DON BOSCO MATRIC. HR. SEC. SCHOOL
                Melapalayam
              </h3>
            </div>

            {/* Column 4 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(4)-CLqnyue9.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DMI.ST JOSEPH GLOBAL SCHOOL
                Karaikal
              </h3>
            </div>
          </div>
          <div className="my-10 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>


          <div data-aos="zoom-in" className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Colleges</h2>

            <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:scale-105 transition">
              View More
            </button>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-halftone-background_23-2148594023.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(1)-CUHVgiEv.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST.JOSEPH COLLEGE OF ENGINEERING
                Chennai
              </h3>
            </div>

            {/* Column 2 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-halftone-background_23-2148594023.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST. JOSEPH GLOBAL SCHOOL
                Devarkulam
              </h3>
            </div>

            {/* Column 3 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-halftone-background_23-2148594023.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DON BOSCO MATRIC. HR. SEC. SCHOOL
                Melapalayam
              </h3>
            </div>

            {/* Column 4 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-halftone-background_23-2148594023.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(4)-CLqnyue9.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DMI.ST JOSEPH GLOBAL SCHOOL
                Karaikal
              </h3>
            </div>
          </div>
          <div className="my-10 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Organizations & Abroad Institutions
            </h2>

            <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:scale-105 transition">
              View More
            </button>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(1)-CUHVgiEv.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST. JOSEPH INTERNATIONAL SCHOOL
                Aralvaimozhi
              </h3>
            </div>

            {/* Column 2 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                ST. JOSEPH GLOBAL SCHOOL
                Devarkulam
              </h3>
            </div>

            {/* Column 3 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(2)-DmxFd6gk.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DON BOSCO MATRIC. HR. SEC. SCHOOL
                Melapalayam
              </h3>
            </div>

            {/* Column 4 */}
            <div
              className="h-64 rounded-xl p-4 flex flex-col items-center justify-between bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/colorful-abstract-illustration-purple-abstract-background-with-circles-dots_337384-148697.jpg?semt=ais_hybrid&w=740&q=80')" }}
            >
              <img src="https://bnss.in/assets/sch%20(4)-CLqnyue9.jpg" className="w-25 h-25 mt-3 border-yellow-300" alt="" />
              <h3 className="text-xl font-semibold text-white p-2 drop-shadow bg-black/30 px-1">
                DMI.ST JOSEPH GLOBAL SCHOOL
                Karaikal
              </h3>
            </div>
          </div>
          <div className="my-10 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>


        </div>
      </section>


      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center paralax-text">

          {/* Heading */}
          {/* <h2 className="text-yellow-500 tracking-wide">INTRODUCTION</h2> */}
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Join Our Team
          </h2>

          {/* Paragraph */}
          <p className="mt-5 leading-8 text-justify md:text-center">
            The BNSS IoT KIT simplifies IoT project development with sensors, actuators,
            and connectivity modules. Its user-friendly plug-and-play interface integrates
            easily with IoT platforms and cloud services. You can learn the mechanism of
            many IoT applications and build hundreds of projects using this kit, such as
            smart home, industrial monitoring, disaster management applications, etc…
          </p>

          {/* Neon Button */}
          <div className="mt-8">
            <button className="
            px-8 py-3 
            rounded-full 
            font-semibold 
            text-white 
            bg-blue-600 
            shadow-[0_0_12px_#00eaff,0_0_24px_#00eaff]
            hover:shadow-[0_0_18px_#00eaff,0_0_36px_#00eaff]
            transition-all 
            duration-300
          ">
              Explore More 🚀
            </button>
          </div>

        </div>
      </section>

      <TabsSection />

     <section className="w-full text-white py-40">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

    {/* LEFT CONTENT WITH SCROLL ANIMATION */}
    <motion.div
      className="flex flex-col justify-center space-y-6"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-yellow-400 uppercase tracking-wide font-semibold">
        Interior Design Agency
      </p>

     <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
  <span
    className="bg-[linear-gradient(90deg,#ff00e6,#00eaff,#7b2fff,#ff00e6)]
               bg-clip-text text-transparent"
  >
    We Create More
  </span>
  <br />
  {/* <span className="text-yellow-400">than just Interior.</span> */}
</h2>
    

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam 
        nonummy nibh euismod tincidunt ut laoreet dolore magna.
      </p>

      {/* BUTTON */}
      <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg 
      hover:bg-yellow-500 transition-all flex items-center gap-2 w-fit">
        Know more →
      </button>
    </motion.div>

    {/* RIGHT IMAGES WITH SCROLL ANIMATION */}
    <motion.div
  className="grid grid-cols-3 gap-4"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  {/* IMAGE 1 */}
  <div className="relative rounded-lg p-[3px]
    bg-[linear-gradient(90deg,#ff00e6,#00eaff,#7b2fff,#ff00e6)]
    shadow-[0_0_20px_5px_rgba(255,0,230,0.5)]
  ">
    <img
      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500"
      className="w-full h-80 object-cover rounded-lg"
      alt="Interior 1"
    />
  </div>

  {/* IMAGE 2 */}
  <div className="relative rounded-lg p-[3px]
    bg-[linear-gradient(90deg,#ff00e6,#00eaff,#7b2fff,#ff00e6)]
    shadow-[0_0_20px_5px_rgba(0,234,255,0.5)]
  ">
    <img
      src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=500"
      className="w-full h-80 object-cover rounded-lg"
      alt="Interior 2"
    />
  </div>

  {/* IMAGE 3 */}
  <div className="relative rounded-lg p-[3px]
    bg-[linear-gradient(90deg,#ff00e6,#00eaff,#7b2fff,#ff00e6)]
    shadow-[0_0_20px_5px_rgba(123,47,255,0.5)]
  ">
    <img
      src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=500"
      className="w-full h-80 object-cover rounded-lg"
      alt="Interior 3"
    />
  </div>
</motion.div>

  </div>
</section>

      {/* Footer */}
      <NeonFooter />

      <SplashCursor />



    </>
  );
}

function SimplePage({ title }) {
  return <div className="pt-28 container mx-auto px-4"><h2 className="text-2xl font-semibold">{title}</h2></div>;
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SimplePage title="About" />} />
        <Route path="/careers" element={<SimplePage title="Careers" />} />
        <Route path="/contact" element={<SimplePage title="Contact" />} />
      </Routes>
    </BrowserRouter>

  );

}



export default App;
