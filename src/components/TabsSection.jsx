import { motion } from "framer-motion";

function TwoRowsTwoColumns() {
  const sections = [
    {
      heading: "Advanced Software & ERP Solutions",
      paragraph:
        "We deliver custom ERP solutions that streamline operations, boost efficiency, and fuel growth. Our open-source software offers flexibility, scalability, and cost-effectiveness for businesses of any size.",
    },
    {
      heading: "Next-Gen Technology & Innovation",
      paragraph:
        "BNSS is at the forefront of futuristic technology, offering:\n✔ Drone Technology Projects\n✔ Virtual Reality (VR) & Augmented Reality (AR) Solutions\n✔ Coding & Robotic Kits",
    },
    {
      heading: "Comprehensive Open-Source Development",
      paragraph:
        "We use open-source software to develop cost-effective and scalable business solutions ensuring flexibility and efficiency.",
    },
    {
      heading: "Business Growth Strategies",
      paragraph:
        "BNSS offers expert digital marketing services to boost your online presence through SEO, PPC, social media, and content marketing. We drive brand growth with result-oriented strategies for maximum visibility and engagement.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-40 px-6"
      style={{
        backgroundImage:
          "url('https://mobirise.com/extensions/glassm5/photo/assets/images/background2.jpg')",
      }}
    >
      {/* Overlay */} <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 container mx-auto text-white max-w-6xl"
      >
        <div className="paralax-text"><h2 className="text-4xl font-bold text-center mb-16">
          Your Solution Our Mission
        </h2>
        </div>

        {/* 2 Rows x 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className=" p-8 rounded-2xl shadow-xl"
              style={{
                background: "linear-gradient(180deg, rgba(59,130,246,0.5), rgba(6,8,12,0.35))",
              }}
            >
              <h3 className="text-3xl font-bold mb-4">{sec.heading}</h3>
              <p className="text-1xl leading-relaxed whitespace-pre-line">
                {sec.paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>


  );
}

export default TwoRowsTwoColumns;
