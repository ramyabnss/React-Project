import React, { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function CounterSection() {
  const items = [
    { value: 1563, label: "Schools", color: "bg-purple-600" },
    { value: 1254, label: "Countries", color: "bg-orange-500" },
    { value: 1756, label: "Colleges", color: "bg-blue-500" },
    { value: 1823, label: "Organisationas", color: "bg-green-500" },
  ];

  // Scroll trigger reference
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Counter Component
  const Counter = ({ value, isActive }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }, [value, isActive]);

    return (
      <span className="text-white font-extrabold text-3xl">
        {count}
      </span>
    );
  };

  return (

  <>
  {/* HEADING ON TOP */}
  <div className="w-full flex justify-center paralax-text">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center 
  text-[oklch(51.1%_0.262_276.966)] mt-10">
    GROWTH BY NUMBERS
  </h2>
  </div>

  {/* COUNTER SECTION */}
  <div ref={sectionRef} className="w-full flex justify-center gap-16 py-20 flex-wrap">
        
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* MAIN CIRCLE */}
          <div className="bg-white w-44 h-44 rounded-full shadow-xl shadow-purple-500/50 
          border flex flex-col items-center relative -mt-25 z-10">

            {/* INNER CIRCLE */}
            <div
              className={`${item.color} w-28 h-28 rounded-full flex justify-center items-center
              shadow-xl absolute -top-6 z-30`}
            >
              <Counter value={item.value} isActive={isInView} />
            </div>

            {/* LABEL */}
            <p className="text-center mt-24 font-semibold text-gray-700 text-lg w-32 leading-tight">
              {item.label}
            </p>

          </div>

        </div>
      ))}

  </div>
</>
  );
}
