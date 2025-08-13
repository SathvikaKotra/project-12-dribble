import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="App bg-gray-50">
      <Navbar />

      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <About />
      </motion.div>

      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Services />
      </motion.div>

      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Resources />
      </motion.div>

      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
