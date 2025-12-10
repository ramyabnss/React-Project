import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";


const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    front: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    label: "Scale faster",
    caption: "Modern web platforms and SaaS.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1920&q=80",
    front: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    label: "Mobile-first",
    caption: "Native apps with great UX.",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
    front: "https://images.unsplash.com/photo-1581092795360-8a0b3bd7f2c7?auto=format&fit=crop&w=800&q=80",
    label: "Cloud Ops",
    caption: "Reliable infra & automation.",
  },
];


export default function Hero() {
  const [index, setIndex] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % length), 4500);
    return () => clearInterval(t);
  }, [length]);

  const goPrev = () => setIndex(i => (i - 1 + length) % length);
  const goNext = () => setIndex(i => (i + 1) % length);

  return (
    <section className="hero-section relative overflow-hidden">

      <HeroParticles />
      <div className="hero-glass container mx-auto hero-glass hero-grid grid lg:grid-cols-12 gap-6 items-center">
        {/* Left: heading + paragraph + CTA */}
        <div className="hero-left lg:col-span-5 z-20">
          <h1 className="hero-title text-white font-extrabold">
            We build <span className="text-[#00eaff]">scalable</span> digital products that users love.
          </h1>
          <p className="hero-sub mt-4 text-gray-300 max-w-xl">
            InnoTech helps startups and enterprises design, build and operate modern
            web & mobile products. Fast iterations, resilient infrastructure, measurable growth.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="hero-cta">Get Started</a>
            <a href="#services" className="hero-cta">
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Image slider */}
        <div className="hero-right lg:col-span-7 z-20">
          <div className="hero-slider relative">
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.98, y: 6 }}
                  transition={{ duration: 0.6 }}
                  className={`slide ${active ? "z-30" : "z-20"}`}
                  style={{ pointerEvents: active ? "auto" : "none" }}
                >
                  {/* background layer */}
                  <motion.img
                    src={s.bg}
                    alt=""
                    className="layer-bg"
                    initial={{ scale: 1.06 }}
                    animate={active ? { scale: 1 } : { scale: 1.06 }}
                    transition={{ duration: 1.2 }}
                  />

                  {/* decorative front layer with parallax */}
                  <motion.img
                    src={s.front}
                    alt=""
                    className="layer-front"
                    initial={{ x: 40, opacity: 0 }}
                    animate={active ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />

                  {/* small neon label */}
                  <motion.div
                    className="neon-overlay"
                    initial={{ opacity: 0, y: -6 }}
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-xs font-semibold">{s.label}</div>
                    <div className="text-[12px] opacity-80">{s.caption}</div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* controls */}
            <div className="slider-controls">
              <button onClick={goPrev} className="slider-btn" aria-label="previous">◀</button>
              <button onClick={goNext} className="slider-btn" aria-label="next">▶</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
