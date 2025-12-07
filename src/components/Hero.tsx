// Hero.tsx (updated sizes & overlay)
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative">
            <div
                className="h-[62vh] min-h-[420px] bg-cover bg-center"
                style={{ backgroundImage: "url('/Hero.jpg')" }}
            >
                <div className="w-full h-full bg-gradient-to-b from-[rgba(7,55,99,0.58)] to-[rgba(245,250,253,0)] flex items-center">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg leading-tight"
                        >
                            IITM CDOT <span className="block">Samgnya</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-4 text-white max-w-prose text-base md:text-lg">
                            An initiative under the National Quantum Mission of Dst
                        </motion.p>

                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                            <a href="#initiatives" className="inline-block bg-samAccent text-white px-5 py-2 rounded-md shadow-md transition hover:brightness-95">
                                Explore Initiatives
                            </a>

                            <a href="#contact" className="inline-block border border-white text-white px-5 py-2 rounded-md transition hover:bg-white/10">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
