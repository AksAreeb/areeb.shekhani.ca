"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2
          id="contact-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Contact
        </h2>
        <p className="text-white/50 font-mono text-sm">
          Reach out via the floating dock below
        </p>
      </motion.div>
    </section>
  );
}
