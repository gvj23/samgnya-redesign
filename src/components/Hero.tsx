import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative">
            <div
                className="h-[62vh] min-h-[420px] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero1.png')" }}
            >
                {/* Overlay */}
                <div className="w-full h-full bg-gradient-to-b from-[rgba(7,55,99,0.65)] to-[rgba(7,55,99,0.2)] flex items-center">
                    <div className="max-w-[1180px] mx-auto px-6">

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white font-heading text-4xl sm:text-5xl md:text-6xl drop-shadow-lg leading-tight"
                        >
                            Samgnya Technologies
                            <span className="block">Foundation</span>
                        </motion.h1>

                        {/* Byline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="mt-4 text-white text-base md:text-lg max-w-prose"
                        >
                            A National Hub for Quantum Secure Communications
                        </motion.p>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                to="/research"
                                className="inline-flex items-center bg-[#0b4a72] text-white px-6 py-2.5 rounded-md shadow-md transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b4a72]/30"
                            >
                                View Research
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center bg-white text-[#073763] px-6 py-2.5 rounded-md shadow-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#073763]/30"
                            >
                                Contact
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
