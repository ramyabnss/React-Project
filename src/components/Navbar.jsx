import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Web & Platform",
    desc: "Modern web apps, SaaS platforms",
    icon: <CodeBracketIcon className="h-6 text-sky-500" />,
    img: "/images/web.jpg",
    items: ["Web Development", "APIs & Integrations", "E-commerce"],
  },
  {
    title: "Mobile Apps",
    desc: "iOS / Android / PWA",
    icon: <DevicePhoneMobileIcon className="h-6 text-purple-500" />,
    img: "/images/mobile.jpg",
    items: ["Native Apps", "Cross-platform", "App Strategy"],
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable infra & automation",
    icon: <CloudIcon className="h-6 text-green-500" />,
    img: "/images/cloud.jpg",
    items: ["Cloud Migration", "CI/CD", "Monitoring"],
  },
  {
    title: "UI/UX Design",
    desc: "Design systems & prototyping",
    icon: <PaintBrushIcon className="h-6 text-indigo-500" />,
    img: "/images/ux.jpg",
    items: ["Design Systems", "Prototyping", "UX Research"],
  },
  {
    title: "Digital Marketing",
    desc: "Growth & SEO",
    icon: <MegaphoneIcon className="h-6 text-amber-500" />,
    img: "/images/seo.jpg",
    items: ["SEO", "Paid Ads", "Content"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed w-full z-50 top-0">
      <nav className="glass backdrop-blur-xs border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                IT
              </div>
              <div>
                <div
                  className="text-3xl font-semibold dark:text-slate-100"
                  style={{
                    color: "transparent",
                    background: "linear-gradient(90deg, #ff00e6, #00eaff, #7b2fff, #ff00e6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    animation: "parallaxMove 10s linear infinite",
                  }}
                >
                  BNSS
                </div>
                <div className="text-xs  dark:text-slate-300">Solutions & Services</div>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-primary">
                Services <ChevronDownIcon className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-3 w-[920px] glass text-white rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-6"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {/* Left column: categories */}
                      <div className="col-span-2 grid grid-cols-2 gap-4">
                        {services.slice(0, 4).map((s) => (
                          <div key={s.title} className="flex gap-3 p-2 rounded-lg hover:bg-black/10 transition-all duration-200">
                            <div className="flex-shrink-0">
                              {s.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{s.title}</div>
                              <div className="text-sm text-white/80">{s.desc}</div>
                              <div className="mt-2 text-sm flex gap-2 flex-wrap">
                                {s.items.map(it => (
                                  <span key={it} className="text-xs px-2 py-1 rounded bg-white/20 text-whitetext-xs px-2 py-1 rounded bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-200">{it}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right column: featured image + CTA */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <img src={services[0].img} alt="" className="w-full h-32 object-cover rounded-md mega-thumb mb-3" />
                          <h4 className="font-semibold text-white">Enterprise Ready</h4>
                          <p className="text-sm text-white/80">Custom solutions, long-term support and SLA-backed deployments.</p>
                        </div>
                        <div className="mt-3">
                          <a className="inline-block px-4 py-2 rounded-md bg-primary text-white text-sm" href="#contact">Get in touch</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary">About</Link>
            <Link to="/careers" className="text-gray-700 dark:text-gray-200 hover:text-primary">Careers</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary">Contact</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Dark toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md bg-slate-100 hover:bg-slate-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="md:hidden border-t border-gray-100 dark:border-gray-800  dark:bg-[#1c398e]"
            >
              <div className="px-4 py-4 space-y-3">
                <Link to="/" className="block py-2">Home</Link>

                {/* Mobile Mega Menu */}
                <div>
                  <button onClick={() => setMegaOpen(!megaOpen)} className="w-full text-left flex justify-between items-center py-2">
                    <span>Services</span>
                    <ChevronDownIcon className="w-5 h-5" />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.14 }}
                        className="pl-3"
                      >
                        {services.map(s => (
                          <div key={s.title} className="py-2 border-b last:border-b-0 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                              {s.icon}
                              <div>
                                <div className="font-medium text-white">{s.title}</div>
                                <div className="text-sm text-white/80">{s.desc}</div>
                                <div className="mt-2 flex gap-2 flex-wrap text-xs">
                                  {s.items.map(it => <span key={it} className="px-2 py-1 bg-white/20 dark:bg-gray-800 rounded">{it}</span>)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" className="block py-2">About</Link>
                <Link to="/careers" className="block py-2">Careers</Link>
                <Link to="/contact" className="block py-2">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
